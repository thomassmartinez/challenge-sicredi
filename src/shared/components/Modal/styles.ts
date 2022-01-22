import styled from 'styled-components';

interface IContainerProps {
  open: boolean;
}

export const Container = styled.div<IContainerProps>`
  position: ${(props) => (props.open ? 'fixed' : 'absolute')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  transition: opacity 400ms ease-in;
`;

export const Content = styled.div`
  width: 600px;
  position: relative;
  margin: 10% auto;
  padding: 15px 20px;
  border-radius: 10px;
  background: #fff;
`;
export const Section = styled.div`
  width: 100%;
  height: 200px;
  padding: 30px 0;
`;

export const Header = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: var(--primary);
  }
`;

export const IconClose = styled.span`
  position: absolute;
  font-size: 25px;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600px;
`;

export const Divider = styled.hr`
  width: 100%;
  padding: 1px;
  background: black;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 30%;
  margin-bottom: 15px;
  padding: 0 10px;
  border: 1px solid var(--gray);
  border-radius: 5px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 75%;
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Button = styled.button`
  color: ${(props) =>
    props.type === 'reset' ? 'var(--white)' : 'var(--primary)'};
  background: ${(props) =>
    props.type === 'reset' ? 'var(--primary)' : 'var(--background)'};
  border: 1px solid var(--primary);
  width: 20%;
  padding: 10px 15px;
  font-size: 15px;
  border-radius: 5px;
  margin-left: 5px;
`;
