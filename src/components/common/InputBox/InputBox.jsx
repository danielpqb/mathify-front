import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MdImage, MdOutlineEmail, MdPerson } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { IoKeyOutline } from "react-icons/io5";
import { IoMdAlert } from "react-icons/io";

import ShowPasswordCheckBox from "./ShowPasswordCheckBox";

export default function InputBox({
  name = "InputBoxName",
  placeholder = "InputBoxPlaceholder",
  type = "text",
  onChange = () => {},
  value = "",
  required = true,
  style = {},
  hasShowPasswordCheckBox = false,
  showPasswordCheckBoxStyle = { size: "35px", color: "#555555" },
  hasIcon = false,
  isFormInput = false,
  validationRegex,
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [isValidPattern, setIsValidPattern] = useState(true);

  useEffect(() => {
    if (!isFormInput) return;
    if (value?.match(validationRegex) || value?.length === 0) {
      setIsValidPattern(true);
    } else {
      setIsValidPattern(false);
    }
  }, [value, validationRegex, isFormInput]);

  let icon;
  if (hasIcon) {
    switch (name) {
      case "name":
        icon = <MdPerson />;
        break;
      case "email":
        icon = <MdOutlineEmail />;
        break;
      case "password":
        icon = <IoKeyOutline />;
        break;
      case "imageUrl":
        icon = <MdImage />;
        break;
      default:
        icon = <AiOutlineFileText />;
        break;
    }
  }

  type = type === "password" && isChecked ? "text" : type;

  const defaultStyle = {
    width: "100%",
    height: "60px",
    background: "#ffffff",
    borderRadius: "5px",
    margin: "10px 0px",
  };
  for (let key in defaultStyle) {
    if (style[key] === undefined) {
      style[key] = defaultStyle[key];
    }
  }

  !isValidPattern && (style = { ...style, border: "3px solid rgb(190, 0, 0)" });

  return (
    <Container style={style}>
      {hasIcon && <Icon>{icon}</Icon>}
      <input
        required={required}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
        }}
      />
      {hasShowPasswordCheckBox && (
        <ShowPassword>
          <ShowPasswordCheckBox
            size={showPasswordCheckBoxStyle.size}
            color={showPasswordCheckBoxStyle.color}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
          />
          <div>Show</div>
        </ShowPassword>
      )}
      {!isValidPattern && (
        <Icon>
          <IoMdAlert />
        </Icon>
      )}
    </Container>
  );
}

const Container = styled.div.attrs(({ style }) => style)`
  input {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    color: #6d6d6d;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
  input::placeholder {
    color: #afafaf;
  }
`;

const ShowPassword = styled.div`
  & {
    flex-direction: column;
  }
  div:nth-child(2) {
    color: #9f9f9f;
    font-size: 12px;
  }
`;

const Icon = styled.div`
  & {
    color: rgb(190, 0, 0);
    font-size: 30px;
    margin: 0px 5px;
  }
`;
