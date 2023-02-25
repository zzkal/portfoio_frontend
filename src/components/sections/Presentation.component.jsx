import { MainImage } from '../Images.styles';
import {
  PresentationContainer,
  PresentatioItemsContainer,
  PresentationTextContainer,
} from './presentation.styles';
import { Title1, Title4 } from '../Titles.component';
import { Colors } from '../../styles/variables';
import { TextWeight } from '../../styles/text-variables/text-weight';
import { Paragraph } from '../paragraphs.styles';

import myImage from '../../assets/img/man_portrait.jpeg';
import { Fragment, useState, useEffect, useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const Presentation = (props) => {
  const { profile } = useContext(DataContext);

  return (
    <PresentationContainer>
      <PresentatioItemsContainer>
        {window.innerWidth < 1200 ? (
          <Fragment>
            <Title1
              color={Colors.blueDark}
              weight={TextWeight.bold}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {profile.name}
            </Title1>

            <Title4
              color={Colors.blueDark}
              weight={TextWeight.bold}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {profile.career}
            </Title4>

            <MainImage
              src={myImage}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />

            <Paragraph
              color={Colors.blueDark}
              weight={TextWeight.regular}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              size='1.5rem'
              pt='1rem'
            >
              {profile.description}
            </Paragraph>
          </Fragment>
        ) : (
          <Fragment>
            <PresentationTextContainer>
              <Title1
                color={Colors.blueDark}
                weight={TextWeight.bold}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                textalignleft='true'
              >
                {profile.name}
              </Title1>

              <Title4
                size='5rem'
                color={Colors.blueDark}
                weight={TextWeight.bold}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {profile.career}
              </Title4>

              <Paragraph
                color={Colors.blueDark}
                weight={TextWeight.regular}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                size='2.5rem'
                pt='1rem'
              >
                {profile.description}
              </Paragraph>
            </PresentationTextContainer>

            <MainImage
              src={myImage}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Fragment>
        )}
      </PresentatioItemsContainer>
    </PresentationContainer>
  );
};

export default Presentation;
