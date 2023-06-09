import { useState,useContext } from "react";
import FilterExpenses from "./FilteredExpenses";
export default function SelectFilter(props) {
const ctx=useContext(FilterExpenses)
  const[filter,setFilter]=useState('2022')
  const filterhandler = (e) => {
    ctx.setFilter(e.target.value)
    
    setFilter(e.target.value)
    console.log(e.target.value);
    props.onSelectFilter(e.target.value);
  };

 
  return (
    <div className="grid ml-40 grid-cols-1 grid-rows-1">
      <select
        value={filter}
        onChange={filterhandler}
        className="row-start-1 border rounded-xl w-40 h-10"
        id="">
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}
