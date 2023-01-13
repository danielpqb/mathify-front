import Form from "components/common/Form/Form";
import { InputBoxProps } from "components/common/Form/InputBox";
import { regexErrors } from "constants/regex-errors";
import { useAppContext } from "contexts/AppContext";
import React, { useState } from "react";
import { Animation } from "react-animate-with-css";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "services/user-services";
import styled from "styled-components";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const { setAlert } = useAppContext();

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);

    try {
      await postSignUp(form);

      setAlert({
        show: true,
        message: "User created sucessfully!",
        flag: "green",
      });

      setIsSubmitDisabled(false);

      navigate("/game");
    }
    catch (error) {
      setAlert({
        show: true,
        message: "User creation failed!",
        flag: "red",
      });

      setIsSubmitDisabled(false);
      return;
    }
  }

  const inputs: InputBoxProps[] = [
    {
      name: "name",
      placeholder: "username",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, name: e.target.value });
      },
      value: form.name,
      hasIcon: true,
      regex: regexErrors.userName.pattern,
    },
    {
      name: "email",
      placeholder: "e-mail",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, email: e.target.value });
      },
      value: form.email,
      hasIcon: true,
      regex: regexErrors.userEmail.pattern,
      height: "60px",
    },
    {
      name: "password",
      type: "password",
      placeholder: "password",
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, password: e.target.value });
      },
      value: form.password,
      hasCheckBox: true,
      hasIcon: true,
      regex: regexErrors.userPassword.pattern,
      height: "60px",
    },
  ];

  return (
    <Container>
      <Animation animateIn={{ name: "fadeIn" }}>
        <Logo
          onClick={() => {
            navigate("/home");
          }}
        >
          <img
            src="images/logo.png"
            alt=""
          />
        </Logo>

        <Form
          inputs={inputs}
          handleSubmit={handleSubmit}
          isSubmitDisabled={isSubmitDisabled}
          submitButtonText={"Sign Up"}
        />

        <RedirectTo>
          <Link to={"/sign-in"}>Switch back to log in</Link>
        </RedirectTo>
      </Animation>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    width: calc(100vw - (100vw - 100%));
    height: 100vh;

    padding: 10px;

    font-weight: 700;
    font-size: 15px;
    color: #ffffff;
  }
`;

const RedirectTo = styled.div`
  & {
    height: fit-content;
    padding: 20px 0px;
  }
  a {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    text-decoration-line: underline;
  }
`;

const Logo = styled.div`
  & {
    max-width: 28vh;
    max-height: 28vh;

    padding-bottom: 25px;

    @media (orientation: landscape) and (max-height: 600px) {
      display: none;
    }
  }
  &:hover {
    cursor: pointer;
  }
  img {
    object-fit: contain;
  }
`;
