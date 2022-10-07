import UseCase from "@/Core/UseCase/UseCase";
import type ProductModel from "../../Domain/Models/ProductModel";
import ProductsLocalStorage from "../../Infrastructure/Persistence/ProductsLocalStorage";

export default class AddProduct extends UseCase<ProductModel, any> {
  execute = (product: ProductModel) => {
    new ProductsLocalStorage().add(product);
  };
}
