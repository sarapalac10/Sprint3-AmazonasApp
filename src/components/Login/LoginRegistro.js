import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FormStyled, LoginContainerStyled } from "../../style/Login";
import { loginEmailPassword, loginFacebook, loginGoogle } from "../../redux/actions/actionLogin";


const LoginRegistro = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    }, 
    validationSchema: Yup.object({
      email: Yup.string().required(),
      password: Yup.string().required('Error')
    }),
    onSubmit:({email, password}) => {
      dispatch(loginEmailPassword(email, password))
    }
    
  })

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   dispatch(loginEmailPassword(email, password));
  // };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          autoComplete="true"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>

      <LoginContainerStyled className="auth__social-networks">
        <Container className="google-btn" onClick={() => handleGoogle()}>
          <Container className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </Container>
        </Container>
        <Container className="facebook-btn" onClick={() => handleFacebook()}>
          <Container className="facebook-icon-wrapper">
            <img
              className="facebook-icon"
              src="https://res.cloudinary.com/davidcharif/image/upload/v1647260118/sprint3-proyecto/2021_Facebook_icon.svg_mrabec.png"
              alt="facebook button"
            />
          </Container>
        </Container>
      </LoginContainerStyled>
      <Link to="/registro">Registrarse</Link>
    </FormStyled>
  );
};

export default LoginRegistro;
