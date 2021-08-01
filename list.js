import React,{ Component } from 'react';
import Todo from './todo.js';
class List extends Component{

    state={
        input:"",
        todoList:[]
    }
    changeVal=(event)=> {
            
        this.setState({input:event.target.value})
    }
    onKeyUp=(event)=> {
        if (event.charCode === 13) {
          this.addTodo()
        }
    }
    addTodo=()=>{
        this.setState({
            input:"",
            todoList: [...this.state.todoList,this.state.input]
        })
    }
    delItem=(index)=>{
        let myList=[...this.state.todoList]
        myList.splice(index,1)
        this.setState({
            todoList:myList
        })

    }
    saveItem=(index,input)=>{
        let mySavVal=[...this.state.todoList]
        mySavVal.splice(index,1,input)
        this.setState({
            todoList:mySavVal
        })
    }
    render() {
        
        return (
            <div>
                <div>
                  <input type="text" value={this.state.input}  onChange={this.changeVal} onKeyPress={this.onKeyUp} placeholder="what do you want to do?"/>
                  <button onClick={this.addTodo}>+</button>
               </div>
               <div>
                    {  
                    this.state.todoList.map((item,index)=>{
                    return <Todo myValue={item} delValue={this.delItem} myIndex={index} editValue={this.saveItem}/>
                    })}  
                        
               </div>
           </div>
        )
    }
}
export default List