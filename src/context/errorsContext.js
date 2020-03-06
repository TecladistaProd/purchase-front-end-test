import { createContext } from "react";

export default createContext({
  errorValid: {
    input: "",
    message: ""
  },
  setErrorValid: () => null
});
