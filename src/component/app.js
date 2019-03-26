import React from 'react'
import Todos from './todos.js'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[
                {id:1, content:'買牛奶'},
                {id:2, content:'慢跑'}
            ]
    }

    }
    render(){
        return(
           <div className="to-do-app container">
            <h1 className="center blue-text">待辦事項</h1>
            <Todos todos={this.state.todos}/>
           </div>
        );
    }
}

 export default App;