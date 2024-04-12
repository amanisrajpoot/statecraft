//"use client";

import Link from "next/link";
import {
  menuItems,
  courseItems,
  downloadItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
  moreItems,
} from "@/data/menu";

import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_01.png"
                  alt="logo"
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          {/* About */}
          <li className="nav-item dropdown">
            <a
              className={menuItems.some((menu) =>
                menu.subItems?.some((elm) => isActive(elm.link))
              ) ? "nav-link dropdown-toggle active-menu" : "nav-link dropdown-toggle"}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              About
            </a>
            <ul className="dropdown-menu">
              {menuItems.map((item, index) => (
                <li className={item.isSubmenu ? "dropdown-submenu dropdown" : ""} key={index}>
                  <a
                    className={item.isSubmenu ? "dropdown-item dropdown-toggle" : isActive(item.link) ? "dropdown-item active" : "dropdown-item"}
                    href={item.isSubmenu ? "#" : item.link}
                    data-bs-toggle={item.isSubmenu ? "dropdown" : undefined}
                    data-bs-auto-close={item.isSubmenu ? "outside" : undefined}
                    aria-expanded={item.isSubmenu ? "false" : undefined}
                  >
                    <span>{item.title}</span>
                  </a>
                  {item.isSubmenu && (
                    <ul className="dropdown-menu">
                      {item.subItems?.map((subMenu, i) => (
                        <li key={i}>
                          <Link
                            href={subMenu.link}
                            className={`dropdown-item ${isActive(subMenu.link) ? "active" : ""}`}
                          >
                            <span>{subMenu.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
          
          {/* Courses */}
          <li className="nav-item dropdown">
            <a
              className={courseItems.some((menu) =>
                menu.subItems?.some((elm) => isActive(elm.link))
              ) ? "nav-link dropdown-toggle active-menu" : "nav-link dropdown-toggle"}
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Courses
            </a>
            <ul className="dropdown-menu">
              {courseItems.map((item, index) => (
                <li className={item.isSubmenu ? "dropdown-submenu dropdown" : ""} key={index}>
                  <a
                    className={item.isSubmenu ? "dropdown-item dropdown-toggle" : isActive(item.link) ? "dropdown-item active" : "dropdown-item"}
                    href={item.isSubmenu ? "#" : item.link}
                    data-bs-toggle={item.isSubmenu ? "dropdown" : undefined}
                    data-bs-auto-close={item.isSubmenu ? "outside" : undefined}
                    aria-expanded={item.isSubmenu ? "false" : undefined}
                  >
                    <span>{item.title}</span>
                  </a>
                  {item.isSubmenu && (
                    <ul className="dropdown-menu">
                      {item.subItems?.map((subMenu, i) => (
                        <li key={i}>
                          <Link
                            href={subMenu.link}
                            className={`dropdown-item ${isActive(subMenu.link) ? "active" : ""}`}
                          >
                            <span>{subMenu.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
          {/* End li (Courses) */}

          {/* <li className="nav-item  dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                pagesItems.some((menu) =>
                  menu.subItems.some((elm) => isActive(elm.link))
                ) ||
                isActive("/pages-menu/pricing") ||
                isActive("/pages-menu/testimonials")
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Pages
            </a>
            <ul className="dropdown-menu">
              {pagesItems.map((item, index) => (
                <li className="dropdown-submenu dropdown" key={index}>
                  <a
                    // className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    className={
                      item.subItems.some((elm) => isActive(elm.link))
                        ? "dropdown-item dropdown-toggle active-menu"
                        : "dropdown-item dropdown-toggle"
                    }
                    href="#"
                  >
                    <span>{item.title}</span>
                  </a>
                  <ul className="dropdown-menu">
                    {item.subItems.map((subMenu, i) => (
                      <li key={i}>
                        <Link
                          href={subMenu.link}
                          className={`dropdown-item ${
                            isActive(subMenu.link) ? "active" : ""
                          }`}
                        >
                          <span>{subMenu.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End li (pages) */}

          {/* <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                portfolioItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Portfolio
            </a>
            <ul className="dropdown-menu">
              {portfolioItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End li (portfolio) */}

          <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                blogItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              Study Material
            </a>
            <ul className="dropdown-menu">
              {blogItems.map((blog, index) => (
                <li key={index}>
                  <Link
                    href={blog.link}
                    className={`dropdown-item ${
                      isActive(blog.link) ? "active" : ""
                    }`}
                  >
                    <span>{blog.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* End li (blog) */}

          <li className="nav-item">
            <Link
              href="/downloads"
              className={`nav-link ${isActive("/contact/contact-v2") ? "active" : ""}`}
            >
              Downloads
            </Link>
          </li>
          {/* End li (contact) */}

          <li className="nav-item">
            <Link
              href="/infographics"
              className={`nav-link ${isActive("/contact/contact-v2") ? "active" : ""}`}
            >
              Infographics
            </Link>
          </li>
          {/* End li (contact) */}

          {/* <li className="nav-item">
            <Link
              href="/contact/contact-v2"
              className={`nav-link ${isActive("/contact/contact-v2") ? "active" : ""}`}
            >
              Contact
            </Link>
          </li> */}
          {/* End li (contact) */}

          {/* <li className="nav-item dropdown">
            <a
              // className="nav-link dropdown-toggle"
              className={
                moreItems.some((elm) => isActive(elm.link))
                  ? "nav-link dropdown-toggle active-menu"
                  : "nav-link dropdown-toggle"
              }
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              More
            </a>
            <ul className="dropdown-menu">
              {moreItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className={`dropdown-item ${
                      isActive(item.link) ? "active" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li> */}
          {/* End li (More) */}
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="/contact/contact-v2"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
