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


interface FormFields {
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string,
  phone: string
}

const SignUp: React.FC = () => {
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


      /* TODO: Send data to Back-end */
      const newUser: User = {
        name: data.name,
        email: data.email,
        password: data.password,
        city: 'Campina Grande',
        state: 'Paraíba',
        phone: data.phone,
      };

      createUser(newUser);
    } catch (err) {
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
                    type="text"
                    placeholder="(87) 99999-9999"
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
