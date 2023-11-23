import styled from "styled-components";

export const Routes = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;
`;

export const ContainerLinks = styled.div<{
  $isOpen: boolean;
  $height?: number;
}>`
  display: flex;
  flex-direction: column;

  height: ${({ $isOpen, $height }) => ($isOpen ? $height : 0)}px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.2);

  transition: height 0.6s ease-in-out;
`;

export const Title = styled.div<{ $isSelected: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 16px;

  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  padding: 12px 20px;
  min-width: 240px;
  user-select: none;

  transition: background-color 0.2s ease-out;

  background-color: ${({ $isSelected }) =>
    $isSelected ? "rgba(255, 255, 255, 0.3)" : "transparent"};
  color: white;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.1)"};
  }
`;

export const Arrow = styled.div<{
  $isSelected: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  transform: ${({ $isSelected }) =>
    $isSelected ? "rotate(360deg)" : "rotate(0deg)"};

  transition: transform 0.3s ease-in-out;
`;
