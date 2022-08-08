import React from 'react';
import useAuth from 'hooks/useAuth';
import {useNavigate} from 'react-router-dom';
import Button from 'components/Button';

import {Container} from './styles';
import {BoxContent} from './styles';
import {ContainerLogo} from './styles';
import {ContainerMenus} from './styles';
import {StyledEscamboLogo} from './styles';
import {NavLink} from './styles';


const Header: React.FC = () => {
  const navigate = useNavigate();
  const {signOut} = useAuth();

  return (
    <Container>
      <BoxContent>
        <ContainerLogo>
          <StyledEscamboLogo />
          E-SCAMBO
        </ContainerLogo>
        <ContainerMenus>
          <nav>
            <NavLink to='/announcements'>Anúncios</NavLink>
            {/* <NavLink to='/chats'>Chats</NavLink> */}
            <NavLink to='/profile'>Meu Perfil</NavLink>
            <NavLink to='/favorites'>Favoritos</NavLink>
            <NavLink to='/signin' onClick={() => signOut()} > Sair </NavLink>
          </nav>
          <Button onClick={() => navigate('/create')}> ANUNCIAR </Button>
        </ContainerMenus>
      </BoxContent>
    </Container>
  );
};

export default Header;
