// Styles
import * as C from './styles';

// Types
import { Item } from '../../../types/Item';

// Datas
import { categories } from '../../../data/categories';

type Props = {
  item: Item;
  handleRemoveItem: (item: Item) => void;
};

export const TableItem = ({ item, handleRemoveItem }: Props) => {

  const handleRemove = () => {
    handleRemoveItem(item);
  };

  return (
    <C.TableRow>
      <C.TableColumn>{item.date}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.description}</C.TableColumn>
      <C.TableColumn>
        <C.Value expense={categories[item.category].expense}>
        R$ {item.value}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <C.IconTrash onClick={handleRemove}><i className="fa-solid fa-trash"></i></C.IconTrash>
      </C.TableColumn>
    </C.TableRow>
  )
}
