import React from 'react';
import styled from 'styled-components';

// Estilização básica do componente de mensagem
const MessageContainer = styled.div<{ sender: 'user' | 'other' }>`
  display: flex;
  align-items: ${({ sender }) => (sender === 'user' ? 'flex-end' : 'flex-start')};
  margin: ${({ sender }) => (sender === 'user' ? '8px 40px 8px 8px' : '8px 8px 8px 40px')};
`;

const MessageBubble = styled.div<{ sender: 'user' | 'other' }>`
  background-color: ${({ sender }) => (sender === 'user' ? '#4C0C6C' : '#D9D9D9')};
  color: ${({ sender }) => (sender === 'user' ? '#FFF' : '#000')};
  border-radius: ${({ sender }) => (sender === 'user' ? '8px 8px 0px 8px' : '8px 8px 8px 0px')};
  padding: 8px 12px;
  max-width: 70%;
  margin-left: ${({ sender }) => (sender === 'user' ? 'auto' : 'none')};
`;

const MessageText = styled.p`
  margin: 0;
`;

const Message: React.FC<{ content: string; sender: 'user' | 'other' }> = ({ content, sender }) => {
  return (
    <MessageContainer sender={sender}>
      <MessageBubble sender={sender}>
        <MessageText>{content}</MessageText>
      </MessageBubble>
    </MessageContainer>
  );
};

export default Message;
