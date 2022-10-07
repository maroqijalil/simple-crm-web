import type { InjectionKey, Ref } from "vue";
import { ref } from "vue";
import type { SectionType } from "../../Domain/Models/ProductModel";

interface Property {
  isShown?: Ref<boolean>;
  section: Ref<SectionType>;
  open: (section: SectionType) => void;
}

export const AddProductModalKey = Symbol() as InjectionKey<
  (section: SectionType) => void
>;

export const useProductModalProvider = (): Property => {
  const isShown = ref(false);
  const section = ref<SectionType>("new");

  return {
    isShown,
    section,
    open: (type: SectionType) => {
      isShown.value = true;
      section.value = type;
    },
  };
};
