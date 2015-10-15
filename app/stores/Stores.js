
import Dispatcher from '../dispatcher/Dispatcher'
import Constants from '../constants/Constants'
import assign from 'object-assign'
let EventEmitter = require('events').EventEmitter;

let CHANGE_EVENT = 'change';

let _todos = {
    message : {
        type: null,
        text: null
    },
    user : {
        name: fetch_session()
    },
}

function fetch_session(){
    var name = $('input[name=session]').val();
    console.log(name)
    if(name){
        return name;
    }else{
        return null;
    }
}

function update_message(type, text){
    [ _todos.message.type, _todos.message.text ]  = [type, text];
}

function destroy_message() {
    [ _todos.message.type, _todos.message.text ]  = [null, null];
}

function update_user (name){
    console.log(name);
    [ _todos.user.name ]  = [name];
}

function destroy_user (){
    [ _todos.user.name ]  = [null];
}

function update_router(state){
    _todos.router  = state;
}

let TodoStore = assign({}, EventEmitter.prototype, {
    get_all: function(){
        return _todos;
    },

    emitChange: function (){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }
})

Dispatcher.register((action) => {

    switch (action.actionType) {
        case Constants.TRANSITION:
            update_router(action.router);
            TodoStore.emitChange();
            break;

        case Constants.TODO_UPDATEMESSAGES:
            update_message(action.type, action.text.trim());
            TodoStore.emitChange();
            break;

        case Constants.TODO_DESTROYMESSAGES:
            destroy_message();
            TodoStore.emitChange();
            break;

        case Constants.TODO_UPDATEUSER:
            update_user(action.name);
            TodoStore.emitChange();
            break;

        case Constants.TODO_DESTROYMUSER:
            destroy_user();
            TodoStore.emitChange();
            break;



        default:
    }
});

export default TodoStore
