import React, { Component } from 'react';
class Todo extends Component{
    state ={
        items:[],
      text:""
    }

    one = (obj) =>{
        this.setState({
            text:obj.target.value
        })
    }

    two = () =>{
        if(this.state.text!==""){
          this.setState({
              items:this.state.items.concat(this.state.text),
              text:""
          })
        }
    }

    render(){
        return(
            <div className="container">
                <div className="row mt-3">
                    <div className="col-lg-6 mx-auto shadow-lg p-3">
                        <h1 className="text-center ">first</h1>
                        <div className="row">
                            <div className="col-lg-9">
                                <input type="text" className="form-control" value={this.state.text}
                                placeholder="Enter Your Plan"
                                onChange={this.one}/>
                            </div>
                            <div className="col-lg-2">
                                <button className="btn btn-warning px=5 font-weight-bold" onClick={this.two}>Add</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {
                                    this.state.items.map((xx , index)=>{
                                        return(
                                            <div className="row  py-2">
                                                <div className="col-lg-6 pl-5 offset-lg-3" id="list">
                                                    {index+1} - {xx}
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Todo;
