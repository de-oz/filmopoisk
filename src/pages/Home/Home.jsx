import { useGetMoviesQuery } from '../../api/api';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGenre, setYear } from '../../app/querySlice.js';
import Movies from '../../components/Movies/Movies';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import styles from './Home.module.css';
import Search from '../../components/Search/Search';
import useDebounce from '../../hooks/useDebounce';
import Pagination from '../../components/Pagination/Pagination';
import Dropdown from '../../components/Dropdown/Dropdown';

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
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);
  const { data, isLoading, isFetching } = useGetMoviesQuery({
    page,
    title: debouncedSearchQuery,
    genre,
    year,
  });

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  return (
    <div className={styles.home}>
      <FilterPanel
        filters={[
          <Dropdown
            label="Жанр"
            options={GENRES}
            selectedValue={genre}
            onChange={(e) => dispatch(setGenre(e.target.value !== '0' && e.target.value))}
          />,
          <Dropdown
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
          onQueryChange={handleSearchQuery}
        />
        {isLoading ? (
          'LOADING...'
        ) : isFetching ? (
          'FETCHING DATA...'
        ) : (
          <>
            <Movies movies={data.search_result} />
            <Pagination
              page={page}
              totalPages={data.total_pages}
              onLeftClick={() => setPage((prev) => prev - 1)}
              onRightClick={() => setPage((prev) => prev + 1)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
