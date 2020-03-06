import { makeStyles } from "@material-ui/core";

import amber from "@material-ui/core/colors/amber";

export default makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eceff1",
    width: "100%",
    height: "100vh"
  },
  paper: {
    position: "relative",
    maxWidth: 280,
    padding: "3.5rem 2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "unset",
    "@media screen and (max-width:320px)": {
      width: "100vw",
      height: "100vh",
      justifyContent: "center"
    }
  },
  name: {
    fontSize: "1.3rem",
    fontWeight: 500,
    color: "#4e6976",
    marginBottom: 3
  },
  info: {
    color: "#4e6976",
    fontSize: ".98rem",
    textAlign: "center",
    fontWeight: 500
  },
  value: {
    fontSize: ".98rem",
    color: "#019cdf",
    fontWeight: 500
  },
  image: {
    marginTop: 32,
    marginLeft: 35,
    width: 140
  },
  button: {
    marginTop: 32,
    backgroundColor: amber[700],
    color: "#fff"
  }
}));
