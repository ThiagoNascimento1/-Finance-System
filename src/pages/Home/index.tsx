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

// Components
import { TableArea } from '../../components/TableArea';

export const App = () => {

  const [listItem, setListItem] = useState<Item[]>([{
    date: "02/08/2022",
    category: "food",
    title: "lanche",
    value: 22.50
  }]);

  const listFiltered = FilterListByMonth(listItem, getCurrentMonth());


  return (
    <C.Container>
      <C.Header>
        <C.Title>Sistema Financeiro</C.Title>
      </C.Header>
      <C.Body>

        <TableArea list={listFiltered}/>
      </C.Body>
    </C.Container>
  )
}
