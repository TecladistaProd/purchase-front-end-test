import React, { useCallback, useEffect, useState } from "react";
import { reset } from "redux-form";
import { Container, Divider, Box, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

import Product from "../../components/Product";
import ClientForm from "../../components/ClientForm";

import errorsContext from "../../context/errorsContext";

function Products() {
  const classes = useStyles();

  const products = useSelector(({ products }) => products);
  const history = useHistory();
  const [errorValid, setErrorValid] = useState({
    input: "",
    message: ""
  });

  const actionD = useDispatch();

  const handleProducts = useCallback(async () => {
    let data = await fetch("/api/products");
    data = await data.json();
    actionD({ type: "ADD_PRODUCTS", payload: data.products });
  }, [actionD]);

  useEffect(() => {
    handleProducts();
  }, [handleProducts]);
  const handleSubmit = useCallback(
    values => {
      let error = false;
      for (let i of ["name", "email", "select"]) {
        if (!values[i]) {
          error = true;
          setErrorValid({
            input: i,
            message: "Campo obrigatorio"
          });
          break;
        }
      }
      if (error) return;
      if (!values.email.match(/[\w.]{1,}@\w+(\.\w+){1,}/g)) {
        return setErrorValid({
          input: "email",
          message: "Formato de Email Inválido"
        });
      }

      setErrorValid({ input: "", message: "" });
      actionD({
        type: "FINISH",
        payload: { name: values.name, email: values.email, sex: values.select }
      });
      actionD(reset("clientForm"));
      history.push("/payment");
    },
    [actionD, history]
  );
  return (
    <Container maxWidth="lg">
      <Typography className={classes.productsTitle} component="h1">
        Produtos
      </Typography>
      <Divider light />
      <Box
        display="flex"
        flexDirection="row"
        alignItems="stretch"
        flexWrap="wrap"
        justifyContent="space-between"
        component="div"
        className={classes.productsArea}
        marginBottom="50px"
      >
        {products.map(i => (
          <Product key={i.id} {...i} />
        ))}
      </Box>
      <Typography className={classes.productsTitle} component="h1">
        Dados do Cliente
      </Typography>
      <Divider light />
      <errorsContext.Provider value={{ errorValid, setErrorValid }}>
        <ClientForm onSubmit={handleSubmit} />
      </errorsContext.Provider>
    </Container>
  );
}

export default Products;
