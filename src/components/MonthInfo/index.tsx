// Styles
import * as C from './styles';

// Helpers
import { formatMonth, returnMonthFormatted } from '../../helpers/dataFilter';

// Components
import { ResumeItem } from './ResumeItem';

type Props = {
  currentMonth: string,
  onMonthChange: (newDate: string) => void,
  income: number,
  expense: number
};

export const MonthInfo = ({ currentMonth, onMonthChange, income, expense }: Props) => {

  const handleMonth = (action: string) => {
    const [month, year] = currentMonth.split("/");
    const date = new Date(parseInt(year), parseInt(month) - 1);

    if (action === "up") {
      date.setMonth(date.getMonth() - 1);
    } else {
      date.setMonth(date.getMonth() + 1);
    }
    
    onMonthChange(returnMonthFormatted(date));

    };

    const handleFinanceBalance = () => {
      const financeBalance = income - expense;
      if(financeBalance > 0) {
        return "green"
      } else if(financeBalance < 0) {
        return "red"
      } else {
        return "#000"
      }

  };

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={() => handleMonth("up")}><i className="fa-solid fa-arrow-left"></i></C.MonthArrow>
        <C.MonthTitle>{formatMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={() => handleMonth("down")}><i className="fa-solid fa-arrow-right"></i></C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        <ResumeItem title="Receita" value={income}/>
        <ResumeItem title="Despesas" value={expense}/>
        <ResumeItem color={handleFinanceBalance()} title="Balanço geral" value={income - expense}/>
      </C.ResumeArea>
    </C.Container>
  )
};