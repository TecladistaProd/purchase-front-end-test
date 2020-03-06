import { Server, Model } from "miragejs";

import products from "./products";

export default (environment = "development") => {
  return new Server({
    models: {
      product: Model
    },
    seeds(server) {
      products.forEach(i => server.create("product", i));
    },
    environment,
    routes() {
      this.namespace = "api";
      this.timing = Math.max(250, Math.random() * 1050);
      this.resource("products");
    }
  });
};
