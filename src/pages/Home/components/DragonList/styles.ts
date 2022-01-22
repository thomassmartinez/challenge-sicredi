import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  height: 500px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1375px) and (min-width: 700px) {
    padding: 0 50px;
  }
  @media screen and (max-width: 700px) and (min-width: 350px) {
    padding: 0 15px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 0;
`;

export const Table = styled.table`
  width: 100%;
  padding: 0px 0;
  border-spacing: 0 10px;

  th {
    color: var(--white);
    font-weight: 600;
    padding: 15px 80px;
    text-align: left;
    line-height: 15px;
    @media screen and (max-width: 700px) and (min-width: 300px) {
      padding: 15px;
    }
  }

  tr {
    cursor: pointer;
  }

  td {
    padding: 15px 80px;
    border: 0;
    background: var(--white);

    span {
      font-size: 20px;
      text-align: center;
    }

    span:hover {
      color: red;
    }

    @media screen and (max-width: 700px) and (min-width: 300px) {
      padding: 15px;
    }
  }

  @media screen and (max-width: 700px) and (min-width: 300px) {
    font-size: 15px;
  }
`;
