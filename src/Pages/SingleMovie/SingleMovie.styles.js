import styled from "styled-components";

export const SingleMovieContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5rem;
`;

export const ImgWrapper = styled.div`
  width: 400px;
  img {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const Runtime = styled.p`
  color: ${({ theme }) => theme.text.secondary};
`;

export const Overview = styled.div`
  h3 {
    padding: 1rem 0;
  }
`;

export const Genre = styled.ul`
  display: flex;
  grid-gap: 0.5rem;

  li {
    margin-top: 0.5rem;

    a {
      color: ${({ theme }) => theme.text.secondary};
      transition: ${({ theme }) => theme.transition.ease};

      &:hover {
        color: ${({ theme }) => theme.text.primary};
        text-decoration: underline;
      }
    }
  }
`;

export const Cast = styled.div`
  display: flex;
  grid-gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    object-position: center top;
  }
`;

export const CastOverlay = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: ${({ theme }) => theme.overlay};
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: ${({ theme }) => theme.transition.ease};
`;

export const CastWrapper = styled.div`
  position: relative;

  &:hover {
    ${CastOverlay} {
      opacity: 1;
    }
  }
`;
