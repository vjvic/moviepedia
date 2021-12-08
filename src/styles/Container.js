import styled from "styled-components";

export const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 40px;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 5px;
  }
`;
