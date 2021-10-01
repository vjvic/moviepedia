import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: /* ${({ display }) => (display ? "flex" : "none")} */ flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 9999;
  padding: 10px;
`;
