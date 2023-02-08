import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Title1 } from '../Titles.component';
import { Waypoint } from 'react-waypoint';
import {
  ButtonForm,
  FormComponent,
  InputComponent,
  SelectComponent,
  TextAreaComponent,
} from '../form/form.styles';
import {
  ContactSection,
  IconBox,
  IconContainer,
  LinkedInIcon,
  GitHubIcon,
} from './contact.styles';
import { Colors } from '../../styles/variables';
import { motion } from 'framer-motion';

const Contact = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <ContactSection>
        {startAnimation && (
          <Fragment>
            <Title1
              color={Colors.blueLight}
              weight={TextWeight.bold}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              Let's Work Together
            </Title1>

            <FormComponent onSubmit={handleSubmit(onSubmit)}>
              <InputComponent
                placeholder='Name'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.25 }}
                {...register(
                  'name',
                  { pattern: /^[A-Za-z]+$/i },
                  { required: true },
                  { min: 5 },
                  { max: 50 }
                )}
              />

              <InputComponent
                placeholder='Email'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.3 }}
                {...register(
                  'email',
                  {
                    pattern:
                      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                  },
                  { required: true },
                  { max: 50 }
                )}
              />
              <SelectComponent
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.35 }}
                {...register('subject')}
              >
                <option value='Asunto'>Asunto</option>
                <option value='Asunto'>Asunto</option>
                <option value='Asunto'>Asunto</option>
              </SelectComponent>

              <TextAreaComponent
                placeholder='Message'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.4 }}
                rows='5'
                {...register(
                  'message',
                  { required: true },
                  { min: 15 },
                  { max: 150 }
                )}
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <ButtonForm
                type='submit'
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.45 }}
              />
            </FormComponent>

            <IconContainer>
              <IconBox>
                <LinkedInIcon
                // as={motion.svg}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.25 }}
                />
              </IconBox>
              <IconBox>
                <GitHubIcon
                // as={motion.svg}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.25 }}
                />
              </IconBox>
            </IconContainer>
          </Fragment>
        )}
      </ContactSection>
    </Waypoint>
  );
};
export default Contact;
