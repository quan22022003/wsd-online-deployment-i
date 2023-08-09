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
  const url = new URL(request.url);
  let pathname = url.pathname;
  
  switch (pathname) {
        case "/index.html":
            pathname = `static${pathname}`;
            break;
        case "/about.html":
            pathname = `static${pathname}`;
            break;
        default:
            return new Response("Hello files!");
  }
//   if (!pathname !== "/index.html" && !pathname !== "/about.html") {
//       return new Response("Hello files!");
//   } else {
//       pathname = `/static${pathname}`
//   }



  return await serveFile(request, pathname);
};

serve(handleRequest, { port: 7777 });
