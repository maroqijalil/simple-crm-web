export type SectionType = "new" | "check" | "accepted" | "rejected";

export default interface ProductModel {
  id: number;
  name: string;
  category: string;
  stock: number;
  price: number;
  section: SectionType;
}
