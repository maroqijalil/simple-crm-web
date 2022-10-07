import UseCase from "@/Core/UseCase/UseCase";
import type ProductModel from "../../Domain/Models/ProductModel";

export default class GetProducts extends UseCase<any, ProductModel[]> {
  execute = (): ProductModel[] => {
    return [];
  };
}
