import React, {useState, useRef, useCallback, useEffect} from 'react';
import useUsers from '../../hooks/useUsers';
import {Form} from '@unform/web';
import {Link, useParams} from 'react-router-dom';
import * as Yup from 'yup';
import translation from '../../locales/yup.locale.pt-br';
import {FormHandles} from '@unform/core';
import {useNavigate} from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import Header from '../../components/Header';
import JustifyContainer from '../../components/JustifyContainer';
import ContentBox from '../../components/ContentBox';
import InputForm from '../../components/InputForm';
import MultlineInput from '../../components/MultlineInput';
import Select from '../../components/Select';
import Button from '../../components/Button';
import FileInputBigger from '../../components/FileInputBigger';

import {TitleArea} from './styles';
import {Paper} from './styles';
import {TitleSection} from './styles';
import {ContainerWrapper} from './styles';
import {ContainerFields} from './styles';
import {ContainerLeft} from './styles';
import {ContainerRight} from './styles';
import {AnnouncementForm} from '../../types';
import {ContainerButton} from './styles';
import {ContainerReturnToPage} from './styles';
import {ContainerMegaFileInput} from './styles';
import {ReturnToPageIcon} from './styles';

import {states, stateNames} from '../../locales/states-cities.json';
import {categories} from './options.json';
import Footer from '../../components/Footer';
import useAnnouncements from '../../hooks/useAnnouncements';
import useAuth from 'hooks/useAuth';

const EditAnnouncement: React.FC = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {announcement, fetchAnnouncementById} = useAnnouncements();
  const {editAnnouncement} = useUsers();
  const {auth} = useAuth();
  const [image, setImage] = useState<string>('');

  useEffect(() => {
    if (id) {
      fetchAnnouncementById(id);
      imagean();
    }
  }, []);

  const imagean = ()=>{
    console.log(announcement);
    if(announcement?.images[0]){
      setImage('https://etrokaapi.herokuapp.com/images/'+announcement?.images[0].originalname);
    }else{
      return 'https://etrokaapi.herokuapp.com/images/semimagem.png';
    }
  }

  const [cities, setCities] = useState<string[]>([]);
  const [serviceOptions] = useState<boolean>(true);
  const formRef = useRef<FormHandles>(null);
  const [pictures, setPictures] = useState<File | null>(null);
  
  
  async function handleToSubmit(data: AnnouncementForm, {reset}) {
    Yup.setLocale(translation);
    console.log(data);
    var categorySelect = "";
    if(isServiceAnnouncement() === false){
      data.type = "product";
      const cat = categories.Produto[Number(data.category)];
      if(cat === "Livros"){
        categorySelect = "Outros";
      }else{
        categorySelect = categories.Produto[Number(data.category)];
      }
      
    } else{ 
      data.type = "service";
      categorySelect = categories.Serviço[Number(data.category)];
      data.usage_time="Serviço";
      
    }
    console.log(pictures);
    try {
      if (formRef) {
        formRef.current?.setErrors({});
      }

      const state = states[(Number(data.state))].nome;
      const city = states[(Number(data.state))].cidades[(Number(data.city))];
      
      const anuncio = await editAnnouncement(auth.user, {
        title: data.title,
        description: data.description,
        category: categorySelect,
        localization: `${state} - ${city}`,
        usage_time: data.usage_time,
        type: data.type,
        images: [pictures]
      });
      if (anuncio?.status === 200) {
        navigate('/MeusAnuncios');
      }else{
        alert("Erro ao atualizar anúncio tente novamente!");
      };

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
  
  const getCities = useCallback((stateIndex: number) => {
    setCities(states[stateIndex].cidades);
  }, []);
  
  const isServiceAnnouncement = (): boolean => {
    return announcement?.type === 'service';
  };
  
  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
      {announcement && (
        <ContentBox>    
            <Form onSubmit={handleToSubmit} ref={formRef}>
            <TitleArea>
                <TitleSection>
                  <ContainerReturnToPage>
                  <Link to="/MeusAnuncios">
                    <ReturnToPageIcon />
                  </Link>
                </ContainerReturnToPage>
                  Altere seu {isServiceAnnouncement() ? 'serviço' : 'produto'}
                </TitleSection>
            </TitleArea>
            <Paper>
              <ContainerWrapper>
                <ContainerLeft>
                  <ContainerFields>
                    <InputForm
                      name="title"
                      label="Título do anúncio"
                      type="text"
                      placeholder={announcement.title}
                    />
                    <MultlineInput
                      name="description"
                      label="Descrição do anúncio"
                      type="text"
                      placeholder={announcement.description}
                    />
                    <div style={{ display: isServiceAnnouncement() ? 'none' : 'block', width:'100%' }}>

                    {/* <InputForm
                      name="localization"
                      label="Localização"
                      type="text"
                      placeholder={serviceOptions? '' : 'Localização'}
                      disabled={serviceOptions}
                    /> */}
                    <InputForm
                      name="usage_time"
                      label="Tempo de uso"
                      type="text"
                      placeholder={isServiceAnnouncement()? '' : `${announcement.usage_time}`}
                      disabled={isServiceAnnouncement()}
                    />
                    </div>
                    <Select
                      name="category"
                      label="Categoria"
                      placeholder="Categoria"
                      options={isServiceAnnouncement() ?
                        categories['Serviço'] : categories['Produto']}
                    />
                    {<><Select
                      name='state'
                      label='Estado'
                      placeholder='Selecione o estado'
                      options={stateNames}
                      onSelect={(value) => getCities(value)} /><Select
                        name='city'
                        label='Cidade'
                        placeholder='Selecione a cidade'
                        options={cities} /></>}
                  </ContainerFields>
                </ContainerLeft>
                <ContainerRight>
                  <ContainerMegaFileInput>
                    {/* <img src={'https://etrokaapi.herokuapp.com/images/'+announcement?.images[0].originalname} alt="Imagem do produto" /> */}
                    <FileInputBigger onFileSelect={setPictures} />
                  </ContainerMegaFileInput>
                  {/*<ContainerFileInput>
                    <FileInput onFileSelect={setPictures} />
                    <FileInput onFileSelect={setPictures} />
                    <FileInput onFileSelect={setPictures} />
                  </ContainerFileInput>*/}
                  {/*<input
                    type="file"
                    name='images'
                    onChange={(e) => setPictures(e.target.files![0])}
                  />*/}
                </ContainerRight>
              </ContainerWrapper>
            </Paper>            
            <ContainerButton>
                <Button>
                  Alterar
                </Button>
            </ContainerButton>
          </Form>
        </ContentBox>
        )}
      </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default EditAnnouncement;
