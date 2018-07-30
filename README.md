# Good Books

Find and rate books you love!

## Getting Started

These instructions will walk you through copying running the project locally for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

Node.js JavaScript Runtime

```
Give examples
```

### Installing

Follow these steps to get a development environment running.

Clone the project to get a copy of the project locally from the command line:

```
git clone git@github.com:cardinal-solutions/good-books.git <folder-name>
```

Point your terminal to the `<folder-name>` direcrory:

```
cd <folder-name>
```

Start the development server:

```
yarn start
```

A list of all the commands available in this project can be found in the package.json.

## Running the tests

This project is created using [create-react-app](https://github.com/facebook/create-react-app), using Jest as its test runner. See the [Jest documentation on testing react apps](https://jestjs.io/docs/en/tutorial-react) as a guide for how to create test suites for new components.

To run tests defined in the `/tests/` directory:

```
yarn test
```

### Coding Style

We use [prettier](https://github.com/prettier/prettier) to enforce coding style standards and [lynt](https://github.com/saadq/lynt) to check for code smells and potential errors. These workflows run through precommit hooks defined in the package.json, to prevent committing bad code.

# Deployment

TBD.

## Built With

- [Open Library API](https://openlibrary.org/developers/api) - A suite of RESTful APIs that allow us to interact with Open Library data.

## Contributing

Please read [CONTRIBUTING.md](../docs/CONTRIBUTING.md) for details on the process for submitting pull requests to good-books.
