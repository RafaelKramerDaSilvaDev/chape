import styled from "styled-components";

export const Link = styled.a`
  font-size: 14px;

  color: white;
  text-decoration: none;
  padding: 8px 20px;

  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
