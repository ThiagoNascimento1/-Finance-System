import * as C from './styles';

type Props = {
  currentYear: number,
  handleYearChange: (newYear: number) => void
};

export const YearInfo = ({ currentYear, handleYearChange }: Props) => {

  const setNewYear = (p: boolean) => {
    if (p) {
      handleYearChange(currentYear + 1);
    } else {
      handleYearChange(currentYear - 1);
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
