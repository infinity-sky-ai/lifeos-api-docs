"use client";

import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

export default function DocsPage() {
  return (
    <ApiReferenceReact
      configuration={{
        url: "/openapi.yaml",
        theme: "kepler",
        hideDownloadButton: false,
        metaData: {
          title: "LifeOS API",
        },
      }}
    />
  );
}
