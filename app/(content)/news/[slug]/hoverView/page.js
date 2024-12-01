import { getNewsItem } from "@/lib/news";

export default async function HoverView({ params }) {
  const slug = params.slug;
  const newsSlug = await getNewsItem(slug);

  return (
    <>
      <div className="fullscreen-image">{newsSlug.content}</div>
    </>
  );
}
