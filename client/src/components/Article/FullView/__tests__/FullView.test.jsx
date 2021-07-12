import FullView from "../index";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ARTICLE_DETAIL } from "../../../../queries/article";

const mocks = [
  {
    request: {
      query: ARTICLE_DETAIL,
      variables: {
        title: "Article's title",
      },
    },
    result: {
      data: {
        article: {
          title: "Article's title",
          content: "bulldog, thigns, blah",
          source: {
            id: "string | null",
            name: "string",
          },
          author: " string | null",
          description: " strin",
          url: " strin",
          urlToImage: " strin",
          publishedAt: "2019-10-18T11:11:55Z",
        },
      },
    },
  },
];

describe("FullView Article Component", () => {
  it("should render an article", async () => {
    const [mock] = mocks;
    const { getByText, findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FullView articleTitle={mock.request.variables.title} />
      </MockedProvider>
    );

    expect(getByText("Loading details...")).toBeInTheDocument();

    const articleDetail = await findByText(mock.result.data.article.content);
    expect(articleDetail).toBeInTheDocument();
  });
});
