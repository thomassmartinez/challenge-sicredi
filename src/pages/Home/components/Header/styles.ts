import styled from 'styled-components';

export const Container = styled.header`
  background: var(--white);
  opacity: 1;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--primary);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Content = styled.div`
  max-width: 1300px;
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    background-color: var(--white);
    width: 60px;
    height: 60px;
  }
  h1 {
    margin-left: 15px;
    font-size: 35px;
    color: var(--primary);

    @media screen and (max-width: 700px) and (min-width: 350px) {
      font-size: 25px;
    }
  }

  @media screen and (max-width: 1375px) and (min-width: 700px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 700px) and (min-width: 350px) {
    padding: 0 35px;
  }
`;
