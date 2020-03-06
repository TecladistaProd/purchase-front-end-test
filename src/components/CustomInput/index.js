import React from "react";

import { TextField } from "@material-ui/core";

const CustomInput = props => formProps => {
  return <TextField {...props} {...formProps.input} />;
};
export default CustomInput;
