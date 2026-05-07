import Lenis from "lenis";

export const initLenis = (): Lenis => {
  const lenis: Lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
