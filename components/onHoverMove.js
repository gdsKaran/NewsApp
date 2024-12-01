"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function OnHoverLink({ slug, title }) {
  const router = useRouter();
  const handler = () => {
    router.push(`/news/${slug}/hoverView`);
  };

  return (
    <Link href={`/news/${slug}/hoverView`}>
      <span onMouseEnter={handler}>{title}</span>
    </Link>
  );
}
