import create from "zustand"
import { devtools } from "zustand/middleware"
const useStore = create(
  devtools((set) => ({
    selectedItems: [],
    subtotal: 0,
    addItemToStore: (value) =>
      set((state) => ({
        selectedItems: [...state.selectedItems, value],
        subtotal: state.subtotal + value.sale_price_in_cents,
      })),
    removeItemFromStore: (name, price) =>
      set((state) => ({
        subtotal: state.subtotal - price,
        selectedItems: state.selectedItems.filter(
          (selectedItem) => selectedItem.name !== name
        ),
      })),
  }))
)

export default useStore
