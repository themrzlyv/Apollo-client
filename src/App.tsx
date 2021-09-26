import React from 'react';
import { Route, Switch } from 'react-router';

import { mainRouteType } from '@common/@types';
import { mainRoutes } from '@common/data/mainRoutes';
import Layout from '@views/Components/Layout';

const App: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Layout>
        {mainRoutes.map((item: mainRouteType, index: number) => (
          <Route key={index} path={item.path} exact={item.exact} component={item.component} />
        ))}
      </Layout>
    </Switch>
  );
};

export default App;
