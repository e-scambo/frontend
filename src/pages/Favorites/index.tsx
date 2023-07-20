import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import ContentBox from 'components/JustifyContainer';
import JustifyContainer from 'components/JustifyContainer';
import useAnnouncements from 'hooks/useAnnouncements';
import useAuth from 'hooks/useAuth';
import {ListOfCards} from 'pages/Announcements/styles';
import AnnouncementCard from 'components/AnnouncementCard';
import Footer from 'components/Footer';

import {TitleArea} from './styles';
import {TitleSection} from './styles';
import {ContainerReturnToPage} from './styles';
import ReturnToPage from 'assets/img/ReturnToPage.png';


const Favorites: React.FC = () => {
  const {auth} = useAuth();
  const {announcements, fetchFavorites} = useAnnouncements();
  useEffect(() => {
    fetchFavorites(auth.user);
  }, []);


  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <TitleArea>
          <TitleSection>
            <ContainerReturnToPage>
            <Link to="/Announcements">
              <img src={ReturnToPage} />
            </Link>
          </ContainerReturnToPage>
            Favoritos
          </TitleSection>
        </TitleArea>
        <ContentBox>
          <ListOfCards>
            {announcements.map((announcement: any, index) => (
              <AnnouncementCard
                key={announcement.announcement.id}
                id={announcement.announcement.id}
                title={announcement.announcement.title}
                description={announcement.announcement.description}
                image={announcement.announcement.images[0] as string}
                localization={announcement.announcement.localization}
                owner={announcement.announcement.owner}
              />
            ))}
          </ListOfCards>
        </ContentBox>
      </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default Favorites;
