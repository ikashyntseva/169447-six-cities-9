import { configureMockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';

import { SortingType } from '../../const';
import Sorting from './sorting';

const mockStore = configureMockStore();
const store = mockStore({
  OFFERS: {
    sortingType: SortingType.Popular,
  },
});

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Sorting />
      </Provider>);

    expect(container).toMatchSnapshot();
  });
});
