import create from "zustand"
import { devtools } from "zustand/middleware"
const useStore = create(
  devtools((set) => ({
    selectedItems: { a: "i am selected" },
    addItemToStore: (keys, value) =>
      set((state) => ({
        selectedItems: { ...state.selectedItems, [keys]: value },
      })),
    removeItemFromStore: (keys) =>
      set((state) => ({
        selectedItems: { ...state.selectedItems, [keys]: undefined },
      })),
  }))
)

export default useStore
