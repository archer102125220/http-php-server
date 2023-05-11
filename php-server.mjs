import path from "path";
import { fileURLToPath } from "url";
import phpServer from "php-server";
import * as dotenv from "dotenv";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const server = await phpServer({
  base: path.join(__dirname, "src"),
  // hostname: "localhost",
  hostname: process.env.HOST_NAME || "0.0.0.0",
  port: process.env.PORT || 8080,
  ini: process.env.PHP_INI,
  open: true,
});
console.log(`PHP server running at :
 http://localhost:8080
 ${server.url}`);
