import fs from "fs";
import path from "path";

const pagesDir = path.join(process.cwd(), "app/couriers");
const outputFile = path.join(process.cwd(), "data/couriers.json");

const folders = fs.readdirSync(pagesDir).filter((f) => {
  return fs.statSync(path.join(pagesDir, f)).isDirectory();
});

const couriers = folders.map((slug) => {
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  return { slug, name };
});

fs.mkdirSync(path.join(process.cwd(), "data"), { recursive: true });
fs.writeFileSync(outputFile, JSON.stringify(couriers, null, 2));

console.log("Couriers list generated!");
