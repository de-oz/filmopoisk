import styles from './Actor.module.css';

const Actor = ({ name, photo }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={photo}
        alt={`Фотография ${name}`}
      />
      <span className={styles.name}>{name}</span>
    </div>
  );
};

export default Actor;
