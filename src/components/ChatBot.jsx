import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I'm your chatbot. Type 'quit' to end the chat." }
  ]);
  const [userInput, setUserInput] = useState('');
  const endOfChatRef = useRef(null);

  const pairs = [
    [/(hi|hey|hello|hola|good\s(morning|afternoon|evening))/i, [
      "Hi, how can I help you today?",
      "Hello there, how can I assist you?"
    ]],
    [/(.*)(course|program|training|classes)(.*)/i, [
      "We offer great programs in Android Development, Full Stack Development, Data Science, and many more. Would you like details on any of these?"
    ]],
    [/(.*)android(.*)/i, [
      "We offer an Android course where you'll learn how to build mobile apps using Kotlin or Flutter. Interested?"
    ]],
    [/(.*)(Duration|How long|Length|Weeks|Months)(.*)/i, [
      "Most of our courses run between 2 to 6 months. It can be longer if you go advanced."
    ]],
    [/(.*)(apply|register|join)(.*)/i, [
      "You can join by registering online by visiting https://modcom.co.ke/register or visiting our office."
    ]],
    [/(.*)(location|located|address)(.*)/i, [
      "We are located at Haven Court, 2nd Floor, Westlands off Waiyaki Way."
    ]]
  ];

  const getResponse = (input) => {
    for (const [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    // Fallback if no pattern matched
    const fallbackResponses = [
      "Sorry, I didn't get that.",
      "Please clarify.",
      "Pardon me?"
    ];
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;

    const newMessages = [...messages, { sender: 'user', text: trimmedInput }];
    if (trimmedInput.toLowerCase() === 'quit') {
      newMessages.push({ sender: 'bot', text: "Goodbye! Talk later." });
    } else {
      const response = getResponse(trimmedInput);
      newMessages.push({ sender: 'bot', text: response });
    }

    setMessages(newMessages);
    setUserInput('');
  };

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-title">ChatBot</h2>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
          </div>
        ))}
        <div ref={endOfChatRef} />
      </div>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="chatbot-input"
        />
        <button type="submit" className="chatbot-send-button">Send</button>
      </form>
    </div>
  );
};

export default ChatBot;