import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import { arrowCircleRight } from 'react-icons-kit/fa/arrowCircleRight';

const CryptoCard = ({ name, symbol, icon }) => (
  <div className="card">
    <i>
      <Icon icon={arrowCircleRight} size={20} />
    </i>
    <img src={icon} alt={name} />
    <span>{name.substr(0, 15)}</span>
    <span>{symbol.substr(0, 15)}</span>
  </div>
);

CryptoCard.propTypes = {
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CryptoCard;
