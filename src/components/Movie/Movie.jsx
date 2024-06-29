import styles from './Movie.module.css';

const Movie = ({ poster, title, genre, release_year, description }) => {
  return (
    <article className={styles.movie}>
      <div className={styles.image}>
        <img
          src={poster}
          alt={`${title}'s poster`}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.details}>
          <div className={styles.subheading}>
            <span className={styles.subheadingLabel}>Жанр</span>
            <span className={styles.subheadingInfo}>
              {genre.toUpperCase()[0] + genre.slice(1).toLowerCase()}
            </span>
          </div>
          <div className={styles.subheading}>
            <span className={styles.subheadingLabel}>Год выпуска</span>
            <span className={styles.subheadingInfo}>{release_year}</span>
          </div>
          <div className={styles.subheading}>
            <span className={styles.subheadingLabel}>Описание</span>
            <span className={styles.subheadingInfo}>{description}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Movie;
