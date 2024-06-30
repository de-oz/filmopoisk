import classNames from 'classnames';
import styles from './PaginationButton.module.css';

const PaginationButton = ({ children, onClick, isDisabled, variant }) => {
  return (
    <button
      className={classNames(styles.standard, {[styles.large]: variant === 'large'})}
      onClick={onClick}
      disabled={isDisabled}>
      {children}
    </button>
  );
};

export default PaginationButton;
