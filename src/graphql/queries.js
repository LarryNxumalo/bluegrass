/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRugbyclass = /* GraphQL */ `
  query GetRugbyclass($id: ID!) {
    getRugbyclass(id: $id) {
      id
      name
      description
      featuredVideo
      createdAt
      updatedAt
    }
  }
`;
export const listRugbyclasses = /* GraphQL */ `
  query ListRugbyclasses(
    $filter: ModelRugbyclassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRugbyclasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        featuredVideo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
