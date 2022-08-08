import * as C from './styles';

type Props = {
  currentYear: string,
  handleYearChange: (newYear: string) => void
};

export const YearInfo = ({ currentYear, handleYearChange }: Props) => {

  const setNewYear = (p: boolean) => {
    if (p) {
      handleYearChange((Number(currentYear) + 1).toString());
    } else {
      handleYearChange((Number(currentYear) - 1).toString());
    }
  };

  return (
    <C.Container>
      <C.YearArrow onClick={() => setNewYear(false)}><i className="fa-solid fa-arrow-left"></i></C.YearArrow>
      <C.YearTitle>{currentYear}</C.YearTitle>
      <C.YearArrow onClick={() => setNewYear(true)}><i className="fa-solid fa-arrow-right"></i></C.YearArrow>
    </C.Container>
  )
}
