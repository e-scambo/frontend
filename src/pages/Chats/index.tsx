import React from 'react';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import ContentBox from 'components/JustifyContainer';
import JustifyContainer from 'components/JustifyContainer';
import Footer from 'components/Footer';

const Chats: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
        </ContentBox>
      </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default Chats;
