import { useEffect, useState } from "react";
import styled from "styled-components";

import { MdImage, MdOutlineEmail, MdPerson } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";
import { IoMdAlert } from "react-icons/io";

import CheckBox from "./CheckBox";

export type InputBoxProps = {
  name: string;
  placeholder: string;
  type?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  height?: string;
  hasCheckBox?: boolean;
  hasIcon?: boolean | JSX.Element;
  regex?: RegExp;
};
export default function InputBox({
  data: {
    name,
    placeholder,
    type,
    onChange,
    value,
    height = "60px",
    hasCheckBox,
    hasIcon,
    regex,
  },
}: {
  data: InputBoxProps;
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [isValidPattern, setIsValidPattern] = useState(true);

  useEffect(() => {
    if (value?.match(regex as RegExp) || value?.length === 0) {
      setIsValidPattern(true);
    }
    else {
      setIsValidPattern(false);
    }
  }, [value, regex]);

  if (hasIcon) {
    switch (name) {
    case "name":
      hasIcon = <MdPerson />;
      break;
    case "email":
      hasIcon = <MdOutlineEmail />;
      break;
    case "password":
      hasIcon = <IoKeyOutline />;
      break;
    case "imageUrl":
      hasIcon = <MdImage />;
      break;
    default:
      hasIcon = <AiOutlineFileText />;
      break;
    }
  }

  type = type === "password" && isChecked ? "text" : type;

  return (
    <Container
      style={{
        height,
        border: isValidPattern ? "none" : "3px solid rgb(190, 0, 0)",
      }}
    >
      {hasIcon && <ShowIcon>{hasIcon}</ShowIcon>}
      <input
        required
        name={name}
        type={type ? type : "text"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {!isValidPattern && (
        <ShowIcon color={"rgb(190, 0, 0)"}>
          <IoMdAlert />
        </ShowIcon>
      )}
      {hasCheckBox && (
        <ShowPassword>
          <CheckBox
            size={"35px"}
            color={"#555555"}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <div>Show</div>
        </ShowPassword>
      )}
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: row;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    margin: 10px 0px;
    padding: 5px 10px;
  }
  input {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #6d6d6d;
    border: none;
    outline: none;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 0px 10px;
  }
  input::placeholder {
    color: #afafaf;
  }
`;

const ShowPassword = styled.div`
  & {
    flex-direction: column;
    width: fit-content;
  }

  div:nth-child(2) {
    color: #9f9f9f;
    font-size: 12px;
  }
`;

const ShowIcon = styled.div`
  & {
    width: fit-content;
  }

  * {
    color: ${({ color }) => (color ? color : "rgb(70, 70, 70)")};
    font-size: 30px;
  }
`;
