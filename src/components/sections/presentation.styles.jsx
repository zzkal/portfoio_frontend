import styled from 'styled-components';

export const PresentationContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: start;
  position: relative;
  padding: 0 2rem 0 2rem;
  height: 100vh;

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    height: 70vh;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    //align-items: center;
    padding: 8rem;
  }
`;

export const PresentatioItemsContainer = styled.div`
  margin-top: 8rem;

  @media (min-height: 700px) and (max-height: 900px) {
    margin-top: 12rem;
  }

  @media screen and (min-width: 700px) and (max-width: 1200px) {
    height: 50vh;
    margin-top: 15rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    min-width: 100%;
  }
`;

export const PresentationTextContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;
