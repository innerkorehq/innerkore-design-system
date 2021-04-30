import React from 'react';
import { SearchInput, SearchInputType } from '../../components/Hero/SearchInput';

export default {
  title: 'Hero/SearchInput',
  component: SearchInput,
};

export const PrimarySearchInput = (args: SearchInputType) => {
  return <SearchInput {...args} />;
};

PrimarySearchInput.args = {
  placeholder: 'e.g. responsive WordPress',
  btnTxt: 'Search',
};
