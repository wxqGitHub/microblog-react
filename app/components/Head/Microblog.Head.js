

import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import TodoActions from '../../actions/Actions'

class Head extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        const login = this.props.userTodos.name ?
            <NavItem eventKey={1} href="#/">Welcome! {this.props.userTodos.name}</NavItem>
            :
            <NavItem eventKey={1} href="#/login">login</NavItem>;


        const regist = this.props.userTodos.name ?
            <NavItem eventKey={2} href="/logout">logout</NavItem>
            :
            <NavItem eventKey={2} href="#/regist">regist</NavItem>;

        return (
            <Navbar brand={<a href="#/">Microblog</a>}  inverse fixedTop toggleNavKey={0}>
                <Nav right eventKey={0}>
                    { login }
                    { regist }
                </Nav>
            </Navbar>
        )
    }
}
export default Head
