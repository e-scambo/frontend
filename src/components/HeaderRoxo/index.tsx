import React from 'react';

import {Container} from './styles';
import {BoxContent} from './styles';
import {ContentBox} from './styles';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Header: React.FC<Props> = ({children}) => {
  return (
    <Container>
      <BoxContent>
        <ContentBox>
          {children}
        </ContentBox>
      </BoxContent>
    </Container>
  );
};

export default Header;
