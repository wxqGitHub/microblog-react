
import React from 'react';
import { Input, ButtonInput } from 'react-bootstrap';
import TodoActions from '../../actions/Actions'

class Regist extends React.Component{

    constructor (props){
        super(props);
        this.state = {
            emailBsStyle : '',
            passwordBsStyle: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onCommentSubmit (data){

        $.ajax({
            url: '/reg',
            type: 'POST',
            data: data,
            success: function(data) {
                if(data.code === 0){
                    TodoActions.update_message(data.state, data.messages+ '   2s后自动跳转....');
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
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(status, err.toString());
            }.bind(this)
        });
    }

    handleSubmit (e){
        this.setState({
            emailBsStyle: '',
            passwordBsStyle: '',
        });

        e.preventDefault();
        let email = this.refs.email.getInputDOMNode().value.trim();
        let password = this.refs.password.getInputDOMNode().value.trim();
        let reppassword = this.refs.reppassword.getInputDOMNode().value.trim();
        if (!email || !password || !reppassword) {

          return;
        }
        this.onCommentSubmit({username: email, password: password, passwordrepeat: reppassword});
        return;
    }

    render (){

        return (
            <div className='container'>
                <div className='container'>
                    <form onSubmit={this.handleSubmit}>
                        <Input type="email" bsStyle={this.state.emailBsStyle} ref="email" name='username' label="Email" placeholder="enter email" />
                        <Input type="password" bsStyle={this.state.passwordBsStyle} ref="password" name= 'password' label="Password" placeholder='enter password'/>
                        <Input type="password" bsStyle={this.state.passwordBsStyle} ref="reppassword" name = 'password-repeat' label="repeat-Password" placeholder='repeat password'/>
                        <ButtonInput type="submit" bsStyle="primary" value="submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Regist
