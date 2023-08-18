import React, { ReactNode } from 'react';
import { Container } from './style';
import SendMessage from 'components/SendMessage';

interface Props {
  children?: ReactNode;
  chatId: string;
}

const ChatWindow: React.FC<Props> = ({ children, chatId }) => {
  return (
    <Container>
      {children}
      <SendMessage/>
    </Container>
  )
};

export default ChatWindow;
