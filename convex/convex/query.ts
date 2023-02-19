import { query } from "./_generated/server";

export default query(async ({ db }, uuid) => {
    return await db.query("entries")
    .filter((q) => q.eq(q.field('uuid'), uuid))
    .collect();
});
