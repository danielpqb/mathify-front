import styled from "styled-components";
import * as ionicons from "react-icons/io5";

export default function IonIcon({
  name,
  style,
  divStyle,
}: {
  name: string;
  style?: React.CSSProperties;
  divStyle?: React.CSSProperties;
}) {
  const convertName = () => {
    const array = name.split("-");
    const newName = array
      .map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
      })
      .join("");

    return "Io" + newName;
  };

  const DynamicIcon = ionicons[convertName() as keyof typeof ionicons];

  return (
    <Container style={divStyle}>
      <Icon style={style}>
        <DynamicIcon />
      </Icon>
    </Container>
  );
}

const Container = styled.div``;

const Icon = styled.div`
  * {
    font-size: 20px;
    color: rgb(125, 125, 125);

    ${({ style }) => style as string}
  }
`;
