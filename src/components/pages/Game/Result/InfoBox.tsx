import styled from "styled-components";

export default function InfoBox({ header, value }: { header: any; value: any }) {
  let style;

  return (
    <Container style={style}>
      <Header>{header}</Header>
      <Value>{value}</Value>
    </Container>
  );
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    font-size: calc(var(--fontsize) - 10px);

    border-radius: 10px;

    border: 2px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    justify-self: center;

    width: fit-content;
    height: fit-content;

    flex-direction: column;

    overflow: hidden;
  }
`;

const Header = styled.div`
  & {
    padding: 5px 10px;

    font-size: calc(var(--fontsize) - 7px);

    background: var(--result-infobox-header-color);
  }
`;

const Value = styled.div`
  & {
    padding: 5px 10px;

    font-size: calc(var(--fontsize) - 5px);

    background: var(--result-infobox-value-color);
  }
`;
