import styles from './Layout.module.css';
import Header from '../Header/Header.jsx';
import Button from '../Button/Button.jsx';
import personIcon from '../../assets/icons/person.svg';

const Layout = ({ children, isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <div className={styles.layout}>
      <Header title={'Фильмопоиск'}>
        {isLoggedIn ? (
          <div className={styles.loggedin}>
            <div className={styles.avatar}>
              <img
                className={styles.icon}
                src={personIcon}
                alt="User Avatar"
              />
            </div>
            <Button
              buttonText={'Выйти'}
              onClick={handleLogout}
            />
          </div>
        ) : (
          <Button
            buttonText={'Войти'}
            onClick={handleLogin}
          />
        )}
      </Header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
