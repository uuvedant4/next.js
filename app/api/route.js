import { redirect } from "next/navigation";

export const GET = async (request) => {
  // console.log(request.cookies);
  // console.log(new Headers(request.headers));
  const res = await fetch("https://dummyjson.com/products", {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return Response.json(data);
};
