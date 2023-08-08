import React, { ReactNode } from 'react';
import { Container } from './style';

interface Props {
  children?: ReactNode;
}

const ChatWindow: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ChatWindow;
