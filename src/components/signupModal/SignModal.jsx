import { useContext } from 'react'
import styled from 'styled-components'
import { UserContext } from '../../context/userContext'
import { Button, InputAdornment, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { UserSchema } from './UserSchema'
import { keyframes } from 'styled-components';

const Parent = styled.div`
position: absolute;
top: 0px;
display: flex;
height: 100vh;
width: 100vw;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeUp = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Background = styled.div`
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.9);
  animation: ${fadeIn} 2s ease-in-out;
`;

const Modal = styled.div`
  display: flex;
  min-height: 70vh;
  min-width: 45vw;
  border-radius: 10px;
  border: 2px solid #ffffff;
  background-image: url('https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60');
  object-fit: cover;
  animation: ${fadeUp} 0.5s ease-in-out 0.5s;
`;

const Divider = styled.div`
min-width: 20%;
`
const Form = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 80%;
display: flex;
flex-wrap: nowrap;
`
const Title = styled.div`
display: flex;
justify-content: center;
width: 100%;
margin: 20px 0px;
& h1{
    color: #ffd700;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
}
`

const TextFields = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 80%;
height: 100%;
& input {
    color: white;
    padding: 5px;
    width: 100%;
 }
`
const GoButton = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 20%;
& button{
  display: flex;
  justify-self: center;
  padding: 10px 16px;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  width: 120px;
  height: 50px;
  text-decoration: none;
  color: #000000;
  background-color: #ffd700; 
  border: 2px solid #000000;
  border-radius: 4px;
  transition: background-color 0.3s ease, font-size 0.3s ease, border 0.1s ease;
  cursor: pointer;
  
  &:hover {
font-size: 16px;
      border: 2.5px solid #000000;
      background-color: #ffd700; 
  }
}
`

export default function SignModal({showSignup}) {
    const { user, setUser } = useContext(UserContext);
    const initialValues = {
      name: '',
      email: '',
      contact: '',
    };
    const { values, errors, touched, handleBlur, handleChange, handleSubmit, resetForm } = useFormik({
      initialValues: initialValues,
      validationSchema: UserSchema,
      onSubmit: () => {
        setUser((prevUser) => ({ ...prevUser, ...values }));
        showSignup(false)
        resetForm();
      },
    });
// console.log(user);
return (
    <Parent>
      <Background>
        <Modal>
          <Divider></Divider>
          <Form>
            <Title>
              <h1>Your Gateway to Style and Elegance</h1>
            </Title>
            <TextFields>
              <TextField
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                size='normal'
                focused
                autoComplete="off"
                required
                id="standard-basic"
                label="Full Name"
                type="text"
                variant="standard"
                helperText={touched.name && errors.name ? errors.name : null}
              />
              <TextField
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size='normal'
                focused
                autoComplete="off"
                required
                id="standard-basic"
                label="Email"
                type="text"
                variant="standard"
                helperText={touched.email && errors.email ? errors.email : null}
              />
              <TextField
                name="contact"
                value={values.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                size='normal'
                focused
                autoComplete="off"
                required
                id="standard-basic"
                label="Contact"
                type="text"
                variant="standard"
                helperText={touched.contact && errors.contact ? errors.contact : null}
                InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ color: '#ffd700' }}> (+92) </InputAdornment>
              ),
            }} 
                //white closing tags are because of InputProps
              />
            </TextFields>
            <GoButton>
              <Button onClick={handleSubmit} variant='contained'>Sign Up</Button>
            </GoButton>
          </Form>
        </Modal>
      </Background>
    </Parent>
  );
  
}
