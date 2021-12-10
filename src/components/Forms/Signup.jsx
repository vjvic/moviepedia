import React from "react";
import {
  FormContainer,
  Form,
  Input,
  InputWrapper,
  Message,
} from "./Forms.styles";
import { Button } from "styles/Button.styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginForm } from "redux/actions/uiAction";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup } from "redux/actions/authAction";
import { arrangeText } from "utils/utils";
import { motion } from "framer-motion";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    dispatch(signup(data.email, data.password, data.username));
    e.target.reset();
  };

  return (
    <FormContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Signup</h2>

      {error && <Message>{arrangeText(error)}</Message>}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label>Email</label>
          <Input {...register("email")} placeholder="Enter email" />
          <Message>{errors?.email?.message}</Message>
        </InputWrapper>

        <InputWrapper>
          <label>Username</label>
          <Input
            type="text"
            placeholder="Enter username"
            {...register("username")}
          />
          <Message>{errors?.username?.message}</Message>
        </InputWrapper>

        <InputWrapper>
          <label>Password</label>
          <Input
            type="password"
            placeholder="Enter password"
            {...register("password")}
          />
          <Message>{errors?.password?.message}</Message>
        </InputWrapper>

        <InputWrapper>
          <label>Confirm password</label>
          <Input
            type="password"
            placeholder="Confrim password"
            {...register("confirmPassword")}
          />
          <Message>{errors?.confirmPassword?.message}</Message>
        </InputWrapper>

        <Button type="submit" color="primary" width="fullWidth" size="md">
          Signup
        </Button>
      </Form>

      <div>
        <span> Already have an account?</span>{" "}
        <Button onClick={() => dispatch(toggleLoginForm())}>Login</Button>
      </div>
    </FormContainer>
  );
};

export default Signup;
