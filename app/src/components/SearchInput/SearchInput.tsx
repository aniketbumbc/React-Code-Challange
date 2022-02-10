import React, { FC, useState } from 'react';
import Table from '../Table/Table';
import { Input } from './SearchInput.styled';

const SearchInput: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };
  return (
    <>
      <Input
        type='text'
        placeholder='Search'
        value={searchValue}
        onChange={handleOnChange}
      />
      <Table searchValue={searchValue} />
    </>
  );
};
export default React.memo(SearchInput);
