import { useContext } from 'react';
import itemsCtx from './itemsCtx';

const ItemsCtxProvider = (props) => {
  const ctx = useContext(itemsCtx);

  const defCtx = {
    items: [],
    filteredYear: 2022,
    updateitems:()=>{},
    updatefilteredYear:()=>{}
  };

  return <ctx.Provider value={props.value}>{props.children}</ctx.Provider>;
};
export default ItemsCtxProvider;
