import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ buttonText, onClick, variant, submit, disabled }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={classNames(styles.standard, { [styles.outline]: variant === 'outline' })}
      onClick={onClick}
      disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default Button;
