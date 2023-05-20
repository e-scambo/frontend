import React, {useState, useRef} from 'react';
import useUsers from 'hooks/useUsers';
import {Form} from '@unform/web';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';
import translation from 'locales/yup.locale.pt-br';
import {FormHandles} from '@unform/core';
import {useNavigate} from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import InputForm from 'components/InputForm';
import MultlineInput from 'components/MultlineInput';
import Select from 'components/Select';
import RadioGroup from 'components/RadioInput';
import Button from 'components/Button';
import ReturnToPage from 'assets/img/ReturnToPage.png';
import FileInput from 'components/FileInput';
import FileInputBigger from 'components/FileInputBigger';

import {TitleArea} from './styles';
import {Paper} from './styles';
import {TitleSection} from './styles';
import {ContainerWrapper} from './styles';
import {ContainerFields} from './styles';
import {ContainerLeft} from './styles';
import {ContainerRight} from './styles';
import {AnnouncementForm} from 'types';
import {ContainerButton} from './styles';
import {ContainerReturnToPage} from './styles';
import {ContainerMegaFileInput} from './styles';
import {ContainerFileInput} from './styles';

import {states} from 'locales/states-cities.json';
import {categories} from './options.json';
import useAuth from 'hooks/useAuth';
import Footer from 'components/Footer';


// const templateOptions = [
//   {
//     id: 0,
//     value: 'product',
//     label: 'Produto',
//     checked: false,
//   },
//   {
//     id: 1,
//     value: 'service',
//     label: 'Serviço',
//     checked: false,
//   },
// ];


const CreateAnnouncement: React.FC = () => {
  const navigate = useNavigate();
  // const [cities, setCities] = useState<string[]>([]);
  const [serviceOptions, setServiceOptions] = useState<boolean>(false);
  const {createAnnouncement} = useUsers();
  const formRef = useRef<FormHandles>(null);
  const {auth} = useAuth();
  const [pictures, setPictures] = useState<File | null>(null);

  async function handleToSubmit(data: AnnouncementForm, {reset}) {
    Yup.setLocale(translation);

    try {
      if (formRef) {
        formRef.current?.setErrors({});
      }

      const schema = Yup.object().shape({
        title: Yup.string().required(),
        city: Yup.string().required(),
        description: Yup.string().required(),
        state: Yup.string().required(),
        usageTime: Yup.string(),
        type: Yup.string().required(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const state = states[(Number(data.state))].nome;
      const city = states[(Number(data.state))].cidades[(Number(data.city))];
      // console.log('pic', iterator.next().value);
      const anuncio = await createAnnouncement(auth.user, {
        title: data.title,
        description: data.description,
        type: data.type,
        category: categories.Serviço[Number(data.category)],
        localization: `${state} - ${city}`,
        usage_time: data.usage_time,
        images: [pictures],
      });
      if (anuncio?.status === 201) {
        navigate('/announcements');
      };

      // reset
      // reset();
      // setPictures(new Map<key, string >());
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

  // const getCities = useCallback((stateIndex: number) => {
  //   setCities(states[stateIndex].cidades);
  // }, []);

  const isServiceAnnouncement = (): boolean => {
    return formRef.current?.getFieldValue('type') === 'Serviço';
  };

  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
          <Form onSubmit={handleToSubmit} ref={formRef} >
            <TitleArea>
                <TitleSection>
                  <ContainerReturnToPage>
                  <Link to="/Announcements">
                    <img src={ReturnToPage} />
                  </Link>
                </ContainerReturnToPage>
                  Anuncie seu produto
                </TitleSection>
            </TitleArea>
            <Paper>
              <RadioGroup
                onChange={() => {
                  setServiceOptions(isServiceAnnouncement());
                }}
              />
              <ContainerWrapper>
                <ContainerLeft>
                  <ContainerFields>
                    <InputForm
                      name="title"
                      label="Título do anúncio"
                      type="text"
                      placeholder="Título do anúncio"
                    />
                    <MultlineInput
                      name="description"
                      label="Descrição do anúncio"
                      type="text"
                      placeholder="Descrição aqui"
                    />
                    <InputForm
                      name="localization"
                      label="Localização"
                      type="text"
                      placeholder={serviceOptions? '' : 'Localização'}
                      disabled={serviceOptions}
                    />
                    <InputForm
                      name="usage_time"
                      label="Tempo de uso"
                      type="text"
                      placeholder={serviceOptions? '' : 'Tempo de uso'}
                      disabled={serviceOptions}
                    />
                    <Select
                      name="category"
                      label="Categoria"
                      placeholder="Categoria"
                      options={serviceOptions ?
                        categories['Serviço'] : categories['Produto']}
                    />
                    {/* <Select
                      name='state'
                      label='Estado'
                      placeholder='Selecione o estado'
                      options={stateNames}
                      onSelect={(value) => getCities(value)}
                    />
                    <Select
                      name='city'
                      label='Cidade'
                      placeholder='Selecione a cidade'
                      options={cities}
                    /> */}
                  </ContainerFields>
                </ContainerLeft>
                <ContainerRight>
                  <ContainerMegaFileInput>
                    <FileInputBigger onFileSelect={setPictures} />
                  </ContainerMegaFileInput>
                  <ContainerFileInput>
                    <FileInput onFileSelect={setPictures} />
                    <FileInput onFileSelect={setPictures} />
                    <FileInput onFileSelect={setPictures} />
                  </ContainerFileInput>
                  {/* <input
                    type="file"
                    name='images'
                    onChange={(e) => setPictures(e.target.files![0])}
                  /> */}
                </ContainerRight>
              </ContainerWrapper>
            </Paper>
            <ContainerButton>
                <Button>
                  Publicar produto
                </Button>
            </ContainerButton>
          </Form>
        </ContentBox>
      </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default CreateAnnouncement;
