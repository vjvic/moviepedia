import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  border-radius: ${({ theme }) => theme.borderRadius.primary};
  background: ${({ theme }) => theme.overlay};
  height: 100%;
  width: 100%;
  padding: 1rem;
`;
