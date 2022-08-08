import React, {useEffect, useRef, useState} from 'react';
import useAnnouncements from 'hooks/useAnnouncements';

import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import {rabinKarpSearch} from 'util/search';
import {Announcement} from 'types';

import AnnouncementCard from 'components/AnnouncementCard';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import SearchBar from 'components/SearchBar';
import Select from 'components/Select';

import {ListOfCards} from './styles';
import {FiltersBar} from './styles';
// import {stateNames} from 'states-cities.json';

interface Filters {
  state: string,
  city: string
}

const Announcements: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {announcements, fetchAnnouncements} = useAnnouncements();
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<Announcement[]>();
  // const [filters, setFilters] = useState<Filters>({} as Filters);
  // const [cities, setCities] = useState<string[]>([]);


  useEffect(() => {
    fetchAnnouncements();
  }, []);


  const handleWithSearch = (filterBy: string) => {
    if (announcements) {
      const filterLowerCase = filterBy.toLowerCase();
      const result = announcements.filter((announcement) =>
        rabinKarpSearch(announcement.title.toLowerCase(), filterLowerCase),
      );
      setSearchResult(result);
    }
  };


  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
          <SearchBar
            search={search}
            setSearch={setSearch}
            onSearchChange={(filterBy: string) => handleWithSearch(filterBy)}
          />
          {/* <Form onSubmit={() => {}} ref={formRef} >
            <FiltersBar>
              <Select name="state" options={[]} />
              <Select name="city" options={[]} />
            </FiltersBar>
          </Form> */}
          <ListOfCards>
            {search && searchResult ?
              searchResult.map((announcement: Announcement, index) => (
                <AnnouncementCard
                  key={announcement.id}
                  id={announcement.id}
                  title={announcement.title}
                  description={announcement.description}
                  image={announcement.images[0] as string}
                  localization={announcement.localization}
                  owner={announcement.owner}
                />
              )) :
              announcements &&
              announcements.map((announcement: Announcement, index) => (
                <AnnouncementCard
                  key={announcement.id}
                  id={announcement.id}
                  title={announcement.title}
                  description={announcement.description}
                  image={announcement.images[0] as string}
                  localization={announcement.localization}
                  owner={announcement.owner}
                />
              ))
            }
          </ListOfCards>
        </ContentBox>
      </JustifyContainer>
    </PageContainer>
  );
};

export default Announcements;
