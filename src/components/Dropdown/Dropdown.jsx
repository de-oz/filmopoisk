import { useState } from 'react';
import styles from './Dropdown.module.css';
import downArrow from '../../assets/icons/arrow-square-down.svg';

const Dropdown = ({ label, options, selectedValue = '', onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <label className={styles.label}>
      {label}
      <div className={styles.dropdown}>
        <select
          required
          value={selectedValue}
          onChange={(e) => (onChange(e), setIsOpen(false))}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className={styles.select}>
          <option
            value=""
            disabled
            hidden>
            Выберите {label.split(/\s+/)[0].toLowerCase()}
          </option>
          {Object.entries(options).map(([value, label]) => (
            <option
              key={value}
              value={value}>
              {label}
            </option>
          ))}
        </select>
        <img
          className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}
          src={downArrow}
          alt="Down arrow"
        />
      </div>
    </label>
  );
};

export default Dropdown;
