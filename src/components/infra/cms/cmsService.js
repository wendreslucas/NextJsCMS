const TOKEN = "5d9ad57c87d6038d236a88ed656823";
import { apiDato } from "./../api/api";

export async function cmsService({ query }) {
  const pageContentResponse = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + TOKEN,
    },
    body: JSON.stringify({
      query,
    }),
  }).then(async (respostaDoServer) => {
    const body = await respostaDoServer.json();
    return body;
  });
  // console.log("pageContentResponse", pageContentResponse);
  return {
    data: pageContentResponse,
  };
}
