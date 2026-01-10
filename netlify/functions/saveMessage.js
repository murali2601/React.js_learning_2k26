import { neon } from "@netlify/neon";

const sql = neon(); // uses NETLIFY_DATABASE_URL automatically

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { text } = JSON.parse(event.body);

  await sql`
    INSERT INTO messages (text)
    VALUES (${text})
  `;

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
}
