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
    onKeyUp=(event)=> {
        if (event.charCode === 13) {
          this.editVal()
        }
     
    }
    editVal=()=> {
        if(this.state.input==null||this.state.input=="")
        {
            alert("Please enter something")
        }
        else{
        if(!this.state.boxState)
        {
        this.props.editValue(this.props.myIndex,this.state.input)
        }
        this.setState({boxState:!this.state.boxState})
        }
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
            <input type="text" class="text"value={this.state.input} disabled={this.state.boxState} onKeyPress={this.onKeyUp} onChange={this.saveVal} />
            <button class="delete" onClick={this.delVal}>delete</button>
            <button class="edit"onClick={this.editVal}>{this.state.boxState?"edit":"save"}</button>
        </div>
    }
}
export default Todo