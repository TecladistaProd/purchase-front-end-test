import React, { useRef, useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button
} from "@material-ui/core";

import { Field, reduxForm } from "redux-form";

import useStyles from "./styles";

import CustomInput from "../CustomInput";

import toMoney from "../../helpers/toMoney";
import errorsContext from "../../context/errorsContext";

function ClientForm({ handleSubmit }) {
  const classes = useStyles();

  const inputLabel = useRef(null);

  const [labelWidth, setLabelWidth] = useState(0);

  const { errorValid } = useContext(errorsContext);

  const total = useSelector(({ buyInfo: { total } }) => total);

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      marginTop="32px"
      component="form"
      onSubmit={handleSubmit}
    >
      <Box
        flexDirection="row"
        justifyContent="space-between"
        display="flex"
        flexWrap="wrap"
        width="100%"
        component="div"
      >
        <Field
          name="name"
          component={CustomInput({
            InputLabelProps: { shrink: true },
            error: errorValid.input === "name",
            helperText: errorValid.input === "name" ? errorValid.message : "",
            className: classes.inputs,
            variant: "outlined",
            type: "text",
            label: "Nome",
            placeholder: "Nome do cliente aqui"
          })}
        />
        <Field
          name="email"
          component={CustomInput({
            InputLabelProps: { shrink: true },
            error: errorValid.input === "email",
            helperText: errorValid.input === "email" ? errorValid.message : "",
            className: classes.inputs,
            variant: "outlined",
            type: "email",
            label: "Email",
            placeholder: "Digite seu email aqui"
          })}
        />
        <Field
          name="select"
          component={props => (
            <FormControl
              error={errorValid.input === "select"}
              variant="outlined"
              className={classes.formControl}
            >
              <InputLabel ref={inputLabel} shrink id="select">
                Sexo
              </InputLabel>
              <Select
                {...props.input}
                notched
                displayEmpty
                labelWidth={labelWidth}
                labelId="select"
              >
                <MenuItem value="m">Masculino</MenuItem>
                <MenuItem value="f">Feminino</MenuItem>
                <MenuItem value="o">Outros</MenuItem>
              </Select>
              {errorValid.input === "select" && (
                <FormHelperText>{errorValid.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
      </Box>
      <Box
        alignSelf="flex-end"
        marginTop="54px"
        marginBottom="40px"
        component="div"
      >
        <Typography component="h2" className={classes.total}>
          Total: R$ {toMoney(total, true)}
        </Typography>
        <Button
          type="submit"
          className={classes.submit}
          disableElevation
          variant="contained"
        >
          Finalizar Compra
        </Button>
      </Box>
    </Box>
  );
}

export default reduxForm({ form: "clientForm" })(ClientForm);
