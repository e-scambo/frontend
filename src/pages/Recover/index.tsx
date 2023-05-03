import {Form} from '@unform/web';
import {Link} from 'react-router-dom';
import React from 'react';
import InputForm from 'components/InputForm';
import Button from 'components/Button';
import Carousel from 'components/Carousel';
import ReturnToPage from 'assets/img/ReturnToPage.png';

import {Principal} from './styles';
import {ContainerFields} from './styles';
import {ContainerTitle} from './styles';
import {ContainerLoginForm} from './styles';
import {ContainerButton} from './styles';
import {ContainerReturnToPage} from './styles';
import {Title} from './styles';
import {Description} from './styles';
import {Terms} from './styles';
import {PrivacyPolicy} from './styles';

import data from './data.json';

const Recover: React.FC = () => {
  const handleToSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <Principal>
      <ContainerLoginForm>
        <ContainerReturnToPage>
          <Link to="/SignIn">
            <img src={ReturnToPage} />
          </Link>
        </ContainerReturnToPage>
        <ContainerTitle>
          <Title>{data.title}</Title>
          <Description>{data.description}</Description>
        </ContainerTitle>
        <Form onSubmit={handleToSubmit}>
          <ContainerFields>
            <InputForm
              name="e-mail"
              label="E-mail"
              type="text"
              placeholder="E-mail"
              // {data.placeholders.email}
            />
            <ContainerButton>
            <Button
              type='submit'
            > Continuar </Button>
            </ContainerButton>
            {/* <InfoText> {data.doesNotHaveAccount}
              <Redirect to='/signup' replace >
                {data.signUp}
              </Redirect>
            </InfoText> */}
            <Terms> {data.privacy}
              <PrivacyPolicy>
              {data.privacyredirect}
            </PrivacyPolicy>
            </Terms>
          </ContainerFields>
        </Form>
      </ContainerLoginForm>
      <Carousel/>
    </Principal>
  );
};

export default Recover;
