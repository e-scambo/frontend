import React from 'react';

import { Container } from './style';

interface Props {
    children?: JSX.Element | JSX.Element[];
  }

const ChatWindow: React.FC<Props> = ({children}) => {
  return (
    <Container>
    </Container>
  );
};

export default ChatWindow;
