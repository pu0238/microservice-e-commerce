# E-commerce

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## The content of the task
Site, enables users to buy products from across two categories: 
- electronics ✔️
- clothing ✔️

Each category should have its own nestjs microservice that manages the products within that category. ✔️

Design and implement single GraphQL API that allows customers to browse and search for products (by product name or part of the name) across all categories.✔️

You need to implement these two micro services as described above and for the API, only the search api as described above (and whatever needed for this task)
prepare mock data for products ( 20 products for each category in its own micro service) ✔️

## Example GraphQL queries and mutations

GraphQL playground: http://[::1]:4000/graphql

### Clothing

Get all products
```
{
  getClothingProducts{
    id,
    name
  }
}
```

Get specific products quentity
```
{
  getClothingProducts(quantity: 3){
    id,
    name
  }
}
```

Get product by id
```
{
  getClothingProduct(id: "da1bfc63-8fc6-4b61-a21b-4f4c3a8fbf84"){
    id,
    name
  }
}
```

Add new product
```
mutation {
  createClothingProduct(input: {
    name: "Jeansy straight fit"
  	description: "Blue jeans"
  	category: "Jeansy"
  	price: 99.99
  	image: "https://example.com/blue-jeans "
  }) {
    id,
    name
  }
}
```

Edit product
```
mutation {
  updateClothingProduct(
  id: "bc5a56cf-5402-4492-8fe8-40eef720e18d",
  input: {
    name: "Jeansy straight fit"
  	description: "Blue jeans"
  	category: "Jeansy"
  	price: 69.99
  	image: "https://example.com/blue-jeans "
  }) {
    id,
    name,
    price
  }
}
```

Delete product
```
mutation {
  deleteClothingProduct(id: "da1bfc63-8fc6-4b61-a21b-4f4c3a8fbf84")
}
```

### Electronics

Get all products
```
{
  getElectronicsProducts{
    id,
    name
  }
}
```

Get specific products quentity
```
{
  getElectronicsProducts(quantity: 3){
    id,
    name
  }
}
```

Get product by id
```
{
  getElectronicsProduct(id: "89a8c47d-2a56-4c53-92f1-83c19b0f77c1"){
    id,
    name
  }
}
```

Add new product
```
mutation {
  createElectronicsProduct(input: {
    name: "Apple iPhone SE"
  	description: "Red iPhone"
  	category: "Phone"
  	price: 1209.99
  	image: "https://example.com/red-iphone "
  }) {
    id,
    name
  }
}
```

Edit product
```
mutation {
  updateElectronicsProduct(
  id: "ae9fb7a8-be44-4457-9ffe-9d4870faa170",
  input: {
    name: "Apple iPhone SE"
  	description: "Red iPhone"
  	category: "Phone"
  	price: 129.99
  	image: "https://example.com/red-iphone "
  }) {
    id,
    name,
    price
  }
}
```

Delete product
```
mutation {
  deleteElectronicsProduct(id: "ae9fb7a8-be44-4457-9ffe-9d4870faa170")
}
```

### Search

```
{
  searchProduct(text: "i"){
    name,
    id,
    image,
    source
  }
}
```