import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import SearchBox from '../components/common/SearchBox';

describe('Search Box ', () => {
  it('Should render component and search icon', () => {
    const { getByTestId } = render(<SearchBox />);

    const searchBoxComponent = getByTestId('search-box');
    expect(document.body.contains(searchBoxComponent));

    const searchIcon = getByTestId('search-icon');
    expect(document.body.contains(searchIcon));
  });
});
