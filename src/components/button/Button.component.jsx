import { ButtonComponent } from './button.styles';

const Button = ({ text, style }) => {
  return <ButtonComponent style={style}>{text}</ButtonComponent>;
};
export default Button;
