import styled from "styled-components";
import { BtnOutline } from "styles/Button.styles";

export const DetailsBtnWrapper = styled.div`
  display: flex;
  grid-gap: 1rem;
  margin: 1.5rem 0;
  flex-wrap: wrap;

  ${BtnOutline} {
    display: flex;
    align-items: center;
    grid-gap: 1rem;

    img {
      width: 1rem;
    }
  }
`;
