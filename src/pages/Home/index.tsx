// Styles
import * as C from './styles';

// Types
import { Item } from '../../types/Item';

// Hooks
import { useState, useEffect } from 'react';

// Data
import { categories } from '../../data/categories';

// Helpers
import { FilterListByMonth, getCurrentMonth } from '../../helpers/dataFilter';

// Components
import { TableArea } from '../../components/TableArea';
import { AreaInfo } from '../../components/AreaInfo';

export const App = () => {

  const [listItem, setListItem] = useState<Item[]>([{
    date: "02/08/2022",
    category: "food",
    title: "lanche",
    value: 22.50
  },{
    date: "04/08/2022",
    category: "salary",
    title: "sálario",
    value: 1000.00
  },{
    date: "04/08/2022",
    category: "food",
    title: "almoço",
    value: 25.00
  }]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const listFiltered = FilterListByMonth(listItem, currentMonth);

  const handleMonthChange = (newDate: string) => setCurrentMonth(newDate);


  useEffect(() => {

    const listItemsIncome = listItem.filter((item) => !categories[item.category].expense);
    const listItemsExpense = listItem.filter((item) => categories[item.category].expense);

    setIncome(0);
    setExpense(0);
    
    listItemsIncome.map((item) => {
      setIncome(prevState => prevState + item.value)
    });
    listItemsExpense.map((item) => {
      setExpense(prevState => prevState + item.value)
    });

  }, [listItem]);


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
        <TableArea list={listFiltered}/>
      </C.Body>
    </C.Container>
  )
}
