import styled from "styled-components";

export const Button = styled.button``;

export const BtnOutline = styled.button`
  cursor: pointer;
  background: none;
  border: 1px solid ${({ theme }) => theme.text.primary};
  border-radius: 5px;
  color: inherit;
  padding: 6px 18px;

  &:hover {
    background: ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.color.background};
  }
`;
