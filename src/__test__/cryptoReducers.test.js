import cryptoReducers from '../redux/cryptoReducers';

describe('test crypto reducer function', () => {
  test('if action is Undefined, CryptoReducer to return an empty array', () => {
    const initialState = [];
    const testResult = cryptoReducers(undefined, {
      type: 'unknown',
    });
    expect(testResult).toEqual(initialState);
  });

  test('test reducer to return new state', () => {
    const fetchData = ['a', 'b', 'c', 'd'];
    const initialState = [];

    const result = cryptoReducers(initialState, {
      type: 'crypto/getCrypto/fulfilled',
      payload: fetchData,
    });

    expect(result).toEqual(fetchData);
  });
});
