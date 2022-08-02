// Styles
import * as C from './styles';

// Types
import { Item } from '../../types/Item';
import { Category } from '../../types/Category';

// Hooks
import { useState } from 'react';

// Date
import { categories } from '../../data/categories';

// Helpers
import { FilterListByMonth, getCurrentMonth } from '../../helpers/dataFilter';

export const App = () => {

  const [listItem, setListItem] = useState<Item[]>([{
    date: "02-08-2022",
    category: "alimentação",
    title: "lanche",
    value: 22.50
  }]);
  const [dataFiltered, setDataFiltered] = useState("02-08-2022");

  const listFiltered = FilterListByMonth(listItem, dataFiltered);


  return (
    <C.Container>
      <C.Header>
        <C.Title>Sistema Financeiro</C.Title>
      </C.Header>
      <C.Body>
        {listItem.map((item, i) => (
          <div key={i}>{item.title}</div>
        ))}
        {listFiltered.map((item, i) => (
          <div key={i}>{item.title}</div>
        ))}
      </C.Body>
    </C.Container>
  )
}
