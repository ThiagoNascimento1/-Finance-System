// Styles
import * as C from './styles';

// Helpers
import { formatMonth, returnMonthFormatted } from '../../helpers/dataFilter';

type Props = {
  currentMonth: string,
  onMonthChange: (newDate: string) => void;
};

export const AreaInfo = ({ currentMonth, onMonthChange }: Props) => {

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

  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={() => handleMonth("up")}><i className="fa-solid fa-arrow-left"></i></C.MonthArrow>
        <C.MonthTitle>{formatMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={() => handleMonth("down")}><i className="fa-solid fa-arrow-right"></i></C.MonthArrow>
      </C.MonthArea>
      <C.ResumeArea>
        ...
      </C.ResumeArea>
    </C.Container>
  )
};