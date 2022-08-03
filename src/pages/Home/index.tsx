// Styles
import * as C from './styles';

// Types
import { Item } from '../../types/Item';

// Hooks
import { useState } from 'react';

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
  }]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  const listFiltered = FilterListByMonth(listItem, currentMonth);

  const handleMonthChange = (newDate: string) => setCurrentMonth(newDate);

  return (
    <C.Container>
      <C.Header>
        <C.Title>Sistema Financeiro</C.Title>
      </C.Header>
      <C.Body>
        <AreaInfo
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <TableArea list={listFiltered}/>
      </C.Body>
    </C.Container>
  )
}
