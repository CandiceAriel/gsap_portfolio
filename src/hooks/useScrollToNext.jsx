// hooks/useScrollToNext.js
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollToNext(nextSectionRef) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const next = nextSectionRef?.current;
    if (!section || !next) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top 70%",   // fires when section top hits 70% of viewport = 30% visible
      once: true,
      onEnter: () => {
        next.scrollIntoView({ behavior: "smooth" });
      },
    });

    return () => trigger.kill();
  }, [nextSectionRef]);

  return sectionRef;
}