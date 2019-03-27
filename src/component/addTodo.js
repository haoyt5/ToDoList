import React from 'react'

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:''
        }
        this.handleChange = (e) =>{
            this.setState({
                content:e.target.value
            })

        }
        this.handleSubmit = (e) =>{
            e.preventDefault();
            console.log(this.state);
            this.props.addTodo(this.state)
            this.setState ({
                content: ''
            })
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>新增代辦事項</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;