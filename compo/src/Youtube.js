import React from 'react';
import './index.css';
import ReactPlayer from "react-player";

class Youtube extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      inputValue : "",
      url:""
    }
  }

  handleChange = (event)=>{
    this.setState({inputValue : event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({url: this.state.inputValue})
  }

  render(){
    return (
      <div className="Youtube">
        <header className="Youtube-header">
          <div>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} style={{margin:"20px"}} className="form-control" type="text" placeholder="Enter your url" />
                <button style={{margin:"20px"}} className="btn btn-primary">PLAY </button>
              </form>
            
          </div>
          <ReactPlayer url={this.state.url} controls={true} />
        </header>
      </div>
    );
  }
  
}

export default Youtube ;
