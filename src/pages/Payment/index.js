import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Typography, Paper, Button } from "@material-ui/core";

import useStyles from "./styles";

import toMoney from "../../helpers/toMoney";

import purchase from "../../assets/purchase.png";

function Payment() {
  const classes = useStyles();
  const history = useHistory();
  const data = useSelector(({ buyInfo: { userData: { name }, total } }) => ({
    name,
    total
  }));
  const sendToMain = useCallback(() => {
    history.push("/");
  }, [history]);
  useEffect(() => {
    if (!data.name) sendToMain();
  }, [data.name, sendToMain]);
  return (
    <Box className={classes.container} component="div">
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.name} component="h1">
          {data.name},
        </Typography>
        <Typography className={classes.info} component="p">
          Sua compra no valor{" "}
          <Typography className={classes.value} component="span">
            R$ {toMoney(data.total, true)}
          </Typography>
        </Typography>
        <Typography className={classes.info} component="p">
          foi finalizada com sucesso
        </Typography>
        <Box className={classes.image} component="img" src={purchase} />
        <Button
          onClick={sendToMain}
          className={classes.button}
          variant="contained"
          disableElevation
        >
          Iniciar nova compra
        </Button>
      </Paper>
    </Box>
  );
}

export default Payment;
