import React from "react"
import Input from './input'


class Generator extends React.Component {
    constructor(){
        super()
        this.state ={
            username: "",
            description: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target)
    }


    render(){
        return(
            <div>
                <div className="new-form">
                    <div className ="top">
                    <input 
                        name="username"
                        placeholder= "Enter username"
                        value={this.state.username}
                        onChange= {this.handleChange}
                    />
                   
                    <input 
                        name="description"
                        placeholder= "Enter description"
                        value={this.state.description}
                        onChange= {this.handleChange}
                    />
                     </div>    
                </div>
                <div className="new">
                    <h2 className="username">{this.state.username}</h2>
                    <h2 className="description">{this.state.description}</h2>

                </div>
            </div>
        )
    }
}

export default Generator