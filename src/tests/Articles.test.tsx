import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import Articles from '../components/Articles';

describe('Articles ', () => {
  it('Should render loader', () => {
    const { getByTestId } = render(<Articles />);

    const loaderComponent = getByTestId('loader');
    expect(document.body.contains(loaderComponent));
  });

  it('Should render articles component', async () => {
    const { findByTestId } = render(<Articles />);

    const articlesComponent = await findByTestId('articles-component');
    expect(document.body.contains(articlesComponent));
  });
});
