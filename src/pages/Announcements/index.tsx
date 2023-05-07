import React, {useEffect, useState} from 'react';
import useAnnouncements from 'hooks/useAnnouncements';

// import {Form} from '@unform/web';
// import {FormHandles} from '@unform/core';

import PageContainer from 'components/PageContainer';
import Header from 'components/Header';
import JustifyContainer from 'components/JustifyContainer';
import ContentBox from 'components/ContentBox';
import SearchBar from 'components/SearchBar';
// import Select from 'components/Select';

// import {FiltersBar} from './styles';
// import {stateNames} from 'states-cities.json';

/* interface Filters {
  state: string,
  city: string
} */

const Announcements: React.FC = () => {
  // const formRef = useRef<FormHandles>(null);
  const {announcements, fetchAnnouncements} = useAnnouncements();
  const [search, setSearch] = useState<string>('');
  // const [filters, setFilters] = useState<Filters>({} as Filters);
  // const [cities, setCities] = useState<string[]>([]);
  useEffect(() => {
    fetchAnnouncements();
  }, []);


  const handleWithSearch = (filterBy: string) => {
    if (announcements) {
    }
  };


  return (
    <PageContainer>
      <Header />
      <JustifyContainer thereIsHeader >
        <ContentBox>
          {/* <Form onSubmit={() => {}} ref={formRef} >
            <FiltersBar>
              <Select name="state" options={[]} />
              <Select name="city" options={[]} />
            </FiltersBar>
          </Form> */}
          <SearchBar
            search={search}
            setSearch={setSearch}
            onSearchChange={(filterBy: string) => handleWithSearch(filterBy)}
          />
        </ContentBox>
      </JustifyContainer>
    </PageContainer>
  );
};

export default Announcements;
