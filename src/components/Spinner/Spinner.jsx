import React from "react";
import { SpinnerWrapper } from "./Spinner.styles";

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <div className="lds-dual-ring"></div>
    </SpinnerWrapper>
  );
};

export default Spinner;
