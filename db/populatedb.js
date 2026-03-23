import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR ( 255 ),
message VARCHAR ( 255 )
);

INSERT INTO messages (name, message)
VALUES
    ('Josephine', 'Hello dear friend. I hope this message finds you excellent.'),
    ('Good Old Average AI (single and interested)', 'Hello World!'),
    ('AI hunter', 'Goodnight World!');
    `;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_CONNECTION,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
