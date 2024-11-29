interface BlogProps {
  title: string;
  coverImage: string;
  image: string;
  slug: string;
  excerpt: string;
  postSlug: string;
  id: number;
  name: string;
  createdAt: string;
  tags: [
    {
      description: string;
      name: string;
      tagSlug: string;
      updatedAt: string;
      image: string;
    }
  ];
}
interface TagsProps {
  id: number;
  name: string;
  tagSlug: string;
  description: string;
  image: string;
}
