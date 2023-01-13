import InputBox, { InputBoxProps } from "components/common/Form/InputBox";
import SubmitButton from "components/common/Form/SubmitButton";
import { Animation } from "react-animate-with-css";
import styled from "styled-components";

export default function Form({
  inputs,
  handleSubmit,
  isSubmitDisabled,
  submitButtonText,
}: {
  inputs: InputBoxProps[];
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  isSubmitDisabled: boolean;
  submitButtonText: string;
}) {
  return (
    <Container
      action=""
      onSubmit={handleSubmit}
    >
      <Animation animateIn={{ name: "slideInLeft", duration: 70 }}>
        {inputs.map((inputData, index) => {
          return (
            <InputBox
              key={index}
              data={inputData}
            />
          );
        })}

        <SubmitButton
          disabled={isSubmitDisabled}
          style={{ height: "50px" }}
        >
          {submitButtonText}{" "}
        </SubmitButton>
      </Animation>
    </Container>
  );
}

const Container = styled.form`
  & {
    flex-direction: column;

    width: 100%;
    max-width: 500px;
    text-align: center;
  }

  & > * {
    margin: auto;
  }
`;
