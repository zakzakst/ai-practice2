export const getRootRelativePath = (path: string) =>
  `${import.meta.env.BASE || ""}${path}`;
