import React, { ReactNode } from 'react';
import { Container, ChatHeader, UserProfile, UserName, BellIcon, Online } from './style';
import SendMessage from 'components/SendMessage';

interface Props {
  children?: ReactNode;
  chatId: string;
}

const ChatWindow: React.FC<Props> = ({ children, chatId }) => {
  return (
    <Container>
      <ChatHeader>
        <UserProfile/>
        <UserName>Magno Lindo</UserName>
        <Online/>
        <BellIcon/>
      </ChatHeader>
      {children}
      <SendMessage/>
    </Container>
  )
};

export default ChatWindow;
