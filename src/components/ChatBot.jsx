import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import Footer from './Footer';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Welcome to JerseyHub! How can I assist you today? Type 'quit' to end the chat." }
  ]);
  const [userInput, setUserInput] = useState('');
  const endOfChatRef = useRef(null);

  const pairs = [
    [/hi|hello|hey/i, ["Hello! Welcome to JerseyHub.", "Hi there! How can I help you today?"]],
    [/how are you/i, ["I'm just a bot, but I'm here to help you!", "I'm doing great! How can I assist you?"]],
    [/what is your name/i, ["I'm JerseyBot, your virtual assistant.", "You can call me JerseyBot."]],
    [/help|support/i, ["Sure! What do you need help with? Products, orders, or something else?"]],
    [/bye|goodbye|quit/i, ["Goodbye! Have a great day!", "See you soon!"]],
    [/thank you|thanks/i, ["You're welcome!", "Happy to help!"]],
    [/.*\bproducts\b.*/i, ["We have a variety of jerseys available. Are you looking for football, basketball, or custom jerseys?"]],
    [/.*\bprice\b.*/i, ["Prices vary depending on the jersey. Football jerseys start at ksh1200."]],
    [/.*\border\b.*/i, ["You can place an order directly on our website or visit our store."]],
    [/.*\bshipping\b.*/i, ["We offer free shipping for orders over 500. Standard shipping takes 3-5 business days."]],
    [/.*\bpayment\b.*/i, ["We accept credit cards, PayPal, and mobile payments."]],
    [/.*\btrack\b.*/i, ["You can track your order using the tracking ID sent to your email."]],
    [/.*\breturn\b.*/i, ["Returns are accepted within 30 days of purchase. The item must be in its original condition."]],
    [/.*\bcancellation\b.*/i, ["Orders can be canceled within 24 hours of placement."]],
    [/.*\bdiscount\b.*/i, ["We currently have a 10% discount on all football jerseys."]],
    [/.*\bcontact\b.*/i, ["You can contact us at support@jerseyhub.com or call us at +123456789."]],
    [/.*\blocation\b.*/i, ["Our store is located at 123 Jersey Street, Sports City."]],
    [/.*\bhours\b.*/i, ["We're open from 9 AM to 8 PM, Monday to Saturday."]],
    [/.*\bfootball\b.*/i, ["We have football jerseys for teams like Manchester United, Barcelona, and more."]],
    [/.*\bbasketball\b.*/i, ["We offer basketball jerseys for teams like the Lakers, Bulls, and more."]],
    [/.*\bcustom\b.*/i, ["You can customize your jersey with your name and number."]],
  ];

  const getResponse = (input) => {
    for (const [pattern, responses] of pairs) {
      if (pattern.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    // Fallback if no pattern matched
    const fallbackResponses = [
      "I'm sorry, I didn't understand that.",
      "Could you please clarify your question?",
      "I'm here to help! Could you rephrase that?"
    ];
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;

    const newMessages = [...messages, { sender: 'user', text: trimmedInput }];
    if (trimmedInput.toLowerCase() === 'quit') {
      newMessages.push({ sender: 'bot', text: "Goodbye! Feel free to chat with me anytime." });
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
      <h2 className="chatbot-title">JerseyHub ChatBot</h2>
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
      <Footer />
    </div>
  );
};

export default ChatBot;