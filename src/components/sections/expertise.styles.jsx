import styled from 'styled-components';

export const ExpertiseSection = styled.div`
  display: flex;
  flex-flow: column;
  height: auto;
  justify-content: start;
  padding: 0 2rem 0 2rem;
  margin-top: 15rem;

  /* @media screen and (min-height: 700px) and (max-height: 900px) {
    height: auto;
  }

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    height: auto;
  } */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 5rem;
  justify-items: center;
  align-items: center;
  margin-top: 5rem;

  @media screen and (min-width: 1200px) {
    margin-top: 15rem;
  }
`;
