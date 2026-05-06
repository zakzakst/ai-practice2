import Lenis from "lenis";

export const initLenis = () => {
  // TODO: ストップすることとかを考えるとlenisをreturnで返したほうがいいか？
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
