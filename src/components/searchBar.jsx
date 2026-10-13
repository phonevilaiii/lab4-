// import { useState } from "react";
//     const [searchText, setSearchText] = useState("");

function SearchBar({ searchText, onChange }) {


    return(
        <div className="search-row">
             <span className="icon">:D</span>
             <input type="text" placeholder="ຄົ້ນຫາ... / Search..." 
             value={searchText} onChange={(e) => onChange(e.target.value)}/>
        </div>
    )
}

export default SearchBar;