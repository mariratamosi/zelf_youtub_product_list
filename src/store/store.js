import create from "zustand"
import { devtools } from "zustand/middleware"
const useStore = create(
  devtools((set) => ({
    selectedItems: [],
    addItemToStore: (value) =>
      set((state) => ({
        selectedItems: [...state.selectedItems, value],
      })),
    removeItemFromStore: (id) =>
      set((state) => ({
        selectedItems: state.selectedItems.filter(
          (selectedItem) => selectedItem.id !== id
        ),
      })),
  }))
)

export default useStore
