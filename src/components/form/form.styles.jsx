import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Colors } from '../../styles/variables';

export const FormComponent = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: start;
  margin-top: 4rem;
`;

export const InputComponent = styled(motion.input)`
  width: 100%;
  height: 5rem;
  border-radius: 10px;
  border: 1px solid ${Colors.blueDark};
  background-color: #c7d6f4;
  font-size: 1.6rem;
  padding: 0.5rem;
  margin-top: 2rem;
`;
export const TextAreaComponent = styled(motion.textarea)`
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${Colors.blueDark};
  background-color: #c7d6f4;
  padding: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  margin-top: 2rem;
`;

export const SelectComponent = styled(motion.select)`
  width: 100%;
  height: 5rem;
  border-radius: 10px;
  border: 1px solid ${Colors.blueDark};
  background-color: #c7d6f4;
  padding: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  margin-top: 2rem;
`;

export const ButtonForm = styled(motion.input)`
  margin-top: 2rem;
  border-radius: 10px;
  border: 1px solid ${Colors.blueDark};
  background-color: ${Colors.redLigth};
  color: ${Colors.blueDark};
  font-size: 2rem;
  font-weight: 600;
  height: 5rem;
`;
