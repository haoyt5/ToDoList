import React from 'react'
import Todos from './todos'
import AddTodo from './addTodo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todos:[ ]
        }
        this.deleteTodo = (id) =>{
            console.log(id)
            const todos = this.state.todos.filter(todo=>{
                return todo.id !== id
            })
            this.setState({
                todos: todos
            })
        }
        this.addTodo = (todo) =>{
            todo.id =  Math.floor(Math.random()*1000);
            let todos = [...this.state.todos,todo]
            this.setState({
                todos
            })
        }
    }

    render() {
        console.log(this)
        return(

           <div className="to-do-app container">
            <h1 className="center blue-text">待辦事項</h1>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
           </div>

        );
    }
}

 export default App;