import * as C from './styles';
import { Item } from '../../types/Item';
import { categories } from '../../data/categories';
import { useEffect, useState } from 'react';

type Props = {
  list: Item[],
  currentYear: string;
};

export const TableYear = ({ list, currentYear }: Props) => {

  const [incomeYear, setIncomeYear] = useState(0);
  const [expenseYear, setExpenseYear] = useState(0);

  const balance =incomeYear - expenseYear

  const handleColorBalance = () => {
    if(balance > 0) {
      return "green";
    } else if (balance < 0) {
      return "red";
    } else {
      return "black";
    }
  }

  useEffect(() => {

    setIncomeYear(0);
    setExpenseYear(0);

    list.map(item => {
      if(categories[item.category].expense) {
        setExpenseYear(prevState => prevState + item.value)
      } else {
        setIncomeYear(prevState => prevState + item.value)
      }
    });

  }, [currentYear, list]);

  return (
    <C.Container>
      <C.Table>
          <thead>
            <tr>
              <C.Thead>receita anual</C.Thead>
              <C.Thead>gastos anuais</C.Thead>
              <C.Thead>balanço geral</C.Thead>
            </tr>
          </thead>
          <tbody>
            <tr>
              <C.TableColumn color={incomeYear > 0 ? "green" : "black"}>R$ {incomeYear}</C.TableColumn>
              <C.TableColumn color={expenseYear > 0 ? "red" : "black"}>R$ {expenseYear}</C.TableColumn>
              <C.TableColumn color={handleColorBalance()}>R$ {incomeYear - expenseYear}</C.TableColumn>
            </tr>
          </tbody>
      </C.Table>
      <C.ExtraInfo>
        Seus maiores gastos neste ano foram em <C.Category>Alimentação</C.Category>.
      </C.ExtraInfo>
    </C.Container>
  )
};
