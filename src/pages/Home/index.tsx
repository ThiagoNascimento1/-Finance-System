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

  const [currentSection, setCurrentSection] = useState(true)
  const [listItems, setListItems] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [currentYear, setCurrentYear] = useState(getCurrentYear(currentMonth));
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [sortedFilteredList, setSortedFilteredList] = useState<Item[]>([]);

  const MonthFilteredList: Item[] = listItems.filter(item => item.date.includes(currentMonth));
  const YearFilteredList: Item[] = listItems.filter(item => item.date.includes(currentYear));

  const handleMonthChange = (newDate: string) => setCurrentMonth(newDate);

  const handleYearChange = (year: string) => {
    setCurrentYear(year);
  };

  const handleAddItem = (item: Item) => {
    setListItems(prevList => [...prevList, item])
  };

  const handleRemoveItem = (item: Item) => {
    setListItems(() => listItems.filter(i => item != i));
  };

  const handleSectionChange = (section: boolean) => {
    if (section) {
      setCurrentSection(false)
    } else {
      setCurrentSection(true);
    }
    setCurrentYear(getCurrentYear(currentMonth));
    setCurrentMonth(getCurrentMonth());
  }

  useEffect(() => {

    setSortedFilteredList(orderList(MonthFilteredList));

    setIncome(0);
    setExpense(0);

    MonthFilteredList.map(item => {
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
        <C.Title>Sistema de Gestão Financeira</C.Title>
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
          : <TableYear list={YearFilteredList} currentYear={currentYear}/>
        }

      </C.Body>
    </C.Container>
  )
}