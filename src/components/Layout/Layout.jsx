import styles from './Layout.module.css';
import Header from '../Header/Header.jsx';
import Button from '../Button/Button.jsx';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header title={'Фильмопоиск'}>
        <Button
          buttonText={'Войти'}
          onClick={() => console.log('button clicked')}
        />
      </Header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
