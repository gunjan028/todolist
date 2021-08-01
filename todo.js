import React,{ Component } from 'react';
class Todo extends Component{
    state={
        boxState:true,
        input:""
    }
    delVal=()=> {
        if (this.state.boxState)
        {
        this.props.delValue( this.props.myIndex)
        }
        else{
        this.setState({input:this.props.myValue})
        }
    }
    editVal=()=> {
        if(!this.state.boxState)
        {
        this.props.editValue(this.props.myIndex,this.state.input)
        }
        this.setState({boxState:!this.state.boxState})
    }
    saveVal=(event)=> {
        this.setState({input:event.target.value})
    }
    componentDidMount() {
        this.setState({input:this.props.myValue})
    }
    componentDidUpdate(prevProps,prevState) {
        if(prevProps.myValue!=this.props.myValue){
            this.setState({input:this.props.myValue})
        }
    }   
    render() {
       
       
        return <div>
           
            <input type="text" value={this.state.input} disabled={this.state.boxState} onChange={this.saveVal} />
            <button onClick={this.delVal}>delete</button>
            <button onClick={this.editVal}>{this.state.boxState?"edit":"save"}</button>
        </div>
    }
}
export default Todo