/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRugbyclass = /* GraphQL */ `
  mutation CreateRugbyclass(
    $input: CreateRugbyclassInput!
    $condition: ModelRugbyclassConditionInput
  ) {
    createRugbyclass(input: $input, condition: $condition) {
      id
      name
      description
      featuredVideo
      createdAt
      updatedAt
    }
  }
`;
export const updateRugbyclass = /* GraphQL */ `
  mutation UpdateRugbyclass(
    $input: UpdateRugbyclassInput!
    $condition: ModelRugbyclassConditionInput
  ) {
    updateRugbyclass(input: $input, condition: $condition) {
      id
      name
      description
      featuredVideo
      createdAt
      updatedAt
    }
  }
`;
export const deleteRugbyclass = /* GraphQL */ `
  mutation DeleteRugbyclass(
    $input: DeleteRugbyclassInput!
    $condition: ModelRugbyclassConditionInput
  ) {
    deleteRugbyclass(input: $input, condition: $condition) {
      id
      name
      description
      featuredVideo
      createdAt
      updatedAt
    }
  }
`;
