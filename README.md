# @lcf.vs/collection-api

[PRERELEASE] A `@lcf.vs/collection` API

## Examples
[`npm run example-root`](./example/root.js)
```json
{
  "collection": {
    "href": "https://api.localhost",
    "version": "1.0",
    "links": [
      {
        "href": "https://docs.localhost",
        "rel": "help"
      }
    ],
    "items": [
      {
        "data": [
          {
            "name": "name",
            "value": "accounts"
          }
        ],
        "href": "/accounts"
      }
    ]
  }
}
```

[`npm run example-account`](./example/account.js)
```json
{
  "collection": {
    "href": "/accounts/create",
    "version": "1.0",
    "links": [
      {
        "href": "/accounts",
        "rel": "collection"
      }
    ],
    "items": [
      {
        "data": [
          {
            "name": "id",
            "value": 1
          },
          {
            "name": "name",
            "value": "Lcf.vs"
          }
        ],
        "href": "/accounts/1",
        "links": [
          {
            "href": "https://github.com/Lcfvs",
            "rel": "github"
          }
        ]
      }
    ]
  }
}
```

[`npm run example-accounts`](./example/accounts.js)
```json
{
  "collection": {
    "href": "/accounts",
    "version": "1.0",
    "links": [
      {
        "href": "https://api.localhost",
        "rel": "collection"
      }
    ],
    "queries": [
      {
        "href": "/accounts/create",
        "prompt": "Create an account",
        "rel": "create",
        "data": [
          {
            "name": "name",
            "prompt": "Account name"
          }
        ],
        "links": [
          {
            "rel": "github",
            "prompt": "Account GitHub"
          }
        ]
      },
      {
        "href": "/accounts/search-by-name",
        "prompt": "Search an account by its name",
        "rel": "search",
        "data": [
          {
            "name": "name",
            "prompt": "Account name"
          }
        ]
      }
    ],
    "template": {
      "data": [
        {
          "name": "id",
          "prompt": "Account ID"
        },
        {
          "name": "name",
          "prompt": "Account name"
        }
      ],
      "links": [
        {
          "rel": "github",
          "prompt": "Account GitHub"
        }
      ]
    }
  }
}
```

[`npm run example-error`](./example/error.js)
```json
{
  "collection": {
    "href": "/accounts/create",
    "version": "1.0",
    "links": [
      {
        "href": "https://api.localhost",
        "rel": "collection"
      }
    ],
    "error": {
      "code": "INVALID_ACCOUNT",
      "message": "Invalid account",
      "details": [
        {
          "message": "Invalid account name",
          "name": "name"
        }
      ]
    }
  }
}
```
