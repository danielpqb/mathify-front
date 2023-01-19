import InputBox, { InputBoxProps } from "components/common/Form/InputBox";
import SubmitButton from "components/common/Form/SubmitButton";
import styled from "styled-components";
import { Animation } from "../Animate/AnimationContext";

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
      {inputs.map((inputData, index) => {
        return (
          <Animation
            key={index}
            animateIn={{ name: "fadeInLeftBig", duration: 200 }}
          >
            <InputBox data={inputData} />
          </Animation>
        );
      })}

      <Animation animateIn={{ name: "slideInDown", duration: 200 }}>
        <SubmitButton
          disabled={isSubmitDisabled}
          style={{ height: "50px", width: "100%" }}
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

    margin: 0 !important;
  }
`;
