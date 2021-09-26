import styled from "styled-components";
import { Overlay } from "styles/Overlay";

export const HeroWrapper = styled.section`
  /*   background: url("https://image.tmdb.org/t/p/original/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg")
    no-repeat center center / cover;
  border-radius: 10px; */
  height: 400px;
  width: 100%;
  margin-bottom: 5rem;

  img {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

export const MovieWrapper = styled.div`
  position: relative;
`;

export const MovieOverlay = styled(Overlay)`
  display: flex;
  align-items: center;

  div {
    margin-left: 6rem;
    h2 {
      font-size: 2rem;
    }
  }
`;

export const ReleaseDate = styled.p`
  color: rgba(255, 255, 255, 0.9);
  padding-bottom: 1rem;
`;

export const HeroTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.8rem;
`;
