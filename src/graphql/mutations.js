/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAsset = /* GraphQL */ `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
      id
      name
      type
      description
      additionalInfo
      documentation
      initialBid
      startDate
      endDate
      bids {
        items {
          id
          amount
          date
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          assetBidsId
        }
        nextToken
        startedAt
      }
      author
      estado
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAsset = /* GraphQL */ `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
      id
      name
      type
      description
      additionalInfo
      documentation
      initialBid
      startDate
      endDate
      bids {
        items {
          id
          amount
          date
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          assetBidsId
        }
        nextToken
        startedAt
      }
      author
      estado
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAsset = /* GraphQL */ `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
      id
      name
      type
      description
      additionalInfo
      documentation
      initialBid
      startDate
      endDate
      bids {
        items {
          id
          amount
          date
          author
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          assetBidsId
        }
        nextToken
        startedAt
      }
      author
      estado
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
      id
      amount
      date
      asset {
        id
        name
        type
        description
        additionalInfo
        documentation
        initialBid
        startDate
        endDate
        bids {
          nextToken
          startedAt
        }
        author
        estado
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      author
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      assetBidsId
    }
  }
`;
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
      id
      amount
      date
      asset {
        id
        name
        type
        description
        additionalInfo
        documentation
        initialBid
        startDate
        endDate
        bids {
          nextToken
          startedAt
        }
        author
        estado
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      author
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      assetBidsId
    }
  }
`;
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
      id
      amount
      date
      asset {
        id
        name
        type
        description
        additionalInfo
        documentation
        initialBid
        startDate
        endDate
        bids {
          nextToken
          startedAt
        }
        author
        estado
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      author
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      assetBidsId
    }
  }
`;
