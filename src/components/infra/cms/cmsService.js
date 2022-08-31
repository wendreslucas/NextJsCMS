const TOKEN = process.env.DATO_TOKEN;
import { apiDato } from "./../api/api";

export async function cmsService({ query }) {
  try {
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
      console.log("body: ", body);
      if (!body.errors) return body;
      throw new Error(json.stringify(body));
    });
    return {
      data: pageContentResponse.data,
    };
  } catch (error) {
    throw new Error(error.message);
  }
}
