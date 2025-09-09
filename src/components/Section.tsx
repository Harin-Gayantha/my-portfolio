import { ReactNode } from "react";

export default function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold tracking-tight mb-6">{title}</h2>
      <div className="text-black/80 dark:text-white/80">{children}</div>
    </section>
  );
}


