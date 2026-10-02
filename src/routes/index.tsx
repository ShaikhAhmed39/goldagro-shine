import { createFileRoute } from "@tanstack/react-router";
import { DivisionPage } from "@/components/site/DivisionPage";
import { AGRO } from "@/lib/site-data";

const title = "GOLDAGRO Global Export — Indian Spices, Fruits & Vegetables";
const description =
  "Certified agro exporter from Thane, India. Farm-to-port supply of premium spices, fresh fruits and vegetables with cold-chain logistics.";

export const Route = createFileRoute("/")({
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
  component: () => <DivisionPage d={AGRO} />,
});
