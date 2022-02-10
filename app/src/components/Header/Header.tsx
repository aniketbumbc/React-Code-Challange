import React, { FC } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import { HeaderStyled } from './Header.styled';

const Header: FC = () => {
  return (
    <>
      <HeaderStyled>
        <SearchInput />
      </HeaderStyled>
    </>
  );
};
export default Header;
