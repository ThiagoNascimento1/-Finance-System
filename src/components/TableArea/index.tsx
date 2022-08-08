// Styles
import * as C from './styles';

// Types
import { Item } from '../../types/Item';

// Components
import { TableItem } from './TableItem';

type Props = {
    list: Item[],
    handleRemoveItem: (item: Item) => void;
}

export const TableArea = ({ list, handleRemoveItem }: Props) => {

    return (
        <C.Container>
            <thead>
                <tr>
                    <C.Thead width={150}>Data</C.Thead>
                    <C.Thead width={150}>Categoria</C.Thead>
                    <C.Thead>Título</C.Thead>
                    <C.Thead width={100}>Valor</C.Thead>
                    <C.Thead width={30}></C.Thead>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, i) => (
                        <TableItem key={i} item={item} handleRemoveItem={handleRemoveItem}/>
                    ))
                }
            </tbody>
        </C.Container>
    )
};