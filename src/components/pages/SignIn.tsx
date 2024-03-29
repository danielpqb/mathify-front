import Form from "components/common/Form/Form";
import { InputBoxProps } from "components/common/Form/InputBox";
import { useAppContext } from "contexts/AppContext";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignIn } from "services/user-services";
import styled from "styled-components";
import GoogleButton from "react-google-button";
import { useUserContext } from "contexts/UserContext";
import { regexErrors } from "constants/regex-errors";
import { Animation } from "react-animate-with-css";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { getTokenWithGoogleOAuth } = useUserContext();

  const navigate = useNavigate();

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const { setAlert } = useAppContext();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }
    setIsSubmitDisabled(true);

    const promise = postSignIn(form);
    promise.then((res) => {
      localStorage.setItem("userToken", res.data.token);

      setAlert({
        show: true,
        message: "You have loged in!",
        flag: "green",
      });

      setIsSubmitDisabled(false);

      navigate("/game");
    });
  }

  const inputs: InputBoxProps[] = [
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
          submitButtonText={"Sign In"}
        />

        <RedirectTo>
          <Link to={"/sign-up"}>First time? Create an account!</Link>
        </RedirectTo>

        <OAuthButtons style={{ transform: "scale(1.15)" }}>
          <Animation
            animateIn={{
              name: "heartBeat",
              delay: 1000,
              repeat: 2,
            }}
          >
            <GoogleButton
              onClick={async () => {
                await getTokenWithGoogleOAuth();
                navigate("/home");
              }}
            ></GoogleButton>
          </Animation>
        </OAuthButtons>
      </Animation>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    width: calc(100vw - (100vw - 100%));
    min-height: 100vh;

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

const OAuthButtons = styled.div`
  & {
    padding: 5px 0px;
    height: fit-content;
  }

  * {
    font-size: 15px;
  }
`;
