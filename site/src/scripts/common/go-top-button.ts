export const initGoTopButton = () => {
  const el = document.getElementById(
    "go-top-button",
  ) as HTMLButtonElement | null;
  if (!el) return;

  el.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    // TODO: アクセシビリティ的にフォーカスをメインタグの先頭に移動する処理が必要？
  });
};
