import styled from "styled-components";

const handleBgColor = (color) => {
  const primary = "#DA0037";
  const secondary = "#37da00";

  switch (color) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;
    default:
      return "none";
  }
};

const handleSize = (size) => {
  switch (size) {
    case "sm":
      return "6px 26px";
    case "md":
      return "12px 28px";
    case "lg":
      return "16px 28px";
    default:
      return "none";
  }
};

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: ${({ size }) => handleSize(size)};
  background: ${({ color }) => handleBgColor(color)};
  color: ${({ theme }) => theme.text.primary};
  width: ${({ width }) => (width === "fullWidth" ? "100%" : null)};
`;

export const BtnOutline = styled(Button)`
  color: inherit;
  background: none;
  border: 1px solid ${({ theme }) => theme.text.primary};
  border-radius: ${({ round }) => (round ? "1000px" : null)};
  transition: ${({ theme }) => theme.transition.ease};

  &:hover {
    background: ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.color.background};
  }

  &:disabled {
    background: none;
    color: inherit;
  }
`;
