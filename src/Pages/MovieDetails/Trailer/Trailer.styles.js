import styled from "styled-components";

export const TrailerContainer = styled.div`
  /* padding-bottom: 56.25%; */
  /*  width: 100%; */
  background: pink;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 720px;
    max-height: 400px;
    padding: 0 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
