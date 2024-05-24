"use client"
import { useState, useEffect } from "react";
import DefaultHeader from "@/components/header/DefaulHeader";
import DefaultFooter from "@/components/footer/DefaultFooter";
import Pagination from "@/components/blog/Pagination";
import SearchBox from "@/components/blog/SearchBox";
import Category from "@/components/blog/Category";
import RecentPost from "@/components/blog/RecentPost";
import BannerPost from "@/components/blog/BannerPost";
import Blog2 from "@/components/blog/Blog2";
import Link from "next/link";

const GridWithSidebar = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10; // Display 10 posts per page
  const totalPostsToFetch = 30; // Fetch 30 posts initially

  useEffect(() => {
    fetch(`https://statecraft.in/wp-json/wp/v2/posts?per_page=${totalPostsToFetch}&_embed`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* <!--
      =============================================
      Theme Default Menu
      ==============================================  
      --> */}
      <DefaultHeader />

      {/*
      =============================================
      Feature Section Fifty One
      ==============================================
      */}
      {/* ... */}

      {/*
      =====================================================
        Blog Section Five
      =====================================================
      */}
      <div className="blog-section-five mt-70 lg-mt-30">
        <div className="container">
          <div className="border-bottom pb-130 lg-pb-60">
            <div className="row gx-xl-5">
              <div className="col-lg-8">
              <div className="page-pagination-one pt-15">
              <h2 className="blog-heading-one tx-dark">Current Affairs And Editorials</h2>
                    
                </div>
                <div className="blog-meta-wrapper pe-xxl-5">
                  <div className="row">
                    {currentPosts.map((post) => (
                      <div
                      key={post.id}
                      className="col-lg-6 col-sm-6"
                      data-aos="fade-up"
                    >
                      <div className="blog-meta-two blog-two-group mb-30">
                        <div className="blog-image-two mb-25">
                          <img
                            src={
                              post.featured_media_urls?.medium ||
                              post.featured_media_urls?.full ||
                              "/images/blog/blog_10.jpg"
                            }
                            alt=" "
                            className="lazy-img"
                          />
                        </div>
                        <div className="blog-text-two">
                          <div className="blog-content">
                            <h3>
                              <a href={`/blog/${post.id}`} className="tx-dark hov-mdprimary">
                                {post.title.rendered}
                              </a>
                            </h3>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt.rendered,
                              }}
                            />
                            <div className="blog-datecate">
                              <Link href={`/blog/${post.id}`} className="btn-link">
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
                {/* /.blog-meta-wrapper */}
                <div className="page-pagination-one pt-15">
                  <Pagination
                    totalPosts={posts.length}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
              {/* End .col-lg-8 */}
              {/* ... */}
            </div>
          </div>
        </div>
      </div>

      {/*
        =============================================
        Contact Section One
        ==============================================
        */}
      <DefaultFooter />
    </>
  );
};

export default GridWithSidebar;