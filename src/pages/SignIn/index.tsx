import React from 'react';
import useAuth from 'hooks/useAuth';
import {useNavigate} from 'react-router-dom';

import {Form} from '@unform/web';
// import {FcGoogle} from 'react-icons/fc';
// import {FaFacebook} from 'react-icons/fa';
// import OutlineButton from 'components/OutlineButton';
import EmailInput from 'components/EmailInput';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import PasswordInput from 'components/PasswordInput';

import {Principal} from './styles';
import {ButtonLink} from './styles';
import {ContainerFields} from './styles';
import {ContainerLogo} from './styles';
import {ContainerLoginForm} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {StyledEscamboLogo} from './styles';
import {InfoText} from './styles';
import {Redirect} from './styles';

import data from './data.json';
import useNotification from 'hooks/useNotification';

interface SignInProps {
  email: string,
  password: string,
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const {errorMessage} = useNotification();
  const {signIn, auth} = useAuth();


  const handleToSubmit = async (data: SignInProps) => {
    await signIn(data.email, data.password);
    if (localStorage) {
      console.log(auth);
      navigate('/announcements');
    } else {
      errorMessage('Email ou senha inválidos');
    }
  };


  return (
    <Principal>
      <ContainerLoginForm>
        <ContainerLogo>
          <StyledEscamboLogo/>
        </ContainerLogo>
        <Title> {data.title} </Title>
        <Description> {data.description} </Description>
        <Form onSubmit={handleToSubmit}>
          <ContainerFields>
            <EmailInput
              name="email"
              label="Email"
              type="text"
              placeholder={data.placeholders.email}
            />
            <PasswordInput
              name="password"
              label="Senha"
              type="password"
              placeholder={data.placeholders.password}
            />
            <ButtonLink to='/recover' >
              {data.forgotPassword}
            </ButtonLink>
            <Button
              type='submit'
              // onClick={() => navigate('/announcements')}
            > {data.loginButton} </Button>
            {/* <InfoText> {data.loginWithSocialNetwork} </InfoText>
            <OutlineButton
              Icon={<FaFacebook fill='#3b5998' fontSize={24}/>}
            >
              {data.facebookLogin}
            </OutlineButton>
            <OutlineButton
              Icon={<FcGoogle fontSize={24} />}
              onClick={() => loginWithRedirect()}
            >
              {data.googleLogin}
            </OutlineButton> */}
            <InfoText> {data.doesNotHaveAccount}
              <Redirect to='/signup' replace >
                {data.signUp}
              </Redirect>
            </InfoText>
          </ContainerFields>
        </Form>
      </ContainerLoginForm>
      <Carousel/>
    </Principal>
  );
};

export default SignIn;
