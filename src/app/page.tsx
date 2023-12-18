import { api } from "~/trpc/server";

export default async function Home() {
  const res = await api.post.hello.query("world");

  return <main>{res.greeting}</main>;
}
