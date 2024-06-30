import styles from './Loader.module.css';
import LoaderIcon from '../../assets/icons/loader.svg';

const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.loader}
        src={LoaderIcon}
        alt="Loader"
      />
    </div>
  );
};

export default Loader;
