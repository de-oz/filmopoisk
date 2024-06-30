import styles from './NoResults.module.css';

const NoResults = ({ heading, caption }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.heading}>{heading}</h3>
      <span className={styles.caption}>{caption}</span>
    </div>
  );
};

export default NoResults;
