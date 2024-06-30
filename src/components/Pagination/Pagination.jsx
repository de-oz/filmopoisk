import PaginationButton from '../PaginationButton/PaginationButton';
import styles from './Pagination.module.css';
import leftArrow from '../../assets/icons/arrow-left.svg';
import rightArrow from '../../assets/icons/arrow-right.svg';

const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <nav className={styles.pagination}>
      <PaginationButton onClick={onLeftClick} isDisabled={page === 1}>
        <img
          src={leftArrow}
          alt="Previous page button"
        />
      </PaginationButton>
      <span>{page}</span>
      <PaginationButton onClick={onRightClick} isDisabled={totalPages === page}>
        <img
          src={rightArrow}
          alt="Next page button"
        />
      </PaginationButton>
    </nav>
  );
};

export default Pagination;
