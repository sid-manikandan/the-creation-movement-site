import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "the-creation-movement",
  title: "The Creation Movement",
  projectId: "5ay5jh6a",
  dataset: "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Homepage Content")
              .schemaType("homepage")
              .child(
                S.document()
                  .schemaType("homepage")
                  .documentId("homepageContent"),
              ),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
