import { create } from "zustand";
import { persist } from "zustand/middleware";
import { uid } from "@/lib/utils";

export type CartLine = {
  id: string;
  productId: string;
  name: string;
  image: string;
  unitPrice: number;
  qty: number;
  detail?: string;
};

type CartState = {
  lines: CartLine[];
  add: (line: Omit<CartLine, "id" | "qty"> & { qty?: number }) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (input) => {
        const qty = input.qty ?? 1;
        const match = get().lines.find(
          (line) => line.productId === input.productId && line.detail === input.detail,
        );
        if (match) {
          set({
            lines: get().lines.map((line) =>
              line.id === match.id ? { ...line, qty: Math.min(6, line.qty + qty) } : line,
            ),
          });
          return;
        }
        set({
          lines: [
            ...get().lines,
            {
              id: uid(),
              productId: input.productId,
              name: input.name,
              image: input.image,
              unitPrice: input.unitPrice,
              detail: input.detail,
              qty: Math.min(6, qty),
            },
          ],
        });
      },
      setQty: (id, qty) => {
        if (qty < 1) {
          set({ lines: get().lines.filter((line) => line.id !== id) });
          return;
        }
        set({
          lines: get().lines.map((line) =>
            line.id === id ? { ...line, qty: Math.min(6, qty) } : line,
          ),
        });
      },
      remove: (id) => set({ lines: get().lines.filter((line) => line.id !== id) }),
      clear: () => set({ lines: [] }),
    }),
    { name: "slowform-cart" },
  ),
);

export function cartCount(lines: CartLine[]) {
  return lines.reduce((sum, line) => sum + line.qty, 0);
}

export function cartTotal(lines: CartLine[]) {
  return lines.reduce((sum, line) => sum + line.unitPrice * line.qty, 0);
}

export type Order = {
  id: string;
  createdAt: string;
  email: string;
  name: string;
  address: string;
  city: string;
  region: string;
  postal: string;
  lines: CartLine[];
  total: number;
};

const ORDERS_KEY = "slowform-orders";

export function saveOrder(order: Order) {
  if (typeof window === "undefined") return;
  const current = listOrders();
  window.localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...current].slice(0, 12)));
}

export function listOrders(): Order[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(ORDERS_KEY);
    return raw ? (JSON.parse(raw) as Order[]) : [];
  } catch {
    return [];
  }
}

export function getOrder(id: string) {
  return listOrders().find((order) => order.id === id);
}
