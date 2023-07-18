import React, {useEffect, useState} from 'react';
import useAnnouncements from 'hooks/useAnnouncements';

// import {Form} from '@unform/web';
// import {FormHandles} from '@unform/core';
import {rabinKarpSearch} from 'util/search';
import {Announcement} from 'types';

import AnnouncementCard from 'components/AnnouncementCard';
import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import SearchBar from 'components/SearchBar';
import Pagination from 'components/Pagination';
// import Select from 'components/Select';

import {ListOfCards} from './styles';
import HeaderRoxo from 'components/HeaderRoxo';
import data from './data.json';
import {Title} from './styles';
import {Description} from './styles';
import logo from 'assets/img/Logo - Simbolo.png';
import {Logo} from './styles';
import Footer from 'components/Footer';
// import {FiltersBar} from './styles';
// import {stateNames} from 'states-cities.json';

/* interface Filters {
  state: string,
  city: string
} */

const Announcements: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);

  const componentsPerPage = 9; // Quantidade de componentes por página
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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

  const [totalPages, setTotalPages] = useState(1); // Inicialmente, assume-se uma página

  useEffect(() => {
    if (announcements) {
      const totalComponents = search && searchResult ? searchResult.length : announcements.length;
      const pages = Math.ceil(totalComponents / componentsPerPage);
      setTotalPages(pages);
    }
  }, [announcements, search, searchResult]);

  return (
    <PageContainer>
      <Header />
      <HeaderRoxo>
        <Title> {data.title} </Title>
        
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSearchChange={(filterBy: string) => handleWithSearch(filterBy)}
          />
        <Logo
          src={logo}
        />
      </HeaderRoxo>
      <JustifyContainer thereIsHeader >
        <ContentBox>
          {/* <Form onSubmit={() => {}} ref={formRef} >
            <FiltersBar>
            <Select name="state" options={[]} />
              <Select name="city" options={[]} />
            </FiltersBar>
          </Form> */}
          <ListOfCards>
            {search && searchResult
              ? searchResult
                  .slice((currentPage - 1) * componentsPerPage, currentPage * componentsPerPage)
                  .map((announcement: Announcement, index) => (
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
              : announcements
                  ?.slice((currentPage - 1) * componentsPerPage, currentPage * componentsPerPage)
                  .map((announcement: Announcement, index) => (
                    <AnnouncementCard
                      key={announcement.id}
                      id={announcement.id}
                      title={announcement.title}
                      description={announcement.description}
                      image={announcement.images[0]?.originalname as string}
                      localization={announcement.localization}
                      owner={announcement.owner}
                    />
                  ))}
          </ListOfCards>
        </ContentBox>
      </JustifyContainer>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Footer/>
    </PageContainer>
  );
};

export default Announcements;
