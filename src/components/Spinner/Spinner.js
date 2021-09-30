import React from "react";
import { SpinnerWrapper } from "./Spinner.styles";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div class="lds-dual-ring"></div>
    </SpinnerWrapper>
  );
};

export default Spinner;
