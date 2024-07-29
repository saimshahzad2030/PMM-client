"use client"; 

import { useEffect, useLayoutEffect, useRef } from "react";
import Tempus from "@studio-freight/tempus";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroller() {
  const lenis = useRef(null);

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, [lenis]);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
      duration: 2,
    });

    const resize = setInterval(() => {
      lenis.current.resize();
    }, 150);

    function onFrame(time) {
      lenis.current.raf(time);
    }

    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenis.current.destroy();
      lenis.current = null;
    };
  }, []);

  return null;
}
