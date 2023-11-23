import styled from "styled-components";
import { Header } from "./components/Header";

export function App() {
  return (
    <Template>
      <Header />
      <Content />
    </Template>
  );
}

const Template = styled.div`
  display: grid;
  grid-template-areas: "header" "content";
  grid-template-rows: auto 1fr;

  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  grid-area: content;

  width: 100%;
  height: 100%;

  background-color: white;
`;
