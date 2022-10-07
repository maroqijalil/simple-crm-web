import type { SectionType } from "../../Domain/Models/ProductModel";
import type ProductModel from "../../Domain/Models/ProductModel";

export default class ProductsLocalStorage {
  static PRODUCT = "product";

  getAllSection = (section: SectionType): ProductModel[] | null => {
    try {
      const json = window.localStorage.getItem(ProductsLocalStorage.PRODUCT);
      if (json) {
        const products: ProductModel[] = JSON.parse(json);
        return products.filter((product) => product.section === section);
      }
    } catch (e) {
      console.log(e);
    }

    return null;
  };

  getAll = (): ProductModel[] | null => {
    try {
      const json = window.localStorage.getItem(ProductsLocalStorage.PRODUCT);
      if (json) {
        return JSON.parse(json);
      }
    } catch (e) {
      console.log(e);
    }

    return null;
  };

  set = (products: ProductModel[]): boolean => {
    try {
      const json = JSON.stringify(products);
      window.localStorage.setItem(ProductsLocalStorage.PRODUCT, json);

      return true;
    } catch (e) {
      console.log(e);
    }

    return false;
  };

  add = (product: ProductModel): boolean => {
    try {
      const products = this.getAll();
      if (products) {
        products.push(product);

        return this.set(products);
      }

      return this.set([product]);
    } catch (e) {
      console.log(e);
    }

    return false;
  };
}
