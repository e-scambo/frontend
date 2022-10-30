import React, {SetStateAction} from 'react';
import {Container} from './styles';
import {ContainerInput} from './styles';
import {Input} from './styles';
import {MdSearch} from 'react-icons/md';

interface SearchPros {
  search: string,
  setSearch: React.Dispatch<SetStateAction<string>>
  onSearchChange: (filterBy: string) => void
}

const SearchBar: React.FC<SearchPros> = ({
  search,
  setSearch,
  onSearchChange}) => {
  return (
    <Container>
      <ContainerInput>
        <Input
          placeholder='Buscar por ...'
          type='text'
          onChange={(e) => {
            setSearch(e.target.value);
            onSearchChange(e.target.value);
          }}
          value={search}
        />
        <MdSearch
          style={{
            marginRight: '10px',
            fontSize: '3vh',
            fill: '#0D4A99',
          }}
        />
      </ContainerInput>
    </Container>
  );
};

export default SearchBar;
