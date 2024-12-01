import { getNewsItem } from "@/lib/news";
import { OnMove } from "@/components/onHoverBack";

export default async function HoverView({ params }) {
  const slug = params.slug;
  const newsSlug = await getNewsItem(slug);

  return (
    <>
      <div className="modal-backdrop" onClick={OnMove} />
      <dialog className="modal" open>
        <div className="fullscreen-image">{newsSlug.content}</div>
      </dialog>
    </>
  );
}
