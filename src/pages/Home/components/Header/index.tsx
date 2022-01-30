import React, {useCallback} from 'react';
import {useLogin} from 'shared/hooks/useLogin';
import {Container, Content} from './styles';

export const Header: React.FC = () => {
  const {setIsLogged, setUser} = useLogin();

  const handleSignout = useCallback(() => {
    setIsLogged(false);
    setUser({login: '', password: ''});
  }, [setUser, setIsLogged]);

  return (
    <>
      <Container>
        <Content>
          <h1>Dragão</h1>

          <button onClick={() => handleSignout()}>Sair</button>
        </Content>
      </Container>
    </>
  );
};
