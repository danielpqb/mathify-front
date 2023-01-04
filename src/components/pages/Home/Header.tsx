import Button from "components/common/Dummy/Button";
import { useUserContext } from "contexts/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  const { userData, token } = useUserContext();
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();

  return (
    <Container>
      <LeftBox>
        <Photo
          src={userData?.photoUrl ? userData.photoUrl : "images/person.svg"}
          referrerPolicy="no-referrer"
          onClick={() => {
            if (userData) {
              setShowLogout((old) => !old);
            }
          }}
        ></Photo>
        {showLogout ? (
          <>
            <WaitClick
              onClick={() => {
                setShowLogout(() => false);
              }}
            />
            <Logout
              onClick={() => {
                localStorage.clear();
                location.reload();
              }}
            >
              Logout
            </Logout>
          </>
        ) : (
          <></>
        )}
        <Name>{userData?.name ? userData.name.split(" ")[0] : ""}</Name>
      </LeftBox>

      <RightBox>
        {!token && (
          <Login
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            Login
          </Login>
        )}
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
    height: fit-content;
    justify-self: flex-end;
    font-size: 16px;

    padding: 10px;

    border: 3px solid rgba(255, 255, 255, 0.7);
    border-radius: 10px;
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

const Logout = styled(Button)`
  && {
    position: absolute;
    background: rgb(90, 90, 90);

    width: fit-content;
    height: fit-content;
    min-height: initial;

    margin: 0px;
    padding: 3px 5px;
    bottom: -15px;
    left: 10px;

    border: 2px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;

    font-size: 14px;

    z-index: 2;
  }
`;

const WaitClick = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--doc-heigth);
    z-index: 1;
  }
`;
