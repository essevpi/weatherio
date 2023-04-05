import { useDispatch, useSelector } from 'react-redux';
import { changeInput, savePreviousInput } from '@/slices/searchSlice';
import { fetchWeatherByCity } from '@/slices/weatherSlice';
import { AiOutlineSearch } from 'react-icons/ai';

import styles from './search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.search);

  const handleSearchChange = (e) => {
    dispatch(changeInput(e.target.value));
  };

  const handleFormSubmit = (city) => (e) => {
    e.preventDefault();
    e.target.blur();
    dispatch(fetchWeatherByCity(city));
    dispatch(savePreviousInput(city));
    dispatch(changeInput(''));    
  };

  return (
    <form
      className={styles['search__container']}
      onSubmit={handleFormSubmit(input)}
    >
      <div className={styles['search__wrapper']}>
        <input
          className={styles['search__field']}
          placeholder='Search city'
          value={input}
          onChange={handleSearchChange}
        />
        <span className={styles['search__icon']}>
          <AiOutlineSearch style={{ display: 'flex' }} size={'24px'} />
        </span>
      </div>
    </form>
  );
};

export default Search;
