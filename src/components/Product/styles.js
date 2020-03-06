import { makeStyles } from "@material-ui/core";

import blue from "@material-ui/core/colors/blue";

export default makeStyles(theme => ({
  card: {
    position: "relative",
    width: 250,
    height: 377,
    marginBottom: 10,
    padding: 0,
    "@media screen and (max-width: 720px)": {
      width: "218px",
      height: 390
    },
    "@media screen and (max-width: 320px)": {
      width: "100%"
    }
  },
  cardContent: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px !important"
  },
  cardImage: {
    width: "100%"
  },
  cardProduct: {
    marginTop: 3,
    fontSize: 15,
    color: "var(--pcolor)"
  },
  cardPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "var(--pcolor)",
    marginTop: 8,
    "@media screen and (max-width: 720px)": {
      marginTop: 5
    }
  },
  cardInfo: {
    fontSize: 12.5,
    lineHeight: 1.7,
    color: "#abb5b9"
  },
  cardOverlay: {
    backgroundColor: "rgba(255, 255, 255, .5)",
    top: "-140px",
    "@media screen and (max-width: 720px)": {
      top: "-140px"
    }
  },
  cardIconButton: {
    width: 40,
    height: 40,
    padding: 0,
    minWidth: "unset",
    borderRadius: "50%"
  },
  cardIcon: {
    filter: "invert(0.4) sepia(1) saturate(1) hue-rotate(180deg)"
  },
  cardInput: {
    maxWidth: "50%",
    borderColor: "#eee"
  },
  cardButton: {
    color: "#fff",
    backgroundColor: blue[500]
  }
}));

export const inputClasses = makeStyles(theme => ({
  root: {
    // borderColor: "#ff2222",
    "&:hover fieldset": {
      borderColor: "#ddd !important"
    },
    "& input": {
      textAlign: "center"
    },
    "& fieldset": {
      borderColor: "#ddd"
    },
    "& input:focus + fieldset": {
      borderColor: "rgba(10, 75, 105, .3) !important",
      borderWidth: "1px !important"
    }
  }
}));
