import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import ContentBox from 'components/JustifyContainer';
import JustifyContainer from 'components/JustifyContainer';
import useAnnouncements from 'hooks/useAnnouncements';
import useAuth from 'hooks/useAuth';
import {ListOfCards} from './styles';
import AnnouncementCard from 'components/AnnouncementCard';
import Footer from 'components/Footer';

import {Principal} from './styles';
import {TitleArea} from './styles';
import {TitleSection} from './styles';
import {ContainerReturnToPage} from './styles';
import {ReturnToPageIcon} from './styles';


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
        <Principal>
          <TitleArea>
              <TitleSection>
                <ContainerReturnToPage>
                <Link to="/Announcements">
                  <ReturnToPageIcon />
                </Link>
              </ContainerReturnToPage>
                Favoritos
              </TitleSection>
          </TitleArea>
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
        </Principal>
      </JustifyContainer>
      <Footer/>
    </PageContainer>
  );
};

export default Favorites;
