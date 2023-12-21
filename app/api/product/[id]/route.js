export const GET = async (request, { params }) => {
  // console.log(request.nextUrl.searchParams.get("page"));
  const response = await fetch(`https://dummyjson.com/product/${params.id}`);
  const data = await response.json();
  return Response.json(data);
};
