import { create } from 'zustand'; // Named import

const useCartStore = create((set) => ({
  cart: [],
  total: 0,

  addToCart: (item) =>
    set((state) => {
      const updatedCart = [...state.cart, item];
      const updatedTotal = state.total + item.price;

      return { cart: updatedCart, total: updatedTotal };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const itemToRemove = state.cart.find((item) => item.id === id);
      const updatedCart = state.cart.filter((item) => item.id !== id);
      const updatedTotal = itemToRemove ? (state.total - itemToRemove.price ): (state.total);

      return { cart: updatedCart, total: updatedTotal };
    }),

  clearCart: () => set(() => ({ cart: [], total: 0 })),
}));

export default useCartStore;
