// Styles
import * as C from './styles';

// Types
import { Item } from '../../types/Item';

// Hooks
import { useState, useEffect } from 'react';

// Data
import { categories } from '../../data/categories';

// Helpers
import { getCurrentMonth } from '../../helpers/dataFilter';

// Components
import { TableArea } from '../../components/TableArea';
import { AreaInfo } from '../../components/AreaInfo';
import { AreaAdd } from '../../components/AreaAdd';

export const App = () => {

  const [listItems, setListItems] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const listFiltered: Item[] = listItems.filter(item => item.date.includes(currentMonth));

  const handleMonthChange = (newDate: string) => setCurrentMonth(newDate);

  const handleAddItem = (item: Item) => {
    setListItems(prevList => [...prevList, item])
  };

  useEffect(() => {

    setIncome(0);
    setExpense(0);

    listFiltered.map(item => {
      if(categories[item.category].expense) {
        setExpense(prevState => prevState + item.value)
      } else {
        setIncome(prevState => prevState + item.value)
      }
    });

  }, [currentMonth, listItems]);


  return (
    <C.Container>
      <C.Header>
        <C.Title>Sistema Financeiro</C.Title>
      </C.Header>
      <C.Body>

        <AreaInfo
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          expense={expense}
          income={income}
        />

        <AreaAdd handleAddItem={handleAddItem}/>

        <TableArea list={listFiltered}/>

      </C.Body>
    </C.Container>
  )
}
