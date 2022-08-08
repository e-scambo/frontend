import React from 'react';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import ContentBox from 'components/JustifyContainer';
import JustifyContainer from 'components/JustifyContainer';

const Chats: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
        </ContentBox>
      </JustifyContainer>
    </PageContainer>
  );
};

export default Chats;
