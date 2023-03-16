import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '@/slices/searchSlice';
import { fetchWeatherByCity } from '@/slices/weatherSlice';

import './search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.search);
  const { data } = useSelector((state) => state.weather);

  const handleSearch = (e) => {
    dispatch(changeInput(e.target.value));
  };

  return (
    <div>
      <div>Search field: {input}</div>
      <input placeholder='Search city' value={input} onChange={handleSearch} />
      <button onClick={() => dispatch(fetchWeatherByCity(input))}>
        Search
      </button>
      {data && data.cod == 404 && <div>City not found!</div>}
    </div>
  );
};

export default Search;
