/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAsset = /* GraphQL */ `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
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
      state
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listAssets = /* GraphQL */ `
  query ListAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAssets = /* GraphQL */ `
  query SyncAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        state
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBid = /* GraphQL */ `
  query GetBid($id: ID!) {
    getBid(id: $id) {
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
        state
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
export const listBids = /* GraphQL */ `
  query ListBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          author
          state
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
      nextToken
      startedAt
    }
  }
`;
export const syncBids = /* GraphQL */ `
  query SyncBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBids(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          author
          state
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
      nextToken
      startedAt
    }
  }
`;
