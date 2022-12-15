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
  onChange,
  value = "",
  required = true,
  style = {},
  inputStyle = {},
  hasShowPasswordCheckBox = false,
  showPasswordCheckBoxStyle = { size: "35px", color: "#555555" },
  hasIcon = false,
  isFormInput = false,
  validationRegex,
}: {
  name?: string | undefined;
  placeholder?:
    | string
    | undefined
    | {
        from: number | string;
        to: number | string;
      };
  type?: string | undefined;
  onChange?: any;
  value?: string | undefined | number;
  required?: boolean | undefined;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  hasShowPasswordCheckBox?: boolean;
  showPasswordCheckBoxStyle?: { size: string; color: string };
  hasIcon?: boolean;
  isFormInput?: boolean;
  validationRegex?: any;
}) {
  const [isChecked, setIsChecked] = useState(false);
  const [isValidPattern, setIsValidPattern] = useState(true);

  const [valueIfUndefinedOnChange, setValueIfUndefinedOnChange] = useState("");
  if (onChange === undefined) {
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValueIfUndefinedOnChange(() => {
        return e.target.value;
      });
    };
  }

  useEffect(() => {
    if (!isFormInput) return;
    if (
      (value as string)?.match(validationRegex) ||
      (value as string)?.length === 0
    ) {
      setIsValidPattern(true);
    }
    else {
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

  !isValidPattern && (style = { ...style, border: "3px solid rgb(190, 0, 0)" });

  return (
    <Container style={style}>
      {hasIcon && <Icon>{icon}</Icon>}
      <Input
        style={inputStyle}
        required={required}
        name={name}
        type={type}
        value={
          valueIfUndefinedOnChange !== "" ? valueIfUndefinedOnChange : value
        }
        placeholder={placeholder as string}
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
  & {
    width: 100%;
    height: 60px;
    background: #ffffff;
    border-radius: 5px;
    margin: 10px 0px;
  }
`;

const Input = styled.input`
  & {
    font-style: normal;
    opacity: 0.9;
    padding: 10px;
    border: none;
    outline: none;
    text-align: center;
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
