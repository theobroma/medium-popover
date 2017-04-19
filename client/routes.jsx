import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Layout from './Layout';
import MediumPopover from './MediumPopover';
import NotFound from './NotFound';

export const routes = (
  <div>
    <Route path="/" component={Layout}>
      <IndexRedirect to="/medium" />
      <Route path="/medium" component={MediumPopover} />
    </Route>
    {/* для всех остальных роутов: показывай NotFound */}
    <Route path="*" component={NotFound} />
  </div>
);
