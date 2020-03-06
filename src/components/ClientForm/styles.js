import { makeStyles } from "@material-ui/core";

import amber from "@material-ui/core/colors/amber";

export default makeStyles(theme => ({
  inputs: {
    flexGrow: 2,
    minWidth: "300px",
    marginRight: 16,
    "@media screen and (max-width: 320px)": {
      marginRight: 0,
      minWidth: "100%",
      marginBottom: 22
    }
  },
  formControl: {
    width: "200px",
    marginTop: 0,
    "@media screen and (max-width: 720px)": {
      marginTop: 22
    },
    "@media screen and (max-width: 320px)": {
      marginTop: 0,
      width: "100%"
    }
  },
  total: {
    fontWeight: "bold",
    fontSize: "1.3rem",
    color: "var(--pcolor)"
  },
  submit: {
    marginTop: 10,
    backgroundColor: amber[700],
    color: "#fff"
  }
}));
