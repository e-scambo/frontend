import React from 'react';

import { Container } from './style';

interface Props {
    children?: JSX.Element | JSX.Element[];
  }

const SideBar: React.FC<Props> = ({children}) => {
  return (
    <Container>
    </Container>
  );
};

export default SideBar;
