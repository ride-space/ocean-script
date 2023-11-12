export type Article = {
  _id: string;
  title: string;
  slug: string;
  body: string;
  coverImage: {
    _id: string;
    src: string;
    fileName: string;
    fileType: string;
    fileSize: number;
    width: number;
    height: number;
    title: string;
    altText: string;
    description: string;
    // metadata: {};
  };
};

// {
//   "_id": "_id",
//   "_sys": {
//     "createdAt": "2022-01-01T00:00:00.000Z",
//     "updatedAt": "2022-01-01T00:00:00.000Z",
//     "raw": {
//       "createdAt": "2022-01-01T00:00:00.000Z",
//       "updatedAt": "2022-01-01T00:00:00.000Z",
//       "firstPublishedAt": "2022-01-01T00:00:00.000Z",
//       "publishedAt": "2022-01-01T00:00:00.000Z"
//     }
//   },
//   "title": "text",
//   "slug": "text",
//   "meta": {
//     "title": "text",
//     "description": "text",
//     "ogImage": {
//       "_id": "imageId",
//       "src": "imageUrl",
//       "fileName": "example.png",
//       "fileType": "image/png",
//       "fileSize": 12345678,
//       "width": 600,
//       "height": 400,
//       "title": "example",
//       "altText": "example image",
//       "description": "",
//       "metadata": {}
//     }
//   },
//   "body": "<p>Plain text is available using the fmt operator.</p>",
//   "coverImage": {
//     "_id": "imageId",
//     "src": "imageUrl",
//     "fileName": "example.png",
//     "fileType": "image/png",
//     "fileSize": 12345678,
//     "width": 600,
//     "height": 400,
//     "title": "example",
//     "altText": "example image",
//     "description": "",
//     "metadata": {}
//   },
//   "author": "referenceId",
//   "tags": [
//     "referenceId"
//   ]
// }
