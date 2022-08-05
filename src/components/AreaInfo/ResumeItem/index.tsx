import * as C from './styles';

type Props = {
  title: string,
  value: number,
  color?: string
}

export const ResumeItem = ({ title, value, color}: Props) => {
  return (
    <C.Item>
      <C.Title>{title}</C.Title>
      <C.Info color={color}>R$ {value}</C.Info>
    </C.Item>
  )
}
