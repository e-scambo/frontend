import React from 'react';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import ContentBox from 'components/JustifyContainer';
import JustifyContainer from 'components/JustifyContainer';
import Footer from 'components/Footer';
import ChatApp from 'components/ChatApp';
import SideBar from 'components/SideBar';
import ChatWindow from 'components/ChatWindow';
import SendMessage from 'components/SendMessage';
import ChatSide from 'components/ChatSide';

const Chats: React.FC = () => {
  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
          <ChatApp>
            <SideBar>
              <ChatSide></ChatSide>
            </SideBar>
            <ChatWindow>
              <SendMessage></SendMessage>
            </ChatWindow>
          </ChatApp>
      </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default Chats;
