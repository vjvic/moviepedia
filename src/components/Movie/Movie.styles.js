import styled from "styled-components";

export const MovieWrapper = styled.div`
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
