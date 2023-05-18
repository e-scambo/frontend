import React from 'react';

import {Container, Hr} from './styles';
import {BoxContent} from './styles';
import {Title} from './styles';
import {BoxColumn} from './styles';
import {NavLink} from './styles';
import logo from 'assets/img/Logomarca - Branca.png';
import {Logo} from './styles';
import twitter from 'assets/img/twitter.png';
import linkedin from 'assets/img/linkedin.png';
import facebook from 'assets/img/facebook.png';
import {Contact} from './styles';
import {Icon} from './styles';
import {BoxColumnContact} from './styles';

const Footer = () => {
  return (
    <Container>
      <BoxContent>
        <BoxColumn>
          <Logo
            src={logo}
          />
        </BoxColumn>
        <BoxColumn>
          <Title>Empresa</Title>
          <NavLink to=''>Sobre nós</NavLink> <br />
          <NavLink to=''>Trabalhe conosco</NavLink> <br />
          <NavLink to=''>Políticas</NavLink> <br />
        </BoxColumn>
        <BoxColumn>
          <Title>Categorias</Title>
          <NavLink to='/favorites'>Favoritos</NavLink> <br />
          <NavLink to='/profile'>Minha Conta</NavLink> <br />
        </BoxColumn>
        <BoxColumnContact>
          <Contact
            href={'https://twitter.com/'}
          >
            <Icon
              src={twitter}
            />
          </Contact>

          <Contact
            href={'https://linkedin.com/'}
          >
            <Icon
              src={linkedin}
            />
          </Contact>

          <Contact
            href={'https://facebook.com/'}
          >
            <Icon
              src={facebook}
            />
          </Contact>
        </BoxColumnContact>
      </BoxContent>
      <Hr/>
      <BoxContent>
        <BoxColumn>
          <Title>{'© 2023 E-troka. All Rights Reserved. '}</Title>
        </BoxColumn>
        <BoxColumn>
          <NavLink to=''>Política de Privacidade</NavLink> <br />
        </BoxColumn>
        <BoxColumn>
          <NavLink to=''>Termos e Condições</NavLink> <br />
        </BoxColumn>
        <BoxColumn>
          <NavLink to=''>Código de Conduta</NavLink> <br />
        </BoxColumn>
      </BoxContent>
    </Container>
  );
};

export default Footer;
