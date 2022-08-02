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
import { getCurrentMonth } from '../../helpers/dataFilter';

export const App = () => {

  const [listItem, setListItem] = useState<Item[]>([{
    date: new Date(2, 7, 2022),
    category: "alimentação",
    title: "lanche",
    value: 22.50
  }]);

  console.log(getCurrentMonth());

  return (
    <C.Container>
      <C.Header>
        <C.Title>Sistema Financeiro</C.Title>
      </C.Header>
      <C.Body>
        {listItem.map((item, i) => (
          <div key={i}>{item.title}</div>
        ))}
      </C.Body>
    </C.Container>
  )
}
