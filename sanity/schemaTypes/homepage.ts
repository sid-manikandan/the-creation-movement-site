import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage Content",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "missionTitle",
      title: "Mission title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "missionText",
      title: "Mission text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "donateTitle",
      title: "Donate title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "donateText",
      title: "Donate text",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "donateButtonText",
      title: "Donate button text",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "donateUrl",
      title: "Donate URL",
      type: "url",
      validation: (rule) =>
        rule.required().uri({
          scheme: ["http", "https"],
        }),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Homepage Content",
      };
    },
  },
});
