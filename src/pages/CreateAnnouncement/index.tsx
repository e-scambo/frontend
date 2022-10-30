import React, {useState, useRef, useCallback} from 'react';
import useUsers from 'hooks/useUsers';
import {Form} from '@unform/web';
import * as Yup from 'yup';
import translation from 'locales/yup.locale.pt-br';
import {FormHandles} from '@unform/core';

import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import InputForm from 'components/InputForm';
import MultlineInput from 'components/MultlineInput';
import Select from 'components/Select';
import ProductImages from 'components/ProductImages';
import RadioGroup from 'components/RadioInput';
import Button from 'components/Button';

import {Paper} from './styles';
import {TitleSection} from './styles';
import {ContainerFields} from './styles';
import {ContainerLeft} from './styles';
import {ContainerRight} from './styles';
import {AnnouncementForm, key} from 'types';
import {states, stateNames} from 'locales/states-cities.json';
import {categories} from './options.json';
import useAuth from 'hooks/useAuth';


const templateOptions = [
  {
    id: 0,
    value: 'product',
    label: 'Produto',
    checked: false,
  },
  {
    id: 1,
    value: 'service',
    label: 'Serviço',
    checked: false,
  },
];


const CreateAnnouncement: React.FC = () => {
  const [pictures, setPictures] = useState(new Map<key, string >());
  const [cities, setCities] = useState<string[]>([]);
  const [serviceOptions, setServiceOptions] = useState<boolean>(false);
  const {createAnnouncement} = useUsers();
  const formRef = useRef<FormHandles>(null);
  const {auth} = useAuth();

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
      const iterator = pictures.values();
      // console.log('pic', iterator.next().value);
      createAnnouncement(auth.user, {
        title: data.title,
        description: data.description,
        type: data.type,
        category: categories.Serviço[Number(data.category)],
        localization: `${state} - ${city}`,
        usage_time: data.usage_time,
        images: iterator.next().value,
      });

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

  const getCities = useCallback((stateIndex: number) => {
    setCities(states[stateIndex].cidades);
  }, []);

  const isServiceAnnouncement = (): boolean => {
    return formRef.current?.getFieldValue('type') === 'Serviço';
  };

  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
          <Form onSubmit={handleToSubmit} ref={formRef} >
            <Paper>
              <ContainerLeft>
                <TitleSection>
                  Anunciar
                </TitleSection>
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
                    name="usage_time"
                    label="Tempo de uso"
                    type="text"
                    placeholder={serviceOptions? '' : 'Nunca usado'}
                    disabled={serviceOptions}
                  />
                  <Select
                    name='category'
                    label='Categoria'
                    placeholder='Selecione a categoria'
                    options={serviceOptions?
                        categories['Serviço'] :
                        categories['Produto']
                    }
                  />
                  <Select
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
                  />
                </ContainerFields>
              </ContainerLeft>
              <ContainerRight>
                <RadioGroup
                  name='type'
                  options={templateOptions}
                  onSelect={() => {
                    setServiceOptions(isServiceAnnouncement());
                  }}
                />
                <ProductImages
                  pictures={pictures}
                  setPictures={setPictures}
                  disableEditMode={false}
                />
                <Button type='submit' > Salvar </Button>
              </ContainerRight>
            </Paper>
          </Form>
        </ContentBox>
      </JustifyContainer>
    </PageContainer>
  );
};

export default CreateAnnouncement;

