import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Icon from 'react-icons-kit';
import { circleLeft } from 'react-icons-kit/icomoon/circleLeft';
import { longArrowRight } from 'react-icons-kit/fa/longArrowRight';
import { twitter } from 'react-icons-kit/fa/twitter';
import { infoCircle } from 'react-icons-kit/fa/infoCircle';
import { getCryptos } from '../redux/cryptoReducers';

const CurrencyFormatter = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(amount);

const CryptoDetails = () => {
  const state = useSelector((state) => state.crypto);
  const params = useParams();
  const dispatch = useDispatch();
  const findCurrentCrypto = state.find((item) => item.id === params.cryptoId);
  const currentCrypto = findCurrentCrypto || {};

  useEffect(() => {
    if (state.length === 0) {
      dispatch(getCryptos());
    }
  }, []);

  const {
    icon,
    name,
    symbol,
    rank,
    price,
    volume,
    marketCap,
    availableSupply,
    totalSupply,
    priceChange1h,
    priceChange1d,
    priceChange1w,
    websiteUrl,
    twitterUrl,
  } = currentCrypto;

  return (
    <div className="crypto-details-page">
      <div className="crypto-info-head">
        <Link to="/" className="go-back">
          <Icon icon={circleLeft} size={20} />
        </Link>
        <div>
          <div className="details-icon">
            <img src={icon} alt={name} />
          </div>
          <div className="name-price">
            <span>
              {name}
              /
              {symbol}
            </span>
            <br />
            <span>{CurrencyFormatter(price)}</span>
          </div>
        </div>
      </div>
      <div className="crypto-info">
        <div>
          <span>Rank</span>
          <Icon icon={longArrowRight} size={20} />
          <span>{rank}</span>
        </div>
        <div>
          <span>Volume</span>
          <Icon icon={longArrowRight} size={20} />
          <span>{volume}</span>
        </div>
        <div>
          <span>MarketCap</span>
          <Icon icon={longArrowRight} size={20} />
          <span>{CurrencyFormatter(marketCap)}</span>
        </div>
        <div>
          <span>AvailableSupply</span>
          <Icon icon={longArrowRight} size={20} />
          <span>{availableSupply}</span>
        </div>
        <div>
          <span>TotalSupply</span>
          <Icon icon={longArrowRight} size={20} />
          <span>{totalSupply}</span>
        </div>
        <div>
          <span>Price Change/hr</span>
          <Icon icon={longArrowRight} size={20} />
          <span>{priceChange1h}</span>
        </div>
        <div>
          <span>Price Change/day</span>
          <Icon icon={longArrowRight} size={20} />
          <span>{priceChange1d}</span>
        </div>
        <div>
          <span>Price Change/week</span>
          <Icon icon={longArrowRight} size={20} />
          <span>{priceChange1w}</span>
        </div>
        <div className="get-info">
          <span>Get more info:</span>
          <a href={websiteUrl} target="_blank" rel="noreferrer">
            <Icon icon={infoCircle} size={20} />
          </a>
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            <Icon icon={twitter} size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default CryptoDetails;
