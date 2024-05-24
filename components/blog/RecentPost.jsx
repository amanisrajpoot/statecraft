"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const RecentPost = () => {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetch("https://statecraft.in/wp-json/wp/v2/posts?per_page=3")
      .then((response) => response.json())
      .then((data) => {
        setRecentPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching recent posts:", error);
      });
  }, []);

  return (
    <>
      {recentPosts.map((post) => (
        <div
          className="news-block d-flex align-items-center pt-20 pb-20 border-top border-bottom"
          key={post.id}
        >
          <div>
            <Image
              width={80}
              height={90}
              src={post.imageSrc}
              alt={post.title.rendered}
              className="lazy-img"
            />
          </div>
          <div className="post ps-4">
            <h4 className="mb-5">
              <Link href={`/blog/${post.id}`} className="title tran3s">
                {post.title.rendered}
              </Link>
            </h4>
            <div className="date">{post.date}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentPost;
