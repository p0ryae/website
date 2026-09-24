const modules = import.meta.glob("./assets/logos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

export const logoUrls = Object.values(modules);

export const logo = (name: string) =>
  Object.entries(modules).find(([path]) =>
    path.split("/").pop()?.startsWith(`${name}.`),
  )?.[1];

