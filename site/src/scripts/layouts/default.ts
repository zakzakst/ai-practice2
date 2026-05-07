import { initGoTopButton } from "@scripts/common/go-top-button";
import { initHeader } from "@scripts/common/header";
import { initLenis } from "@scripts/common/lenis";

initGoTopButton();
const lenis = initLenis();
initHeader(
  () => lenis.stop(),
  () => lenis.start(),
);
