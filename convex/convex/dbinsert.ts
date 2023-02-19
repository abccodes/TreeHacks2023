import { mutation } from "./_generated/server";

export default mutation(async ({ db }, uuid, body) => {
   const entry = { uuid, body };
   await db.insert("entries", entry); 
});
