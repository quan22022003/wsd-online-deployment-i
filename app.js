// import { serve } from "./deps.js";
// import { sql } from "./database.js";

// const logNames = async () => {
//   const result = await sql`SELECT * FROM names`;
//   console.log(result);
// };

// const handleRequest = (request) => {
//   console.log(`Request to ${request.url}`);
//   logNames();
//   return new Response("Con cac du ma!");
// };

// console.log("Launching server on port 7777");
// serve(handleRequest, { port: 7777 });

import { serve } from "https://deno.land/std@0.171.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.171.0/http/file_server.ts";

const handleRequest = async (request) => {
    return new Response("Seeking truths beyond meaning of life, you will find 43");  
};

serve(handleRequest, { port: 7777 });
