import React, {useState, createContext, useEffect} from 'react';

export interface IContextLogin {
  setUser(value: IUser): void;
  setIsLogged(value: boolean): void;
  user: IUser;
  isLogged: boolean;
}

export interface IUser {
  login: string;
  password: string;
}

export const LoginContext = createContext<IContextLogin>({} as IContextLogin);

export const LoginProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<IUser>({login: '', password: ''});
  const [isLogged, setIsLogged] = useState(false);

  console.log(user, isLogged, 'hook');

  return (
    <LoginContext.Provider value={{user, setUser, setIsLogged, isLogged}}>
      {children}
    </LoginContext.Provider>
  );
};
