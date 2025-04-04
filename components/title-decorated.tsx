import { ReactNode } from "react";

export default function DashedTitle({ children }: { children: ReactNode }) {
  return (
    <div className="text-gold text-2xl spacing tracking-[5px] flex items-center gap-2">
      <div className="h-0.5 w-10 bg-gold"></div>
      {children}
    </div>
  );
}
