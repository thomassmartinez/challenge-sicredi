import React, {useCallback, useState} from 'react';
import {
  Container,
  Content,
  Box,
  Input,
  Button,
  ContainerInput,
  ContainerButton,
} from './styles';
import {IUser} from 'shared/context';
import {useLogin} from 'shared/hooks/useLogin';

export const LoginPage: React.FC = () => {
  const {setUser, setIsLogged} = useLogin();
  const [identify, setIdentify] = useState<IUser>({login: '', password: ''});
  const [disabled, setDisabled] = useState(false);
  const handleSetIdentify = useCallback(
    (e: React.FormEvent, value, item) => {
      identify && setIdentify({...identify, [value]: item});
    },

    [identify],
  );

  const handleConfirmCredential = useCallback(
    (e) => {
      e.preventDefault();
      setDisabled(true);
      identify && setUser(identify);

      setTimeout(() => {
        setIsLogged(true);
        setDisabled(false);
      }, 1000);
    },
    [identify, setDisabled, setUser, setIsLogged],
  );

  return (
    <Container>
      <Content>
        <Box onSubmit={(e: React.FormEvent) => handleConfirmCredential(e)}>
          <h1>Login</h1>
          <span>Digite qualquer user e password para logar</span>
          <ContainerInput>
            <Input
              placeholder="Digite seu login:"
              required
              onChange={(e) => handleSetIdentify(e, 'login', e.target.value)}
              type="text"
            />
            <Input
              placeholder="Digite sua senha"
              required
              onChange={(e) => handleSetIdentify(e, 'password', e.target.value)}
              type="password"
            />
          </ContainerInput>
          <ContainerButton>
            <Button disabled={disabled} type="submit">
              Entrar
            </Button>
          </ContainerButton>
        </Box>
      </Content>
    </Container>
  );
};
