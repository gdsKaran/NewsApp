"use client";
import Link from "next/link";
import OnHoverLink from "./onHoverMove";
import { useState } from "react";
import classes from "./news-list.module.css";

export default function NewsList({ news }) {
  const [hoverItem, setHoverItem] = useState(false);
  return (
    <>
      <ul className={classes.newsList}>
        {news.map((i) => (
          <li
            key={i.id}
            onMouseEnter={() => setHoverItem(true)}
            onMouseLeave={() => setHoverItem(false)}
          >
            <div className={classes.imageContainer}>
              <Link href={`/news/${i.slug}`}>
                <img src={`/images/news/${i.image}`} alt={i.title} />
                {hoverItem && (
                  <div className={classes.hoverContent}>
                    <span>{i.content}</span>
                  </div>
                )}
              </Link>
            </div>
            <div className={classes.defaultDetails}>{i.title}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

/* <ul className="news-list">
        {news.map((i) => (
          <li key={i.id}>
         
            <Link href={`/news/${i.slug}`}>
              <img src={`/images/news/${i.image}`} alt={i.title} />
              <OnHoverLink slug={i.slug} title={i.title} />
            </Link>
          </li>
        ))}
      </ul> */
