import styled from "styled-components";

export const MovieContainer = styled.div`
  cursor: pointer;
  margin-right: 1rem;
  margin-top: 1rem;

  img {
    border-radius: ${({ theme }) => theme.borderRadius.primary};
    margin-bottom: 1rem;
  }
`;

export const Truncate = styled.h4`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImgWrapper = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.primary};

  img {
    transform-origin: 50% 50%;
    transition: transform 0.25s, visibility 1s ease-in;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
