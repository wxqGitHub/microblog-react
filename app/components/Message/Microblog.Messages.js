

import React from 'react';
import { Alert } from 'react-bootstrap';


class Message extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        let body,
            allTodos = this.props.messageTodo;

        let [bsStyle, message]  =
            [
                allTodos.type  ? allTodos.type : '',
                allTodos.text  ? allTodos.text : '',
            ];

        if(bsStyle){
            body =
                <div className='container'>
                    <Alert bsStyle={bsStyle}>
                        {message}
                    </Alert>
                </div>
        }

        return (
            <div>
                {body}
            </div>
        )
    }
}

export default Message
