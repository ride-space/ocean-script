export type ArticleListItem = {
  _id: string;
  title: string;
  slug: string;
  coverImage: {
    _id: string;
    altText: string;
    description: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    height: number;
    // metadata: {},
    src: string;
    title: string;
    width: number;
  };
  _sys: {
    // raw: [Object],
    createdAt: '2021-12-09T02:21:30.173Z';
    updatedAt: '2022-09-20T10:20:59.606Z';
  };
  tags: { name: string; slug: string }[];
  category: { name: string; slug: string };
};

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

  tags: { name: string; slug: string }[];
  category: { name: string; slug: string };
};
