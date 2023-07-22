import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import ContentBox from 'components/JustifyContainer';
import JustifyContainer from 'components/JustifyContainer';
import useMyAds from 'hooks/useMyAds';
import { ListOfCards } from 'pages/Announcements/styles';
import AnnouncementCard from 'components/AnnouncementCard';
import Footer from 'components/Footer';

import { TitleArea } from './styles';
import { TitleSection } from './styles';
import { ContainerReturnToPage } from './styles';
import {ReturnToPageIcon} from './styles';

const MyAds: React.FC = () => {
  const { announcements, fetchMyAds } = useMyAds();

  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader>
        <TitleArea>
          <TitleSection>
            <ContainerReturnToPage>
              <Link to="/Announcements">
                <ReturnToPageIcon />
              </Link>
            </ContainerReturnToPage>
            Seus anúncios
          </TitleSection>
        </TitleArea>
        <ContentBox>
          <ListOfCards>
            {announcements.map((announcement: any, index) => (
              <AnnouncementCard
                key={announcement.id}
                id={announcement.id}
                title={announcement.title}
                description={announcement.description}
                image={announcement.images[0] as string}
                localization={announcement.localization}
                owner={announcement.owner}
              />
            ))}
          </ListOfCards>
        </ContentBox>
      </JustifyContainer>
      <Footer />
    </PageContainer>
  );
};

export default MyAds;