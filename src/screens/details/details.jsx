import React from 'react'
import PropTypes from 'prop-types'

const Deatils = props => {
    const { book } = props;
    return (
        <div>
            <img src={book.imageLinks?.thumbnail} alt="book" />
            <h1>{book?.title}</h1>
            <h2>{book?.subtitle}</h2>
            {book?.authors && book?.authors.map((author, index) => {
                return <h4 key={index}>{author}</h4>
            })}
            <h4>Published by {book?.publisher} on {book?.publishedDate}</h4>
            <p>{book?.description}</p>

            <a target='#' href={book?.infoLink}>Read more</a>

        </div>
    )
}

Deatils.propTypes = {
    book: PropTypes.object.isRequired
}

export default Deatils




// {
//     "kind": "books#volume",
//         "id": "LpctBAAAQBAJ",
//             "etag": "gydRvL8ouIU",
//                 "selfLink": "https://www.googleapis.com/books/v1/volumes/LpctBAAAQBAJ",
//                     "volumeInfo": {
//         "title": "JavaScript and JQuery",
//             "subtitle": "Interactive Front-End Web Development",
//                 "authors": [
//                     "Jon Duckett"
//                 ],
//                     "publisher": "John Wiley & Sons",
//                         "publishedDate": "2014-06-30",
//                             "description": "Provides information on how to make more interactive, engaging, and usable Web pages with JavaScript and jQuery, covering core programming concepts in both and such techniques as animation, form validation, and interactive galleries.",
//                                 "industryIdentifiers": [
//                                     {
//                                         "type": "ISBN_13",
//                                         "identifier": "9781118531648"
//                                     },
//                                     {
//                                         "type": "ISBN_10",
//                                         "identifier": "1118531647"
//                                     }
//                                 ],
//                                     "readingModes": {
//             "text": false,
//                 "image": true
//         },
//         "pageCount": 622,
//             "printType": "BOOK",
//                 "categories": [
//                     "Computers"
//                 ],
//                     "averageRating": 5,
//                         "ratingsCount": 1,
//                             "maturityRating": "NOT_MATURE",
//                                 "allowAnonLogging": false,
//                                     "contentVersion": "0.9.1.0.preview.1",
//                                         "panelizationSummary": {
//             "containsEpubBubbles": false,
//                 "containsImageBubbles": false
//         },
//         "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=LpctBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//                 "thumbnail": "http://books.google.com/books/content?id=LpctBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//             "previewLink": "http://books.google.co.in/books?id=LpctBAAAQBAJ&pg=PA145&dq=Javascript&hl=&cd=1&source=gbs_api",
//                 "infoLink": "http://books.google.co.in/books?id=LpctBAAAQBAJ&dq=Javascript&hl=&source=gbs_api",
//                     "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript_and_JQuery.html?hl=&id=LpctBAAAQBAJ"
//     },
//     "saleInfo": {
//         "country": "IN",
//             "saleability": "NOT_FOR_SALE",
//                 "isEbook": false
//     },
//     "accessInfo": {
//         "country": "IN",
//             "viewability": "PARTIAL",
//                 "embeddable": true,
//                     "publicDomain": false,
//                         "textToSpeechPermission": "ALLOWED",
//                             "epub": {
//             "isAvailable": false
//         },
//         "pdf": {
//             "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=LpctBAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
//             "accessViewStatus": "SAMPLE",
//                 "quoteSharingAllowed": false
//     },
//     "searchInfo": {
//         "textSnippet": "This book will teach you how to make your websites more interactive, engaging, and usable. It does this by combining programming theory with examples that demonstrate how JavaScript and jQuery are used on popular sites."
//     }
// }