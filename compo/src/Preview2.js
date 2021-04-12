import React, { Component } from 'react';
import ReactPlayer from "react-player";
import Youtube from "./Youtube";

export class Preview2 extends React.Component{
    
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

          render() {
           <Youtube />
              return (
                 
                    <div className="page">
                        <div className="container">
                            <h1 className="heading">Preview</h1>
                            <div className="img-holder" onSubmit={this.handleSubmit}>
                        
					</div>

                
                    </div>
                    </div>
                );
            }
        }        

export default Preview2;