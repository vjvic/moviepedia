import styled from "styled-components";

export const Layoutontainer = styled.div`
  main {
    margin-left: 250px;
    padding: 0px 10px;
    padding-top: 100px;
    padding-bottom: 30px;

    @media ${({ theme }) => theme.breakpoints.md} {
      margin-left: 0;
    }
  }
`;

export const Container = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 0 40px;

  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 0 5px;
  }
`;
