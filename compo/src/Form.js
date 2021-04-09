import React , { useState}from 'react'; // call state later
import styled , { createGlobalStyle, css} from 'styled-components'; 
import Preview from './Preview';
import Thumbnail from './Thumbnail';

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


const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;

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


const StyledFieldset = styled.fieldset`

border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }

`;

const StyledError = styled.div`

color: red;
font-weight: 800;
margin: 0 0 40px 0;

`;


const initialState = {
  name: '',
  link: '',
  description: ''
};

const Form = () => {

    const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('input');
    console.log(state);

    for(let k in state ) {
      if(state[k] === ''){
        setError (`Provide your input ${k}`)
        return
      }
    }
    setError ('');
    console.log('Success');
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({...prev, [inputName]: value}));
  };


 
  
  return (
   <>
      <div className ="Form">
    <Preview />
   <GlobalStyle /> 
   <StyledFormWrapper>
     <StyledForm onSubmit= { handleSubmit}>

       <h2> Add Instagram User  </h2>
     
       <label htmlFor = "name"> Username</label>

       <StyledInput type = "text" name="name" value={state.name} onChange = {handleInput} />
  
       <label htmlFor = "link" > Link </label>

      <StyledInput type = "url" name= "link" value = {state.url} onChange = {handleInput} />

      <label htmlFor = "description"> Description (optional)</label>
     <StyledInput name="description" value = {state.description} onChange = { handleInput} /> 

     <label htmlFor = "description"> Image Thumbnail (size limit 10 MB)</label>
    <Thumbnail />
  
    

    
    
     {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
  
  
    
   
     </StyledForm>


   </StyledFormWrapper>
   </div>

  
   
   </>
  
 );
}


export default Form;