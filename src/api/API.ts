import client from "@/api";
import type { IProduct} from "@/types";

export default {
  getProducts: () => {
    return client.get("/api/product").then(({ data: { data = [] } = {} }) => {
      return data as IProduct[];
    });
  },
};
