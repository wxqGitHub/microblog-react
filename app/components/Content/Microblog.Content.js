



import React from 'react'
import {Jumbotron, Button, row} from 'react-bootstrap'

class Content extends React.Component{
    constructor(){
        super();
    }
    render (){
        var row = [1,2,3].map(function(item){
            return (
                <div className='col-md-4'>
                    <h2>Heading</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a class="btn btn-default" href="#" role="button">View details »</a></p>
                </div>
            )
        })

        return (
            <div>
                <Jumbotron>
                    <div className='container'>
                        <h1>Hello, world!</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p><Button bsStyle="primary">Learn more</Button></p>
                    </div>
                </Jumbotron>
                <div className='container'>
                    <row>
                        {row}
                    </row>
                </div>
            </div>
        )
    }

}

export default Content
