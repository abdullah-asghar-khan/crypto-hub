import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import CryptoContainer from '../components/CryptoContainer';

describe('Test crytoContainer', () => {
  store.dispatch = jest.fn();

  test('test that crytoContainer renerred correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Provider store={store}>
            <CryptoContainer />
          </Provider>
        </Router>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test that disPatch was called once on page load', () => {
    render(
      <Router>
        <Provider store={store}>
          <CryptoContainer />
        </Provider>
      </Router>,
    );
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
