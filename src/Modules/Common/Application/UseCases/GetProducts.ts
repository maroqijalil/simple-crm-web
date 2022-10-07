import UseCase from "@/Core/UseCase/UseCase";
import type { SectionType } from "../../Domain/Models/ProductModel";
import type ProductModel from "../../Domain/Models/ProductModel";
import ProductsLocalStorage from "../../Infrastructure/Persistence/ProductsLocalStorage";

export default class GetProducts extends UseCase<
  SectionType,
  Promise<ProductModel[]>
> {
  execute = (section: SectionType): Promise<ProductModel[]> => {
    return new Promise((resolve, reject) => {
      const products = new ProductsLocalStorage().getAllSection(section);

      if (products) {
        resolve(products);
      } else {
        reject("Empty");
      }
    });
  };
}
