import type { Metadata } from "next";


export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-xl mx-auto mt-10">
        {children}
    </div>
  );
}
