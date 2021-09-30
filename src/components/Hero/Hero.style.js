import styled from "styled-components";
import { Overlay } from "styles/Overlay";

export const HeroContainer = styled.section`
  height: 500px;
  width: 100%;
  margin-bottom: 5rem;

  img {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    height: 300px;

    img {
      height: 300px;
    }
  }
`;

export const MovieWrapper = styled.div`
  position: relative;
`;

export const MovieOverlay = styled(Overlay)`
  display: flex;
  align-items: center;
  padding: 1rem 5rem;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 2rem;
  }

  h2 {
    font-size: 2rem;

    @media ${({ theme }) => theme.breakpoints.md} {
      font-size: 1.5rem;
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
