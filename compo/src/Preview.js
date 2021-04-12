import React, { Component } from 'react';
import './App.css';

export class Preview extends Component{
    
    state ={
        profileImg:'https://st3.depositphotos.com/4111759/13425/v/600/depositphotos_134255634-stock-illustration-avatar-icon-male-profile-gray.jpg'
    }
    imageHandler = (e) => {
        const reader = new FileReader(); //reader = new FileReader
        reader.onload = () => {
            if(reader.readyState === 2){
                this.setState({profileImg: reader.result})
              }
            }
            reader.readAsDataURL(e.target.files[0])
          };

          render() {
            const { profileImg} = this.state
                return (
                    <div className="page">
                        <div className="container">
                            <h1 className="heading">Preview</h1>
			 <div class= "circle">
                            <div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
			 </div>
                    </div>   
                
                        </div>
                    </div>
                );
            }
        }        

export default Preview;
