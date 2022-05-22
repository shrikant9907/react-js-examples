import React from 'react'
import { listOfAnimals } from './listOfAnimals';
import './searchfilter.css';

const SearchFilter = () => {

  const [showResult, setShowResult] = React.useState(false);
  const [filteredList, setFilteredList] = React.useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== '') {
      const filteredAnimals = listOfAnimals.filter((item) => {
        if (
            (item.toLowerCase().trim() === value.toLowerCase().trim()) || 
            (item.toLowerCase().trim().startsWith(value.toLowerCase().trim()))
           ) {
          return true;
        }
        return false;
      });
      setShowResult(true);
      setFilteredList(filteredAnimals);
    } else {
      setShowResult(false);
    }
  };

  return (
    <React.Fragment>
      <div className='search-filter-ui'>
        <form autoComplete="off">
          <h3>Search Animals</h3>
          <input
            required={true}
            onChange={(e) => handleChange(e)}
            type="text"
            placeholder="Search animal by name"
          />
        </form>

        {showResult && (
          <ul>
            { 
              filteredList.map((item, idx) => <li>{item}</li>)
            }
          </ul>
        )}
      </div>
    </React.Fragment>
  )
}

export default SearchFilter