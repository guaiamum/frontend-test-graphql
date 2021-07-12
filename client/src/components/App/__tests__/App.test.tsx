import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { ARTICLES_LIST } from '../../../queries/article';
import App from '../App';

const mocks = [
  {
    request: {
      query: ARTICLES_LIST,
    },
    result: {
      data: {
        articles: [{
          title: "Article's title",
          description: " strin",
          urlToImage: " strin",
        }],
      },
    },
  },
];

test('renders h1', async () => {
  const { getByText, findByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(getByText("Loading...")).toBeInTheDocument();
  const h1Element = await findByText(/Articles about things/);
  expect(h1Element).toBeInTheDocument();
});
