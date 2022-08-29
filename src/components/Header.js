import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { microphone } from 'react-icons-kit/fa/microphone';
import { gear } from 'react-icons-kit/fa/gear';

const Header = () => (
  <header>
    <Link to="/">
      <div className="logo">
        <span>Crypto</span>
      </div>
    </Link>
    <div className="feature">
      <i>
        <Icon size={25} icon={microphone} />
      </i>
      <i>
        <Icon size={25} icon={gear} />
      </i>
    </div>
  </header>
);

export default Header;