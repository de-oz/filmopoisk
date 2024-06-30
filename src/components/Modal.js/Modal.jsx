import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import closeIcon from '../../assets/icons/close.svg';

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className={styles.overlay}
      onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}>
          <img
            src={closeIcon}
            alt="Close modal"
          />
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
