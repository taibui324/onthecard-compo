import React from 'react';
import './index.css';
import Preview2 from "./Preview2";
import ReactPlayer from "react-player";
import styled , { createGlobalStyle, css} from 'styled-components'; 


const GlobalStyle = createGlobalStyle`
html {
  height: 100%
}
body {
  font-family: Arial;
  background: lightblue;
  height: 100%;
  margin: 0;
  color: #555;
}
`;

const shareStyles = css`
  background-color: #eee;
  height: 40px; 
  border-radius:5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;



const StyledFormWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  position: relative;
  bottom : 650px;
  right: 160px;
  width: 100%;
  max-width: 400px;
  padding: 50px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${shareStyles}
`;



const StyledButton = styled.button`
display: block;
background-color: #246aed;
color: #fff;
font-size: 0.9rem;
border: 0;
border-radius: 5px;
height: 40px;
padding: 0 10px;
cursor: pointer;
box-sizing: border-box;
`;



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
    
      <div className="Form">
      <Preview2 />
        <StyledFormWrapper>
       <StyledForm onSubmit={this.handleSubmit}>
        <h2> Add Video Link  </h2>
       
          <div>
                <StyledInput onChange={this.handleChange} style={{margin:"20px"}} className="form-control" type="text" placeholder="Enter your url" />
                <StyledButton style={{margin:"20px"}} className="btn btn-primary">Save Embbeded Link </StyledButton>
             
          </div>
         
          </StyledForm>
       
        </StyledFormWrapper>
   
    
       <ReactPlayer className='react-player'
        width='38%'
        height='33%'
        controls={true}
        url={this.state.url} controls={true} />
       </div>
   
    );
  }
  
}

export default Youtube ;
