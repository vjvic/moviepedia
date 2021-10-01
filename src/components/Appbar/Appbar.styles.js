import styled from "styled-components";
import { BtnOutline, Button } from "styles/Button.styles";

export const AppbarContainer = styled.div`
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: ${({ theme }) => theme.color.lead};
  position: fixed;
  width: 100%;
  z-index: 5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  .spinner {
    width: 28px;
  }
`;

export const SearchWrapper = styled.div`
  margin: 1.5rem 0;
  width: 400px;
  position: relative;
  margin-left: 250px;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-left: 0;
    margin: 0.5rem;
  }
`;

export const SearchInput = styled.input`
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.round};
  padding: 6px 18px;
  color: inherit;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid #fff;
  }
`;

export const SearchBtn = styled.button`
  background: none;
  color: ${({ theme }) => theme.text.secondary};
  border: none;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const User = styled(BtnOutline)`
  display: flex;
  align-items: center;
  grid-gap: 0.5rem;
  margin-left: 0.5rem;

  &:hover {
    svg {
      transform: translateX(1px);
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 6px 12px;
    font-size: 12px;

    svg {
      width: 16px;
    }
  }
`;

export const Bars = styled(Button)`
  margin-right: 0.4rem;
  margin-top: 0.5rem;
  display: none;
  color: ${({ theme }) => theme.text.secondary};

  &:active {
    color: ${({ theme }) => theme.text.primary};
  }

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`;
