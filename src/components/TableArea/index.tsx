// Styles
import * as C from './styles';

// Types
import { Item } from '../../types/Item';

// Components
import { TableItem } from './TableItem';

type Props = {
    list: Item[]
}

export const TableArea = ({ list }: Props) => {

    return (
        <C.Container>
            <thead>
                <tr>
                    <C.Thead width={150}>Data</C.Thead>
                    <C.Thead width={150}>Categoria</C.Thead>
                    <C.Thead>Título</C.Thead>
                    <C.Thead width={100}>Valor</C.Thead>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, i) => (
                        <TableItem key={i} item={item} />
                    ))
                }
            </tbody>
        </C.Container>
    )
};