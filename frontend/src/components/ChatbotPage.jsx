import React, { useState, useEffect, useRef } from 'react';
import { FiSend, FiMic, FiPaperclip, FiSun, FiMoon, FiImage, FiVideo, FiPlayCircle } from 'react-icons/fi'; // Using react-icons for icons

// Sample initial messages
const initialMessages = [
  { id: 1, sender: 'bot', type: 'text', content: 'Hello! I am NyayMitra AI. How can I assist you with your legal queries today?', timestamp: '10:00 AM' },
  { id: 2, sender: 'user', type: 'text', content: 'Hi NyayMitra, I have a question about consumer rights.', timestamp: '10:01 AM' },
  { id: 3, sender: 'bot', type: 'text', content: 'I can certainly help with that. Please tell me more about your specific situation.', timestamp: '10:01 AM' },
  { id: 4, sender: 'user', type: 'image', content: 'https://cdn.pixabay.com/photo/2015/02/01/18/27/hammer-620011_1280.jpg', originalFilename: 'damaged_product.png', timestamp: '10:02 AM' },
  { id: 5, sender: 'bot', type: 'text', content: 'Thanks for the image. Could you describe what happened?', timestamp: '10:03 AM' },
  { id: 6, sender: 'user', type: 'video', content: 'https://cdn.pixabay.com/video/2024/02/02/198890-909564521_large.mp4', thumbnail: 'https://cdn.pixabay.com/photo/2015/02/01/18/27/hammer-620011_1280.jpg', originalFilename: 'evidence_video.mp4', timestamp: '10:04 AM' },
];

const ChatMessage = ({ msg, isUser }) => {
  const baseBubbleClass = 'p-3 rounded-2xl max-w-xs md:max-w-md lg:max-w-lg break-words shadow-md';
  const userBubbleClass = `bg-blue-500 text-white ${baseBubbleClass} ml-auto`;
  const botBubbleClass = `bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 ${baseBubbleClass} mr-auto`;

  const renderContent = () => {
    switch (msg.type) {
      case 'text':
        return <p>{msg.content}</p>;
      case 'image':
        return (
          <div>
            <img src={msg.content} alt={msg.originalFilename || 'User image'} className="rounded-lg max-h-60 w-auto object-contain cursor-pointer" onClick={() => window.open(msg.content, '_blank')} />
            {msg.originalFilename && <p className="text-xs mt-1 opacity-75">{msg.originalFilename}</p>}
          </div>
        );
      case 'video':
        return (
          <div className="relative group">
            {msg.thumbnail ? (
              <img src={msg.thumbnail} alt={msg.originalFilename || 'Video thumbnail'} className="rounded-lg max-h-60 w-auto object-contain" />
            ) : (
              <div className="bg-slate-300 dark:bg-slate-600 rounded-lg h-40 w-60 flex items-center justify-center">
                <FiVideo className="w-12 h-12 text-slate-500 dark:text-slate-400" />
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-opacity rounded-lg cursor-pointer" onClick={() => window.open(msg.content, '_blank')}>
              <FiPlayCircle className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" />
            </div>
            {msg.originalFilename && <p className="text-xs mt-1 opacity-75">{msg.originalFilename}</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex mb-3 animate-message-in ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={isUser ? userBubbleClass : botBubbleClass}>
        {renderContent()}
        <p className={`text-xs mt-1 ${isUser ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'} text-right`}>{msg.timestamp}</p>
      </div>
    </div>
  );
};

const ChatbotPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const messagesEndRef = useRef(null);
  // Refs for audio elements to allow re-playing and control
  const sentSoundRef = useRef(null);
  const receivedSoundRef = useRef(null);

  useEffect(() => {
    // Preload audio files if they don't exist
    if (!sentSoundRef.current) {
      // Ensure this file exists at public/sounds/Message Sent.mp3
      sentSoundRef.current = new Audio('/sounds/Message Sent.mp3');
      sentSoundRef.current.load(); 
    }
    if (!receivedSoundRef.current) {
      // Corrected path: Ensure this file exists at public/sounds/Message Receive.mp3
      receivedSoundRef.current = new Audio('/sounds/Message Receive.mp3');
      receivedSoundRef.current.load(); 
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const playSound = (type) => {
    let soundToPlay = null;
    if (type === 'sent' && sentSoundRef.current) {
      soundToPlay = sentSoundRef.current;
    } else if (type === 'received' && receivedSoundRef.current) {
      soundToPlay = receivedSoundRef.current;
    }

    if (soundToPlay) {
      soundToPlay.currentTime = 0;
      soundToPlay.play().catch(error => {
        console.warn(`Sound playback error (${type}):`, error);
      });
    } else {
      console.warn(`Sound effect for "${type}" not loaded or type is unknown.`);
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      type: 'text',
      content: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    playSound('sent'); // Placeholder for sent sound

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: 'bot',
        type: 'text',
        content: `I received: "${newMessage.content}". I'm processing your request... (This is a hardcoded response)`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      playSound('received'); // Placeholder for received sound
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`flex flex-col h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300`}>
      {/* Header (Optional - can be removed or customized) */}
      <header className="bg-white dark:bg-slate-800 shadow-sm p-3 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">NyayMitra AI Chat</h1>
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300">
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </header>

      {/* Message List */}
      <div className="flex-grow overflow-y-auto p-4 space-y-2 bg-slate-100 dark:bg-slate-850"> {/* Custom dark bg for chat area */}
        {messages.map(msg => (
          <ChatMessage key={msg.id} msg={msg} isUser={msg.sender === 'user'} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white dark:bg-slate-800 p-3 border-t border-slate-200 dark:border-slate-700 sticky bottom-0">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
            <FiPaperclip size={22} /> {/* Placeholder for attachments */}
          </button>
          <textarea
            rows="1"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-grow p-2.5 border border-slate-300 dark:border-slate-600 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none bg-slate-50 dark:bg-slate-700 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
            style={{ maxHeight: '120px' }} // Limit textarea growth
          />
          {inputText ? (
            <button onClick={handleSendMessage} className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              <FiSend size={20} />
            </button>
          ) : (
            <button className="p-3 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <FiMic size={22} /> {/* Placeholder for voice input */}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;