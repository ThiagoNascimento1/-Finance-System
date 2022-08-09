// Styles
import * as C from './styles';

// Hooks
import { ReactElement, useState } from 'react';

// Helpers
import { handleDate } from '../../helpers/dataFilter';

// Types
import { Item } from '../../types/Item';
type Props = {
  handleAddItem: (item: Item) => void;
}


export const AreaAdd = ({ handleAddItem }: Props) => {
 
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("food");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const handleCreateItem =() => {
    const returndate = handleDate(date);
    const Item: Item = {
      date: returndate,
      category,
      description,
      value: Number(value)
    }

    setDate("");
    setCategory("food");
    setDescription("");
    setValue("");
    handleAddItem(Item);
  };

  return (
    <C.Form>
      <C.Label>
        data
        <C.Date
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </C.Label>
      <C.Label>
      categoria
      <C.Category
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="income">nova receita</option>
        <option value="food">alimentação</option>
        <option value="rent">aluguel</option>
        <option value="leisure">lazer</option>
        <option value="cheers">saúde</option>
      </C.Category>
      </C.Label>
      <C.Label>
        descrição
        <C.Description
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </C.Label>
      <C.Label>
        valor
        <C.Value
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </C.Label>
      <C.Button onClick={handleCreateItem}>Adicionar</C.Button>
    </C.Form>
  )
}