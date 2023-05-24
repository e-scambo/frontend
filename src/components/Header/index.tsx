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
            <NavLink to='/announcements'>Anúncios</NavLink>
            <NavLink to='/chats'>Chats</NavLink>
            <NavLink to='/favorites'>Favoritos</NavLink>
            <NavLink to='/carteira'>Carteira</NavLink>
            <NavLink to='/profile'>Meu Perfil</NavLink> 
            <NavLink to='/signin' onClick={() => signOut()}>Sair</NavLink>
          </NavDesktop>
        </ContainerMenus>
        <ButtonOrange onClick={() => navigate('/create')}>Anunciar</ButtonOrange>
      </BoxContent>
    </Container>
  );
};

export default Header;
