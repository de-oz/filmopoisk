import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../api/api.js';
import { setGenre, setYear } from '../../app/querySlice.js';
import Movies from '../../components/Movies/Movies';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import styles from './Home.module.css';
import Search from '../../components/Search/Search';
import useDebounce from '../../hooks/useDebounce';
import Pagination from '../../components/Pagination/Pagination';
import Dropdown from '../../components/Dropdown/Dropdown';
import Loader from '../../components/Loader/Loader.jsx';
import NoResults from '../../components/NoResults/NoResults.jsx';

const GENRES = {
  0: 'Не выбран',
  comedy: 'Комедия',
  drama: 'Драма',
  action: 'Боевик',
  thriller: 'Триллер',
  horror: 'Ужасы',
  family: 'Семейный',
  cartoon: 'Анимированный',
  fantasy: 'Фэнтези',
  romance: 'Романтика',
  adventure: 'Приключения',
  musical: 'Мьюзикл',
  war: 'Военный',
};

const YEARS = {
  '0': 'Не выбран',
  '2009': '2009',
  '2008': '2008',
  '2007': '2007',
  '2006': '2006',
  '1990-2005': '1990-2005',
  '1950-1989': '1950-1989',
};

const Home = () => {
  const dispatch = useDispatch();
  const { genre, year } = useSelector((state) => state.query);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const { data, isLoading, isFetching } = useGetMoviesQuery({
    page,
    title: debouncedSearchQuery,
    genre,
    year,
  });

  useEffect(() => {
    const genreFromURL = searchParams.get('genre');
    const yearFromURL = searchParams.get('release_year');
    const titleFromURL = searchParams.get('title');

    if (titleFromURL) setSearchQuery(titleFromURL);
    if (genreFromURL) dispatch(setGenre(genreFromURL));
    if (yearFromURL) dispatch(setYear(yearFromURL));
  }, [dispatch, searchParams]);

  useEffect(() => {
    const params = {};
    if (debouncedSearchQuery) params.title = debouncedSearchQuery;
    if (genre) params.genre = genre;
    if (year) params.release_year = year;
    setSearchParams(params);
    setPage(1);
  }, [debouncedSearchQuery, genre, year, setSearchParams]);

  return (
    <div className={styles.home}>
      <FilterPanel
        filters={[
          <Dropdown
            key="genre"
            label="Жанр"
            options={GENRES}
            selectedValue={genre}
            onChange={(e) => dispatch(setGenre(e.target.value !== '0' && e.target.value))}
          />,
          <Dropdown
            key="release_year"
            label="Год выпуска"
            options={YEARS}
            selectedValue={year}
            onChange={(e) => dispatch(setYear(e.target.value !== '0' && e.target.value))}
          />,
        ]}
      />
      <div className={styles.container}>
        <Search
          query={searchQuery}
          onQueryChange={(query) => setSearchQuery(query)}
        />
        {isLoading || isFetching ? (
          <Loader />
        ) : data?.search_result?.length > 0 ? (
          <>
            <Movies movies={data.search_result} />
            {data.total_pages > 1 && (
              <Pagination
                page={page}
                totalPages={data.total_pages}
                onLeftClick={() => setPage((prev) => prev - 1)}
                onRightClick={() => setPage((prev) => prev + 1)}
              />
            )}
          </>
        ) : (
          <NoResults
            heading="Фильмы не найдены"
            caption="Измените запрос и попробуйте снова"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
