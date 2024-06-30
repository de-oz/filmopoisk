import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ children, title }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>{title}</h1>
      </Link>
      {children}
    </header>
  );
};

export default Header;
