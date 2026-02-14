import { ApiReference } from "@scalar/nextjs-api-reference";

export default function DocsPage() {
  return (
    <ApiReference
      configuration={{
        spec: { url: "/openapi.yaml" },
        theme: "kepler",
        hideDownloadButton: false,
        metaData: {
          title: "LifeOS API",
        },
      }}
    />
  );
}
