import { useUserContext } from "contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const { userData } = useUserContext();

  const navigate = useNavigate();

  return (
    <Container>
      <LeftBox>
        <Photo
          src={userData ? userData?.photoUrl : "images/person.svg"}
          referrerPolicy="no-referrer"
        ></Photo>
        <Name>{userData ? userData?.name.split(" ")[0] : ""}</Name>
      </LeftBox>

      <RightBox>
        <Login
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Login
        </Login>
      </RightBox>
    </Container>
  );
}

const Container = styled.div`
  & {
    position: fixed;
    top: 0px;
    height: 80px;

    padding: 0px 15px;

    justify-content: flex-start;
  }
`;

const Photo = styled.img`
  & {
    width: 50px;
    height: 50px;

    box-shadow: 0px 0px 5px 1px white;
    border-radius: 50%;

    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const Name = styled.div`
  & {
    width: fit-content;
    font-size: 18px;
  }
`;

const Login = styled.div`
  & {
    width: fit-content;
    justify-self: flex-end;
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const LeftBox = styled.div`
  & {
    justify-content: flex-start;
    gap: 10px;
  }
`;

const RightBox = styled.div`
  & {
    justify-content: flex-end;
    gap: 10px;
  }
`;
