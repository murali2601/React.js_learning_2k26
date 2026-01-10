import { neon } from "@netlify/neon";

const sql = neon();

export async function handler() {
  const messages = await sql`
    SELECT * FROM messages
    ORDER BY created_at DESC
  `;

  return {
    statusCode: 200,
    body: JSON.stringify(messages),
  };
}
