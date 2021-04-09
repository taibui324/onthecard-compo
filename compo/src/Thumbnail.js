import React, { Component } from 'react';
import './thumbnail.css';


export class Thumbnail extends Component {
  state={
    profileImg1:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        this.setState({profileImg1: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg1} = this.state
		return (
      <div className = "page1">
					<div className="img-holder1">
						<img src={profileImg1} alt="" id="img1" className="img1" />
					</div>
					<input type="file1" accept="image/*" name="image-upload1" id="input" onChange={this.imageHandler} />
					<div className="label1">
          <label className="image-upload1" htmlFor="input">
						<i className="material-icons"></i>
						Upload
					</label>
          </div>
          </div>
				
		);
	}
}

export default Thumbnail ;