import Counter  from './components/Counter';
import SearchBar from './components/searchBar';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';
import { useState } from "react";

function App() {
  const [searchText, setSearchtext] = useState("")
  const [filter, setFilter] = useState("all");

  return (
    <div className='wrap'>
      <h1>My todo list:</h1>
      {/* <Counter /> */}

      <div className='panel'>
        <div className='panel-label'>ຈຸດກວດທີ 1</div>
        <SearchBar searchText={searchText} onChange={setSearchtext}/>

        <FilterButtons value={filter} onChange={setFilter}/>

        <p>{searchText}</p>
        <p>{filter}</p>

      </div>

      <TodoList searchText={searchText} filter={filter} />
    </div>
  )
}

export default App;