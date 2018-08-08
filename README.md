# Good Books

Find and rate books you love!

## Getting Started

These instructions will walk you through running the project locally for development and testing purposes. See [deployment](#deployment) for instructions on how to deploy good books on a live system.

## Prerequisites

[Node.js](https://nodejs.org/en/download/) - JavaScript Runtime. See their documentation for download instructions for your operating system.

## Installing

Follow these steps to get a development environment running:

To get a copy of the project locally, clone the repository from the command line:

```
git clone git@github.com:cardinal-solutions/good-books.git
```

Point your terminal to the newly created `good-books` directory:

```
cd good-books
```

Start the development server:

```
yarn start
```

The full list of commands can be found in the package.json.

## Running the tests

Good Books was created using [create-react-app](https://github.com/facebook/create-react-app), using Jest as its test runner. See the [Jest documentation on testing react apps](https://jestjs.io/docs/en/tutorial-react) as a guide for how to create test suites for new components.

To run tests defined in the `/tests/` directory:

```
yarn test
```

## Coding Style

We use [prettier](https://github.com/prettier/prettier) to enforce coding style standards and [lynt](https://github.com/saadq/lynt) to check for code smells and potential errors. These workflows run through precommit hooks defined in the package.json, to prevent committing bad code.

## Deployment

@TODO add deployment steps.

## Built With

- [Open Library API](https://openlibrary.org/developers/api) - A suite of RESTful APIs that allow us to interact with Open Library data.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/cardinal-solutions/good-books/blob/master/docs/CONTRIBUTING.md) for details on the process for submitting pull requests to good-books.
