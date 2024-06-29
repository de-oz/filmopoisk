import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ buttonText, onClick, variant }) => {
  return (
    <button
      className={classNames(styles.standard, {[styles.outline]: variant === 'outline'})}
      onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
