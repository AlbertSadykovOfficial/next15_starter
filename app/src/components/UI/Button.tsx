import type { TChildren } from "@/models/Types/TChildren";

export default function Button(props: TChildren) {
  return (
    <button
      className={
        "button text-white bg-orange-500 shadow-orange-500/50 hover:shadow-orange-500/40 middle center rounded-lg py-3 px-6 font-sans text-xs font-bold shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      }
    >
      {"children" in props ? props.children : ""}
    </button>
  );
}
