
import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import TodoActions from '../../actions/Actions'

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emailBsStyle : '',
            passwordBsStyle: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onCommentSubmit (data){
        $.ajax({
            url: '/login',
            type: 'get',
            data: data,
            success: function(data){
                if(data.code === 0){
                    TodoActions.update_message(data.state, (data.messages+'    2s后自动跳转...'));
                    TodoActions.update_user(data.userName);
                    window.setTimeout(function(){
                        window.location.href='#/';
                    }, 2000)
                }else{
                    TodoActions.update_message(data.state, data.messages);
                    TodoActions.destroy_user();

                    if(data.code === 3001 ){
                        this.setState({passwordBsStyle: data.state});
                    }else if (data.code === 3002){
                        this.setState({emailBsStyle: data.state});
                    }
                }
            }
        })
    }

    handleSubmit(e) {
        this.setState({
            emailBsStyle: '',
            passwordBsStyle: '',
        });
        e.preventDefault();

        let email = this.refs.email.getInputDOMNode().value.trim();
        let password = this.refs.password.getInputDOMNode().value.trim();
        this.onCommentSubmit({username: email, password: password});

        return
    }

    render (){
        return (
            <div className='container'>
                <form method='post' onSubmit= {this.handleSubmit}>
                    <Input type="email" bsStyle={this.state.emailBsStyle} ref = 'email' label="Email" placeholder="enter email" />
                    <Input type="password" bsStyle={this.state.passwordBsStyle} ref = 'password' label="Password" placeholder='enter password'/>
                    <ButtonInput type="submit" bsStyle="primary" value="submit" />
                </form>
            </div>
        )
    }
}

export default Login
