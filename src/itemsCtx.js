import { createContext } from 'react';
const itemsCtx = createContext({
  items: [],
  filteredYear: 2022,
  updateitems:()=>{},
  updatefilteredYear:()=>{}
});


  
export default itemsCtx