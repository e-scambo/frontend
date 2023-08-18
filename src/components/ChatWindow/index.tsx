import React, { ReactNode } from 'react';
import { Container, ChatHeader, UserProfile, UserName, BellIcon, Online } from './style';
import SendMessage from 'components/SendMessage';
import Message from 'components/Message';

interface Props {
  children?: ReactNode;
  chatId: string;
}

const ChatWindow: React.FC<Props> = ({ children, chatId }) => {
  // Exemplo de mensagens fictícias
  const messages = [
    { id: '1', content: 'Olá, como você está?', sender: 'user' as const },
    { id: '2', content: 'Estou bem, obrigado!', sender: 'other' as const },
    { id: '1', content: 'Olá, como você está?', sender: 'user' as const },
    { id: '2', content: 'Estou bem, obrigado!', sender: 'other' as const },
    { id: '1', content: 'Olá, como você está?', sender: 'user' as const },
    { id: '2', content: 'Estou bem, obrigado!', sender: 'other' as const },
    // ...
  ];  

  return (
    <Container>
      <ChatHeader>
        <UserProfile />
        <UserName>Magno Lindo</UserName>
        <Online />
        <BellIcon />
      </ChatHeader>
      {messages.map(message => (
        <Message key={message.id} content={message.content} sender={message.sender} />
      ))}
      {children}
      <SendMessage />
    </Container>
  );
};

export default ChatWindow;
