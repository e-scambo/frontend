import React, {useRef} from 'react';
import {Form} from '@unform/web';
import * as Yup from 'yup';

import PageContainer from 'components/PageContainer';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import InputForm from 'components/InputForm';
import Button from 'components/Button';

import {ContainerFields} from './styles';
import {ContainerLogo} from './styles';
import {LoginSection} from './styles';
import {ContainerDraw} from './styles';
import {ContainerLoginForm} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {StyledDrawSignUp} from './styles';
import {StyledEscamboLogo} from './styles';
import {ContainerButtons} from './styles';


import messages from './data.json';
import useUsers from 'hooks/useUsers';
import translation from 'locales/yup.locale.pt-br';
import {User} from 'types';
import {useNavigate} from 'react-router-dom';
import useAuth from 'hooks/useAuth';


interface FormFields {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  phone: string
}

const SignUp: React.FC = () => {
  const {signIn, auth} = useAuth();
  const navigate = useNavigate();
  const {createUser} = useUsers();
  const formRef = useRef<any>(null);

  const handleToSubmit = async (data: FormFields) => {
    Yup.setLocale(translation);

    try {
      if (formRef) {
        formRef.current?.setErrors({});
      }


      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        password: Yup.string().required().min(8,
            messages.validations.size),
        passwordConfirmation: Yup.string().required().
            oneOf([Yup.ref('password'), null],
                messages.validations.password),
      });
      console.log(schema);

      await schema.validate(data, {
        abortEarly: false,
      });
      let phone = '(' + data.phone.slice(0, 2) + ') ' + data.phone.slice(2, 7) + '-';
      phone = phone + data.phone.slice(7, 11);
      const newUser: User = {
        name: data.name,
        email: data.email,
        password: data.password,
        city: 'Campina Grande',
        state: 'Paraíba',
        phone: phone,
      };
      const res = await createUser(newUser);
      console.log(res);
      if (res?.status === 201) {
        console.log('Usuário criado com sucesso');
        await signIn(data.email, data.password);
        console.log(auth);
        if (auth.user) {
          navigate('/announcements');
        }
      }
    } catch (err) {
      console.log(err);
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          const errorPath = error.path;
          if (errorPath) {
            validationErrors[errorPath] = error.message;
          }
        });
        formRef.current?.setErrors(validationErrors);
      }
    }
  };

  return (
    <PageContainer>
      <JustifyContainer>
        <ContentBox>
          <LoginSection>
            <ContainerDraw>
              <Title> {messages.title} </Title>
              <Description> {messages.description} </Description>
              <StyledDrawSignUp />
            </ContainerDraw>
            <ContainerLoginForm>
              <Form ref={formRef} onSubmit={handleToSubmit}>
                <ContainerLogo>
                  <StyledEscamboLogo />
                </ContainerLogo>
                <ContainerFields>
                  <InputForm
                    name="name"
                    label="Nome"
                    type="text"
                    placeholder="Nome de usuário"
                  />
                  <InputForm
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="seunome@email.com"
                  />
                  <InputForm
                    name="phone"
                    label="Telefone"
                    type="tel"
                    placeholder="99999999999"
                  />
                  <InputForm
                    name="password"
                    label="Senha"
                    type="password"
                    placeholder="*******"
                  />
                  <InputForm
                    name="passwordConfirmation"
                    label="Confirmação de Senha"
                    type="password"
                    placeholder="*******"
                  />
                </ContainerFields>
                <ContainerButtons>
                  <Button type='submit' > Cadastre-se </Button>
                </ContainerButtons>
              </Form>
            </ContainerLoginForm>
          </LoginSection>
        </ContentBox>
      </JustifyContainer>
    </PageContainer>
  );
};

export default SignUp;
