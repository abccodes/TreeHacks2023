import { defineSchema, defineTable, s } from "convex/schema";

// Define a messages table with two indexes.
export default defineSchema({
  entries: defineTable({
    uuid: s.string(),
    body: s.string(),
  })
});
