import React, {useState, useRef, useEffect} from 'react';
import {Form} from '@unform/web';
import * as Yup from 'yup';
import translation from 'locales/yup.locale.pt-br';


import PageContainer from 'components/PageContainer';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import Header from 'components/Header';
import InputForm from 'components/InputForm';
import ProfileAvatar from 'components/ProfileAvatar';
import Button from 'components/Button';

import {ContainerFields} from './styles';
import {ContainerForm} from './styles';
import {ContainerProfile} from './styles';
import {StyledLink} from './styles';
import {Paper} from './styles';
import {TitleSection} from './styles';
import {InformationSection} from './styles';
import {ProfileName} from './styles';
import {ProfileLocation} from './styles';
import {User} from 'types';
import useUsers from 'hooks/useUsers';
import useAuth from 'hooks/useAuth';
import Footer from 'components/Footer';


const Profile: React.FC = () => {
  const [disableEditMode, setDisableEditMode] = useState(true);
  const {user, fetchUserById} = useUsers();
  const {auth} = useAuth();

  useEffect(() => {
    fetchUserById(auth.user);
  }, []);

  const formRef = useRef<any>(null);
  async function handleToSubmit(data: User) {
    if (disableEditMode) {
      setDisableEditMode((prevState) => !prevState);
      return;
    }

    if (!disableEditMode) {
      Yup.setLocale(translation);
      try {
        if (formRef) {
          formRef.current?.setErrors({});
        }

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string().required(),
          phone: Yup.string().required(),
          city: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        /* TODO: Send data to Back-end */
        console.log(data);
        setDisableEditMode((prevState) => !prevState);
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
          formRef.current.setErrors(validationErrors);
        }
      }
    }
  };

  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
          <Form
            onSubmit={handleToSubmit}
            ref={formRef}
            initialData={user as Record<string, any>}
          >
            <Paper>

              <ContainerForm>

                <TitleSection>
                  Meu Perfil
                </TitleSection>

                <ContainerFields>

                  <InputForm
                    name="name"
                    label="Nome"
                    type="text"
                    placeholder="Nome de usuário"
                    disabled={disableEditMode}
                  />
                  <InputForm
                    name="email"
                    label="Email"
                    type="text"
                    placeholder="seunome@email.com"
                    disabled={disableEditMode}
                  />
                  <InputForm
                    name="city"
                    label="Cidade"
                    type="text"
                    placeholder="Campina Grande - PB"
                    disabled={disableEditMode}
                  />
                  <InputForm
                    name="phone"
                    label="Telefone"
                    type="text"
                    placeholder="83 9 0000-0000"
                    disabled={disableEditMode}
                  />

                  <StyledLink to='/profile'>
                    Termos e condições de uso
                  </StyledLink>

                </ContainerFields>

              </ContainerForm>

              <ContainerProfile>
                <ProfileAvatar />
                <InformationSection>
                  <ProfileName>
                    Nome de Usuário
                  </ProfileName>
                  <ProfileLocation>
                    Localização
                  </ProfileLocation>
                </InformationSection>
                <Button type='submit'>
                  {disableEditMode ? 'EDITAR PERFIL' : 'SALVAR'}
                </Button>
              </ContainerProfile>

            </Paper>
          </Form>
        </ContentBox>
      </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default Profile;
