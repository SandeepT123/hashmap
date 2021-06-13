import React, { Component } from 'react'
import axios from 'axios'
class Api extends Component {
    constructor() {
        super()
        this.state = {
            mydata: []
        }
    }

    one = () => {
        let url = `https://reqres.in/api/users?page=1`
        axios.get(url).then((response) => {
            console.log(response.data.data);
            this.setState({
                mydata: response.data.data 
            })

        })
    }

    componentDidMount() {
        this.one()
    }

    render(){
        return (
            <div className="container">
                {
                    this.state.mydata.map(user => {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="row my-3 shadow-lg">
                                            <div className="col-lg-4">
                                                <img src={user.avatar} />
                                            </div>
                                            <div className="col-lg-8 mt-4">
                                                <h4><b>Name : </b>{user.first_name}-{user.last_name}</h4>
                                                <p><b>Email-id : </b> {user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default Api;
