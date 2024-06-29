import styles from './Header.module.css';

const Header = ({ children, title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {children}
    </header>
  );
};

export default Header;
