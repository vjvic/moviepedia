import React, { useState } from "react";
import {
  FormContainer,
  Form,
  Input,
  InputWrapper,
  Message,
} from "./Forms.styles";
import { Button } from "styles/Button.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleSignupForm } from "redux/actions/uiAction";
import { login } from "redux/actions/authAction";
import { arrangeText } from "utils/utils";
import { motion } from "framer-motion";

const Login = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) dispatch(login(email, password));

    setEmail("");
    setPassword("");
  };

  return (
    <FormContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Login</h2>

      {error && <Message>{arrangeText(error)}</Message>}

      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label className="my-1">Email</label>
          <Input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputWrapper>

        <InputWrapper>
          <label>Password</label>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>

        <Button color="primary" width="fullWidth" size="md">
          login
        </Button>
      </Form>

      <div>
        <span>Dont have an account?</span>{" "}
        <Button onClick={() => dispatch(toggleSignupForm())}>Signup</Button>
      </div>
    </FormContainer>
  );
};

export default Login;
