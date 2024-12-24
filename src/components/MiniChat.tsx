import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ImageIcon from '@mui/icons-material/Image';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton, TextField, Button } from '@mui/material';

interface MiniChatProps {
  toggleChat: () => void;
}

const MiniChat: React.FC<MiniChatProps> = ({ toggleChat }) => {
  const [messages, setMessages] = useState<{ text: string; sender: boolean }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: trimmedInput, sender: true },
      ]);

      setInput('');

      setTimeout(() => {
        const botResponse = "Thanks for your message! How can I assist you further?";
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: false },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '350px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        zIndex: 45,
      }}
    >
      {/* Chat Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#F26922',
          color: '#fff',
          padding: '10px',
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: '16px' }}>Chat with Cypher</span>
        <IconButton size="small" style={{ color: '#fff' }} onClick={toggleChat}>
          <CloseIcon />
        </IconButton>
      </div>

      {/* Chat Messages */}
      <div
        style={{
          height: '300px',
          overflowY: 'auto',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.sender ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender ? '#3F3F46' : '#F4F4F5',
              color: msg.sender ? '#fff' : '#71717A',
              padding: '10px',
              borderRadius: '8px',
              maxWidth: '75%',
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div style={{ padding: '10px' }}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          placeholder="Enter your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          style={{ marginBottom: '10px', borderColor:'#71717A' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <IconButton size="small">
              <PhotoCameraIcon />
            </IconButton>
            <IconButton size="small">
              <ImageIcon />
            </IconButton>
            <IconButton size="small">
              <AttachFileIcon />
            </IconButton>
          </div>
          <Button
            variant="contained"
            onClick={handleSend}
            disabled={!input.trim()}
            sx={{
                borderRadius:'50px',
                backgroundColor:'#F26922'
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiniChat;