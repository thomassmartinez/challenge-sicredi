import React, {useEffect} from 'react';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import {useLogin} from 'shared/hooks/useLogin';

import {LoginPage, HomePage} from '../pages';

export const Routes: React.FC = () => {
  const {isLogged, user} = useLogin();
  const history = useHistory();

  useEffect(() => {
    !isLogged ? history.push('/login') : history.push('/');
  }, [user, isLogged, history]);

  return (
    <Switch>
      <Route path={'/'} exact component={HomePage} />
      <Route path={'/login'} exact component={LoginPage} />
      <Route path={'*'} exact component={() => <Redirect to="/" />} />
    </Switch>
  );
};
