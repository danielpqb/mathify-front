import { BiCheckbox, BiCheckboxSquare } from "react-icons/bi";
import styled from "styled-components";

export default function CheckBox({
  size,
  color,
  isChecked,
  setIsChecked,
}: {
  size: string;
  color: string;
  isChecked: boolean;
  setIsChecked: any;
}) {
  color = color ? color : "rgb(70, 70, 70)";

  return (
    <Container
      onClick={() => {
        setIsChecked(!isChecked);
      }}
      color={color}
    >
      {isChecked ? <BiCheckboxSquare size={size} /> : <BiCheckbox size={size} />}
    </Container>
  );
}

const Container = styled.div`
  * {
    display: flex;

    color: ${({ color }) => (color ? color : "rgb(70, 70, 70)")};
  }
`;
