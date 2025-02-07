"use client";
import { useRef, ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";

import { initializeCount } from "./features/counter/counterSlice";

export default function StoreProvider({
  children,
  count = 20,
}: {
  count?: number;
  children: ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(initializeCount(count));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
