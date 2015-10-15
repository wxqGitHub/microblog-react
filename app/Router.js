

import React from 'react'
import { Router, Route, DefaultRoute } from 'react-router'
import Content from './components/Content/Microblog.Content'
import Regist from './components/Regist/Microblog.Regist'
import Login from './components/Login/Microblog.Login'
import App from './Microblog.App'


const routers = (
    <Route name="home" path="/" handler={App}>
      <DefaultRoute name="index" handler={ Content} />
      <Route name="login" path="login" handler={Login} />
      <Route name="regist" path="regist" handler={Regist} />
    </Route>
)


export default routers
