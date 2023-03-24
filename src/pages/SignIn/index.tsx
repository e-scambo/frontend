import React from 'react';
import useAuth from 'hooks/useAuth';
import {useNavigate} from 'react-router-dom';

import {Form} from '@unform/web';
// import {FcGoogle} from 'react-icons/fc';
// import {FaFacebook} from 'react-icons/fa';
// import OutlineButton from 'components/OutlineButton';
import PageContainer from 'components/PageContainer';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import InputForm from 'components/InputForm';
import Button from 'components/Button';

import {ButtonLink} from './styles';
import {ContainerFields} from './styles';
import {ContainerLogo} from './styles';
import {LoginSection} from './styles';
import {ContainerDraw} from './styles';
import {ContainerLoginForm} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {StyledEscamboLogo} from './styles';
import {ContainerButtons} from './styles';
import {InfoText} from './styles';
import {Redirect} from './styles';
import {ContainerPurple} from './styles';

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
    <PageContainer>
      <JustifyContainer>
        <ContentBox>
          <LoginSection id='paper' >
            <ContainerDraw>
              <ContainerLogo>
                <StyledEscamboLogo />
              </ContainerLogo>
              <Title> {data.title} </Title>
              <Description> {data.description} </Description>
              <ContainerLoginForm>
                <Form onSubmit={handleToSubmit}>
                  <ContainerFields>
                    <InputForm
                      name="email"
                      label="Email"
                      type="text"
                      placeholder={data.placeholders.email}
                    />
                    <InputForm
                      name="password"
                      label="Senha"
                      type="password"
                      placeholder={data.placeholders.password}
                    />
                    <ButtonLink to='/recover' >
                      {data.forgotPassword}
                    </ButtonLink>
                  </ContainerFields>
                  <ContainerButtons>
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
                  </ContainerButtons>
                </Form>
              </ContainerLoginForm>
            </ContainerDraw>
          </LoginSection>
          <ContainerPurple>
          </ContainerPurple>
        </ContentBox>
      </JustifyContainer>
    </PageContainer>
  );
};

export default SignIn;
