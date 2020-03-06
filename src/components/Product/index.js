import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  TextField
} from "@material-ui/core";

import IconPlus from "../../assets/baseline-add-24px.svg";
import IconMinus from "../../assets/baseline-remove-24px.svg";

import toMoney from "../../helpers/toMoney";

import useStyles, { inputClasses as useInputStyles } from "./styles";

function Product({ title, price, description, image, id }) {
  const classes = useStyles();
  const actionD = useDispatch();
  const inputClasses = useInputStyles();

  const [isHover, setIsHover] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleAmount = useCallback(({ target: { value } }) => {
    if (value || value === 0) {
      let val = Math.max(parseInt(value), 0);
      setAmount(val);
    }
  }, []);

  const handleClick = useCallback(() => {
    if (amount === 0) return;
    actionD({ type: "ADD_PRODUCT", payload: { id, price, amount } });
    setAmount(0);
  }, [actionD, id, amount, price]);

  const getDescription = useCallback(() => {
    const ts = parseFloat(description.match(/\$times([\d-]{1,})\$/)[1]);
    const dis = parseFloat(description.match(/\$discount([\d-]{1,})\$/)[1]);
    let ndesc = description
      .replace(
        /\$times[\d-]{1,}\$/,
        toMoney(parseFloat((price / ts).toPrecision(5)), true)
      )
      .replace(
        /\$discount[\d-]{1,}\$/,
        toMoney(parseFloat((price - (price * dis) / 100).toPrecision(5)), true)
      );
    return ndesc;
  }, [description, price]);

  const handleHover = useCallback(val => {
    setIsHover(val);
  }, []);

  return (
    <Card
      onMouseEnter={handleHover.bind(null, true)}
      onMouseLeave={handleHover.bind(null, false)}
      elevation={isHover ? 3 : 0}
      className={classes.card}
    >
      <CardContent className={classes.cardContent}>
        <CardMedia
          component="img"
          className={classes.cardImage}
          src={image}
          width="100%"
          alt="Produto 01"
        />
        <Box
          width="100%"
          padding="5"
          component="div"
          position="relative"
          className={isHover ? classes.cardOverlay : ""}
        >
          <Typography className={classes.cardProduct}>{title}</Typography>
          <Typography className={classes.cardPrice}>
            R$ {toMoney(price, true)}
          </Typography>
          <Typography className={classes.cardInfo} component="pre">
            {getDescription()}
          </Typography>
          <Box
            position="absolute"
            component="div"
            display={isHover ? "flex" : "none"}
            bgcolor="rgba(255, 255, 255, .5)"
            minHeight="100%"
            width="100%"
            paddingTop="8px"
            flexDirection="column"
          >
            <Box
              component="div"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Button
                className={classes.cardIconButton}
                disableElevation
                onClick={handleAmount.bind(null, {
                  target: { value: amount - 1 }
                })}
                variant="contained"
                aria-label="minus"
              >
                <Box
                  className={classes.cardIcon}
                  component="img"
                  src={IconMinus}
                  alt="minus"
                />
              </Button>
              <TextField
                type="number"
                value={amount}
                onChange={handleAmount}
                className={classes.cardInput}
                InputProps={{ classes: inputClasses }}
                variant="outlined"
                margin="dense"
              />
              <Button
                className={classes.cardIconButton}
                disableElevation
                onClick={handleAmount.bind(null, {
                  target: { value: amount + 1 }
                })}
                variant="contained"
                aria-label="plus"
              >
                <Box
                  className={classes.cardIcon}
                  component="img"
                  src={IconPlus}
                  alt="plus"
                />
              </Button>
            </Box>
            <Box marginTop="10px" component="div">
              <Button
                disableElevation
                variant="contained"
                className={classes.cardButton}
                fullWidth
                onClick={handleClick}
              >
                Adicionar
              </Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Product;
