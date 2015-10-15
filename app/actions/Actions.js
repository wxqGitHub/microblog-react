
import Dispatcher from '../dispatcher/Dispatcher'
import Constants from '../constants/Constants'

let TodoActions = {
    /**
     * @param  {string} text
     * @param  {string} message text
     */
    update_message: function(type, text){
        Dispatcher.dispatch({
            actionType: Constants.TODO_UPDATEMESSAGES,
            type: type,
            text: text
        });
    },

    destroy_message : function(){
        Dispatcher.dispatch({
            actionType: Constants.TODO_DESTROYMESSAGES
        })
    },

    update_user : function(name){
        Dispatcher.dispatch({
            actionType: Constants.TODO_UPDATEUSER,
            name: name
        })
    },

    destroy_user: function(){
        Dispatcher.dispatch({
            actionType: Constants.TODO_DESTROYMUSER
        })
    },

    transition: function(state){
        Dispatcher.dispatch({
            actionType: Constants.TRANSITION,
            router: state
        })
    }
}

export default TodoActions
