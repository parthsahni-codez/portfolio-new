import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Parth Sahni | UI/UX Designer + Creative Developer",
    short_name: "Parth Sahni",
    description: "Portfolio of Parth Sahni, UI/UX designer and creative developer based in Bangalore, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#EFECE6",
    theme_color: "#151513",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
