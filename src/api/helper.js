import { getBook, getBookFullData } from './book';

/* @TODO delete reference / mock data later
  import { renderThumbnail } from './api/helper';
  const bookID = 'ISBN:0385472579';
  {renderThumbnail(bookID)}
*/

/* Base Parse Book Data Example for any micro functions
export const parseBook = book => {
  getBook(book).then(result => {
    console.log('result: ', result[book]);
  });
};
*/

export const getBookData = book => {
  return getBook(book).then(result =>
    Promise.resolve(result[book])
  );
};

export const getFullBookData = book => {
  return getBookFullData(book).then(result =>
    Promise.resolve(result[book])
  );
};

export const getBookBibKey = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.bib_key)
  );
};

export const getBookPreview = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.preview)
  );
};

export const getBookThumbnailUrl = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.thumbnail_url)
  );
};

export const getBookPreviewUrl = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.preview_url)
  );
};

export const getBookInfoUrl = book => {
  return getBookData(book).then(result =>
    Promise.resolve(result.info_url)
  );
};

/* publisher data type: [{"name": "Addison-Wesley"}] */
export const getBookPublishers = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.publishers)
  );
};

/* pagination data type: "xiii, 657 p. :" */
export const getBookPagination = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.publishers)
  );
};

/* indentifiers data type:
  {
    "lccn": [
        "93040325"
    ],
    "openlibrary": [
        "OL1429049M"
    ],
    "isbn_10": [
        "0201558025"
    ],
    "wikidata": [
        "Q15303722"
    ],
    "librarything": [
        "45844"
    ],
    "goodreads": [
        "112243"
    ]
  }
*/
export const getBookIndentifiers = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.identifiers)
  );
};

/* subtitle data type: "a foundation for computer science" */
export const getBookSubtitle = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.subtitle)
  );
};

/* title data type: "Concrete mathematics" */
export const getBookTitle = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.title)
  );
};

/* url data type: "http://openlibrary.org/books/OL1429049M/Concrete_mathematics" */
export const getBookUrl = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.url)
  );
};

/*
"classifications": {
    "dewey_decimal_class": [
        "510"
    ],
    "lc_classifications": [
        "QA39.2 .G733 1994"
    ]
  },
*/
export const getBookClassifications = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.classifications)
  );
};

/*
"notes": "Includes bibliographical references (p. 604-631) and index.",
*/
export const getBookNotes = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.notes)
  );
};

/*
"number_of_pages": 657,
*/
export const getBookNumberOfPages = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.number_of_pages)
  );
};

/*
"cover": {
  "small": "https://covers.openlibrary.org/b/id/135182-S.jpg",
  "large": "https://covers.openlibrary.org/b/id/135182-L.jpg",
  "medium": "https://covers.openlibrary.org/b/id/135182-M.jpg"
},
*/
export const getBookCover = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.cover)
  );
};

/*
"subjects": [
  {
    "url": "https://openlibrary.org/subjects/computer_science",
    "name": "Computer science"
  },
  {
    "url": "https://openlibrary.org/subjects/mathematics",
    "name": "Mathematics"
  }
],
*/
export const getBookSubjects = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.subjects)
  );
};

/*
"publish_date": "1994",
*/
export const getBookPublishDate = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.publish_date)
  );
};

/*
"key": "/books/OL1429049M",
*/
export const getBookKey = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.key)
  );
};

/*
"authors": [
  {
    "url": "http://openlibrary.org/authors/OL720958A/Ronald_L._Graham",
    "name": "Ronald L. Graham"
  },
  {
    "url": "http://openlibrary.org/authors/OL229501A/Donald_Knuth",
    "name": "Donald Knuth"
  },
  {
    "url": "http://openlibrary.org/authors/OL2669938A/Oren_Patashnik",
    "name": "Oren Patashnik"
  }
],
*/
export const getBookAuthors = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.authors)
  );
};

/*
"by_statement": "Ronald L. Graham, Donald E. Knuth, Oren Patashnik.",
*/
export const getBookByStatement = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.by_statement)
  );
};

/*
"publish_places": [
  {
    "name": "Reading, Mass"
  }
],
*/
export const getBookPublishPlaces = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.publish_places)
  );
};

/*
"ebooks": [
  {
    "formats": {},
    "preview_url": "https://archive.org/details/concretemathemat00grah_444",
    "availability": "restricted"
  }
]
*/
export const getBookEbooks = book => {
  return getFullBookData(book).then(result =>
    Promise.resolve(result.ebooks)
  );
};

/* @TODO integrate async data with componentWillMount
and in result promise returns setState value

  export const parseBook = book => {
    getBookInfoUrl(book).then(result => {
      console.log(result);
    });
  };

*/
