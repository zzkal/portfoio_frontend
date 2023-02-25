import { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Title1, Title4 } from '../Titles.component';
import { Waypoint } from 'react-waypoint';
import Button from '../button/Button.component';
import {
  ContactSection,
  IconBox,
  IconContainer,
  LinkedInIcon,
  GitHubIcon,
} from './contact.styles';
import { Colors } from '../../styles/variables';

const Contact = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     subject: '',
  //     message: '',
  //   },
  // });

  const handleOnEnter = () => {
    setStartAnimation(true);
  };

  return (
    <Waypoint onEnter={handleOnEnter}>
      <ContactSection id='contact'>
        {startAnimation && (
          <Fragment>
            <Title1
              color={Colors.blueLight}
              weight={TextWeight.bold}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              mt='8rem'
            >
              Let's Work Together
            </Title1>

            <Title4 color={Colors.blueLight}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              aut est dolorum.
            </Title4>
            <Button text='Email' style={{ marginTop: '6rem' }} />
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
