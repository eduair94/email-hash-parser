const fs = require("fs");

async function main() {
  const text = fs.readFileSync("input.txt", "utf8");
  const regex = /(([^\ , \>]){1,50}\@.{1,30}\..[^\ ]{1,10}) \:\: .{32}/gi;
  const matches = text
    .match(regex)
    .map((el) => el.trim())
    .map((el) => el.replace(" :: ", ":"));
  console.log(matches);
  fs.writeFileSync("output.txt", matches.join("\n"), "utf8");
}

main();
