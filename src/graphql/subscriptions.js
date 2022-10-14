/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset($author: String) {
    onCreateAsset(author: $author) {
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset($author: String) {
    onUpdateAsset(author: $author) {
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset($author: String) {
    onDeleteAsset(author: $author) {
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
export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid($author: String) {
    onCreateBid(author: $author) {
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
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid($author: String) {
    onUpdateBid(author: $author) {
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
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid($author: String) {
    onDeleteBid(author: $author) {
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
