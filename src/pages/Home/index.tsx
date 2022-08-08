// Styles
import * as C from './styles';

// Types
import { Item } from '../../types/Item';

// Hooks
import { useState, useEffect } from 'react';

// Data
import { categories } from '../../data/categories';

// Helpers
import { getCurrentMonth, orderList, getCurrentYear } from '../../helpers/dataFilter';

// Components
import { MonthInfo } from '../../components/MonthInfo';
import { TableMonth } from '../../components/TableMonth';
import { YearInfo } from '../../components/YearInfo';
import { TableYear } from '../../components/TableYear';
import { AreaAdd } from '../../components/AreaAdd';
import { NavButton } from '../../components/NavButton';

export const App = () => {

  const [currentSection, setCurrentSection] = useState(false)
  const [listItems, setListItems] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [currentYear, setCurrentYear] = useState(getCurrentYear(currentMonth));
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [sortedFilteredList, setSortedFilteredList] = useState<Item[]>([]);

  const listFiltered: Item[] = listItems.filter(item => item.date.includes(currentMonth));

  const handleMonthChange = (newDate: string) => setCurrentMonth(newDate);

  const handleYearChange = (year: number) => {
    setCurrentYear(year);
  };

  const handleAddItem = (item: Item) => {
    setListItems(prevList => [...prevList, item])
  };

  const handleRemoveItem = (item: Item) => {
    setListItems(() => listItems.filter(i => item != i));
  };

  const handleSectionChange = (section: boolean) => section ? setCurrentSection(false)
  : setCurrentSection(true);

  useEffect(() => {

    setSortedFilteredList(orderList(listFiltered));

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

        {
          currentSection ?
          <MonthInfo
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          expense={expense}
          income={income}
        />

        : <YearInfo currentYear={currentYear} handleYearChange={handleYearChange}/>
        }
        <NavButton currentSection={currentSection} setSection={handleSectionChange}/>
        <AreaAdd handleAddItem={handleAddItem}/>

        {
          currentSection ?
          <TableMonth list={sortedFilteredList} handleRemoveItem={handleRemoveItem}/>
          : <TableYear />
        }

      </C.Body>
    </C.Container>
  )
}