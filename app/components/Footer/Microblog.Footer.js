

import React from 'react'

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render (){

        console.log(this.props.allTodos)
        return (
            <div className='container'>
                <footer className= 'Footer'>
                    i am Footer!
                </footer>
            </div>
        )
    }

}

export default Footer
