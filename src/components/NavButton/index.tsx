import { Button } from '../AreaAdd/styles';
import * as C from './styles';

type Props = {
  currentSection: boolean,
  setSection: (section: boolean) => void;
}

export const NavButton = ({ currentSection, setSection }: Props) => {
  return (
    <C.Container>
      <C.Button onClick={() => setSection(currentSection)}>
        {currentSection ? "exibir resumo anual" : "exibir resumo mensal"}
      </C.Button>
    </C.Container>
  )
}
