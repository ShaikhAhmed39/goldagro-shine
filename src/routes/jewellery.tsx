import { createFileRoute } from "@tanstack/react-router";
import { DivisionPage } from "@/components/site/DivisionPage";
import { JEWEL } from "@/lib/site-data";

const title = "GOLDAGRO Jewellery — Luxury Imitation Jewellery Exporter";
const description =
  "Necklaces, bridal sets, bangles and earrings crafted with Indian heritage and exported in bulk to 20+ countries.";

export const Route = createFileRoute("/jewellery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <DivisionPage d={JEWEL} />,
});
