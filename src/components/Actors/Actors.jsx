import Actor from '../Actor/Actor.jsx';
import styles from './Actors.module.css';

const Actors = ({ actors }) => {
  return (
    <>
      <h2 className={styles.heading}>Актёры</h2>
      <ul className={styles.list}>
        {actors.map(({ name, photo }) => (
          <li key={name}>
            <Actor
              name={name}
              photo={photo}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Actors;
