import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1300px;
  height: 800px;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.div`
  background: white;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 15px;
  border: 1px solid var(--white);
  border-radius: 5%;
  h1 {
    text-align: center;
    font-size: 50px;
    color: var(--primary);
  }
  span {
    text-align: center;
    margin-top: 15px;
  }
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 50%;
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  padding: 0 10px;
  border: 1px solid var(--gray);
  border-radius: 5px;
`;

export const Button = styled.button`
  color: var(--primary);
  background: var(--background);
  border: 1px solid var(--primary);
  width: 35%;
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  @media screen and (max-width: 600px) and (min-width: 450px) {
    font-size: 12px;
    width: 30%;
  }
  @media screen and (max-width: 449px) {
    font-size: 12px;
    padding: 10px 5px;
    width: 30%;
  }
`;
