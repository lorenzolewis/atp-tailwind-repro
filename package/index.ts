import defineTheme from "astro-theme-provider";
import { z } from "astro/zod";
import { type AstroIntegration } from "astro";
import tailwindcss from "@tailwindcss/vite";

function integration(): AstroIntegration {
  return {
    name: "my-integration",
    hooks: {
      "astro:config:setup"({ updateConfig }) {
        // @ts-expect-error
        updateConfig({ vite: { plugins: [tailwindcss()] } });
      },
    },
  };
}

export default defineTheme({
  name: "my-theme",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
  integrations: [integration()],
});
