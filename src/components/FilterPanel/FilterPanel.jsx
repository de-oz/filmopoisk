import styles from './FilterPanel.module.css';

const Filtering = ({ filters }) => {
  return (
    <div className={styles.filterPanel}>
      <h2 className={styles.heading}>Фильтр</h2>
      <div className={styles.filters}>
        {filters.map((filter, index) => (
          <div
            key={index}
            className={styles.filter}>
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filtering;
