import { useState } from 'react';
import styles from './LoginForm.module.css';
import Button from '../Button/Button.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../app/authSlice.js';

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = () => {
    dispatch(login({ username, password }));
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit}>
      <h2 className={styles.heading}>Авторизация</h2>
      {error && <h3 style={{ color: '#f00', marginBottom: '12px' }}>Неверный логин или пароль</h3>}
      <div className={styles.inputGroup}>
        <label
          htmlFor="username"
          className={styles.label}>
          Логин<span className={styles.asterisk}>*</span>
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          placeholder="Введите логин"
        />
      </div>
      <div className={styles.inputGroup}>
        <label
          htmlFor="password"
          className={styles.label}>
          Пароль<span className={styles.asterisk}>*</span>
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          placeholder="Введите пароль"
        />
      </div>
      <div className={styles.btnGroup}>
        <Button
          onClick={handleSubmit}
          buttonText="Войти"
          submit
          disabled={loading}
        />
        <Button
          onClick={onClose}
          buttonText="Отменить"
          variant="outline"
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default LoginForm;
