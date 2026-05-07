export const initHeader = (
  onShowDialog: () => void,
  onCloseDialog: () => void,
) => {
  const dialogEl = document.getElementById(
    "common-header-menu",
  ) as HTMLDialogElement | null;
  const openButtonEl = document.getElementById(
    "common-header-menu-button",
  ) as HTMLButtonElement | null;
  const closeButtonEl = document.getElementById(
    "common-header-menu__close-button",
  ) as HTMLButtonElement | null;

  if (!dialogEl || !openButtonEl || !closeButtonEl) return;

  openButtonEl.addEventListener("click", () => {
    dialogEl.showModal();
    onShowDialog();
  });

  closeButtonEl.addEventListener("click", () => {
    dialogEl.close();
    onCloseDialog();
  });
};
