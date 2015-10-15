

import React from 'react'
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect } from "react-router";
import routers from './Router'
import TodoActions from './actions/Actions'


const container = document.getElementById("react");


Router.run(routers, (Handler, state) => {
    TodoActions.destroy_message();
    React.render(<Handler/>, container);
});
