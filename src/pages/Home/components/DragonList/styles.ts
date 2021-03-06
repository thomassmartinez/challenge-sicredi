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

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 20%;
  height: 40px;
  font-size: 20px;
  color: var(--background);
  background: var(--primary);
  border: 1px solid var(--background);
  border-radius: 5px;
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
    @media screen and (max-width: 1100px) and (min-width: 700px) {
      padding: 15px;
    }
    @media screen and (max-width: 700px) and (min-width: 300px) {
      padding: 15px;
    }
    @media screen and (max-width: 410px) {
      padding: 5px;
    }
  }

  thead {
    tr {
      text-transform: uppercase;
    }
  }

  tbody {
    .td-clicable:hover {
      cursor: pointer;
      color: red;
    }
  }

  td {
    padding: 15px 50px;
    border: 0;
    background: var(--white);
    width: 30%;
    span {
      font-size: 15px;
      text-align: center;
    }
    td:last-child,
    td:nth-last-child(2) {
      width: 10%;
    }

    @media screen and (max-width: 1100px) and (min-width: 300px) {
      padding: 15px;
      text-align: center;
    }
    @media screen and (max-width: 410px) {
      padding: 8px;
      font-size: 11px;
    }
  }

  @media screen and (max-width: 1100px) and (min-width: 300px) {
    font-size: 15px;
  }
`;
