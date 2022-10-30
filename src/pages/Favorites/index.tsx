import React, {useEffect} from 'react';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import ContentBox from 'components/JustifyContainer';
import JustifyContainer from 'components/JustifyContainer';
import useAnnouncements from 'hooks/useAnnouncements';
import useAuth from 'hooks/useAuth';
import {ListOfCards} from 'pages/Announcements/styles';
import AnnouncementCard from 'components/AnnouncementCard';


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
        <ContentBox>
          <ListOfCards>
            {announcements.map((announcement: any, index) => (
              <AnnouncementCard
                key={announcement.announcement.id}
                id={announcement.announcementid}
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
    </PageContainer>
  );
};

export default Favorites;
