import styled from "styled-components";
import { Card } from "styles/Card";
import { Button } from "styles/Button.styles";

export const ItemWrapper = styled.div`
  img {
    cursor: pointer;
    border-radius: 10px 10px 0 0;
  }

  ${Card} {
    border-radius: 0 0 10px 10px;

    a {
      &:hover {
        text-decoration: underline;
      }
    }

    small {
      color: ${({ theme }) => theme.text.secondary};
    }

    ${Button} {
      display: flex;
      align-items: center;
      grid-gap: 0.2rem;
    }
  }
`;
