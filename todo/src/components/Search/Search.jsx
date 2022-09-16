import { useDispatch } from 'react-redux';

import { actionCreators } from '../../store/actions/todoAction';

import './search.css';

export const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(actionCreators.searchTodoCreator(e.target.value));
  };

  return (
    <input
      className="searchInput"
      type="text"
      placeholder="Search..."
      onChange={handleChange}
    ></input>
  );
};
