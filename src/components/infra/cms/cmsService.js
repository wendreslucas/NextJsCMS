const TOKEN = process.env.DATO_TOKEN;

const globalQuery = `
  query {
    globalFooter {
      description
    }
  }
`;

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

      if (!body.errors) return body;
      throw new Error(json.stringify(body));
    });

    const globalContentResponse = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + TOKEN,
      },
      body: JSON.stringify({
        query: globalQuery,
      }),
    }).then(async (respostaDoServer) => {
      const body = await respostaDoServer.json();
      if (!body.errors) return body;
      throw new Error(json.stringify(body));
    });
    return {
      data: {
        ...pageContentResponse.data,
        globalContent: {
          ...globalContentResponse.data,
        },
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
}
