import React from 'react';

import {Container} from './styles';
import {BoxContent} from './styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Header: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <BoxContent>
        {children}
      </BoxContent>
    </Container>
  );
};

export default Header;
