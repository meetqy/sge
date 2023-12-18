import { PrismaClient } from "@prisma/client";
import { globbySync } from "globby";
import fs from "fs";

interface Poem {
  title: string;
  author: string;
  content: string[];
  tags: string[];
}

const prisma = new PrismaClient();

async function main() {
  globbySync(
    ["/Users/meetqy/Desktop/me/chinese-poetry-master/content/**/*.json"],
    {
      ignore: ["**/index.json"],
    },
  ).forEach((file) => {
    const json = JSON.parse(fs.readFileSync(file, "utf-8")) as Poem;

    prisma.poem
      .create({
        data: {
          title: json.title,
          author: json.author,
          content: JSON.stringify(json.content),
          tags: {
            connectOrCreate: json.tags.map((tag) => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
        },
      })
      .catch((e) => {
        console.log(json, e);
      });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
