import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CryptoCard from './CryptoCard';
import { getCryptos } from '../redux/cryptoReducers';

const CryptoContainer = () => {
  const myState = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useSearchParams();

  useEffect(() => {
    if (myState.length === 0) {
      dispatch(getCryptos());
    }
  }, []);

  return (
    <div className="crypto-list-container">
      <input
        className="search-crypto"
        type="text"
        value={searchName.get('coinName') || ''}
        placeholder="Search..."
        onChange={(e) => {
          const coinName = e.target.value;
          if (coinName) {
            setSearchName({ coinName });
          } else {
            setSearchName({});
          }
        }}
      />
      <div className="card-container">
        {myState
          .filter((element) => {
            const coinName = searchName.get('coinName');
            if (!coinName) return true;
            const name = element.name.toLowerCase();
            return name.startsWith(coinName.toLowerCase());
          })
          .map((element) => (
            <Link key={element.id} to={`/${element.id}`}>
              <CryptoCard
                key={element.id}
                name={element.name}
                symbol={element.symbol}
                icon={element.icon}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CryptoContainer;
