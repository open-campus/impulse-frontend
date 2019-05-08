import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';


import search from './search';
import details from './details';

const Layouts = ({ match }) => (
    <div className="dashboard-wrapper">
        <Switch>
                       
            <Route path={`${match.url}/search`} component={search} />  
            <Redirect to="/error" />
          
        </Switch>
    </div>
);

export default Layouts;