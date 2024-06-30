import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../api/api.js';
import Banner from '../../components/Banner/Banner.jsx';
import Actors from '../../components/Actors/Actors.jsx';
import styles from './MovieDetails.module.css';
import Loader from '../../components/Loader/Loader.jsx';

const MovieDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetMovieByIdQuery(id);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Banner
            id={id}
            poster={data.poster}
            title={data.title}
            rating={data.rating}
            genre={data.genre}
            release_year={data.release_year}
            description={data.description}
          />
          <Actors actors={data.actors} />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
