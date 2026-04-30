export function loadVillaImages(folder: string) {
  const images = import.meta.glob(
    "../assets/villas/**/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      import: "default",
    }
  );

  return Object.entries(images)
    .filter(([path]) => path.includes(`/assets/villas/${folder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, image]) => image as string);
}