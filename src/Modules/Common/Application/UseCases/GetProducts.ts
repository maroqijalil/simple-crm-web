import UseCase from "@/Core/UseCase/UseCase";
import type ProductModel from "../../Domain/Models/ProductModel";
import ProductsLocalStorage from "../../Infrastructure/Persistence/ProductsLocalStorage";

export default class GetProducts extends UseCase<any, ProductModel[]> {
  execute = (): ProductModel[] => {
    return new ProductsLocalStorage().getAll() ?? [];
  };
}
