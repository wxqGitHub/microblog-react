
import React from 'react'
import { RouteHandler } from 'react-router'
import Head from './components/Head/Microblog.Head'
import Message from './components/Message/Microblog.Messages'
import Content from './components/Content/Microblog.Content'
import Footer from './components/Footer/Microblog.Footer'
import TodoStore from './stores/Stores'

function getTodoState(){
    return {
        allTodos : TodoStore.get_all()
    }
}

class Microblog extends React.Component{

    constructor (props){
        super(props)
        this.state = getTodoState();
        this.changeCallback = this._onChange.bind(this);
    }

    _onChange (){
        this.setState(getTodoState());
    }

    componentDidMount (){
        TodoStore.addChangeListener(this.changeCallback)
    }

    componentWillUnmount () {
        TodoStore.removeChangeListener(this.changeCallback);
    }

    render (){
        return (
            <div className = 'Microblog'>
                <Head userTodos = {this.state.allTodos.user} />
                <Message messageTodo = {this.state.allTodos.message} />
                <RouteHandler allTodos = {this.state.allTodos} />
            </div>
        )
    }
}

export default Microblog
