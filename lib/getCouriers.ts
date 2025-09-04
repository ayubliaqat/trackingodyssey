// lib/getCouriers.ts
import fs from "fs";
import path from "path";

export type Courier = {
  slug: string;
  name: string;
};

export function getAllCouriers(excludeSlug?: string): Courier[] {
  const couriersDir = path.join(process.cwd(), "app", "couriers");

  let couriers: Courier[] = [];

  try {
    const folders = fs.readdirSync(couriersDir, { withFileTypes: true }).filter(d => d.isDirectory());

    couriers = folders
      .map((d) => ({
        slug: d.name,
        name: d.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      }))
      .filter((c) => c.slug !== excludeSlug);
  } catch (err) {
    console.error("Failed to read couriers directory", err);
  }

  return couriers;
}
