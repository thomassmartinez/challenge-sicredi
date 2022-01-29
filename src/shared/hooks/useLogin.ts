import {useContext} from 'react';

import {LoginContext} from '../context';

export const useLogin = () => useContext(LoginContext);
