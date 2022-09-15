import { FilterBtn } from '../../components/FilterBtn';
import { Search } from '../../components/Search';
import './header.css';

export const Header = () => (
  <>
    <h1 className="title">ToDo List</h1>
    <div className="searchBox">
      <Search />
      <div className="filterBox">
        <FilterBtn name="All" />
        <FilterBtn name="Active" />
        <FilterBtn name="Done" />
      </div>
    </div>
  </>
);
