import styled from "styled-components";
import { Button } from "styles/Button.styles";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 420px;
  margin: auto;
  padding: 2.4rem;
  background: ${({ theme }) => theme.color.background};
  border-radius: 10px;

  ${Button} {
    margin: 1rem 0;
  }
  a {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.color.lead};
  color: ${({ theme }) => theme.text.primary};
  border: none;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  margin-top: 0.5rem;
  &:focus {
    outline: 0;
  }
`;
/* 
const handleMessageColor = (color) => {
  switch (color) {
    case "success":
      return "#008000";
    case "danger":
      return "#f56342";
    default:
      return "#fff";
  }
};

export const Message = styled.div`
  color: ${({ color }) => handleMessageColor(color)};
  padding: 1rem 0;
`;
 */

export const InputWrapper = styled.div`
  margin: 1rem 0;
`;

export const LinkWrapper = styled.div`
  text-align: center;
  span {
    color: var(--secondary-text);
  }
`;

export const Message = styled.p`
  color: #d03c34;
`;
