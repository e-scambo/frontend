import React, {useState} from 'react';
import useAuth from 'hooks/useAuth';
import {useNavigate} from 'react-router-dom';

import {Container, NavDesktop} from './styles';
import {BoxContent} from './styles';
import {ContainerLogo} from './styles';
import {ContainerMenus} from './styles';
import {StyledEscamboLogo} from './styles';
import {NavLink} from './styles';
import {ButtonOrange} from './styles';
import Burguer from 'components/Burguer/Burguer.js';
import MenuMobile from 'components/MenuMobile/Menu';
import {
  IconeAnuncios,
  IconeChat,
  IconeFavoritos,
  IconeCarteira,
  IconeUsuario,
  IconeSeta
  } from './styles';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const {signOut} = useAuth();

  return (
    <Container>
      <BoxContent>
        <ContainerLogo>
          <StyledEscamboLogo />
        </ContainerLogo>
        <Burguer open={open} setOpen={setOpen} />
        <ContainerMenus>
          <MenuMobile open={open} ></MenuMobile>
          <NavDesktop>
            <NavLink to='/announcements'><IconeAnuncios/>Anúncios</NavLink>
            <NavLink to='/chats'><IconeChat/>Chats</NavLink>
            <NavLink to='/favorites'><IconeFavoritos/>Favoritos</NavLink>
            <NavLink to='/carteira'><IconeCarteira/>Carteira</NavLink>
            {/* <NavLink to='/profile'>Meu Perfil</NavLink> 
            <NavLink to='/signin' onClick={() => signOut()}>Sair</NavLink> */}
          </NavDesktop>
        </ContainerMenus>
        <ButtonOrange onClick={() => navigate('/create')}>Anunciar</ButtonOrange>
      </BoxContent>
    </Container>
  );
};

export default Header;
