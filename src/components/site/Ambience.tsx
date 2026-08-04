import { useEffect, useRef } from "react";

/** Soft cursor-following glow. Pointer devices only, disabled for reduced motion. */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.opacity = "1";
        el.style.transform = `translate3d(${event.clientX - 300}px, ${event.clientY - 300}px, 0)`;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-700 md:block"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--gold) 9%, transparent), transparent 65%)",
      }}
    />
  );
}

/** Slow-drifting geometric shapes used behind hero and section headers. */
export function FloatingShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="grid-backdrop absolute inset-0" />
      <div
        className="float-shape absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 22%, transparent), transparent 70%)",
        }}
      />
      <div
        className="float-shape absolute -right-16 top-40 h-80 w-80 rounded-full blur-3xl"
        style={{
          animationDelay: "-6s",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--violet) 26%, transparent), transparent 70%)",
        }}
      />
      <div className="float-shape absolute left-1/2 top-24 h-40 w-40 -translate-x-1/2 rotate-45 rounded-3xl border border-gold/15" style={{ animationDelay: "-3s" }} />
    </div>
  );
}
