export const menuItems = [
  {
    title: "About Us",
    link: "/pages-menu/about-us",
    isSubmenu: false,
  },
  {
    title: "UPSC",
    subItems: [
      { title: "About UPSC", link: "/pages-menu/about-us-v2" },
      { title: "UPSC Prelims Syllabus", link: "/pages-menu/about-us-v2" },
      { title: "UPSC Mains Syllabus", link: "/pages-menu/about-us-v2" },
    ],
    isSubmenu: true,
  },
  {
    title: "KPSC Courses",
    subItems: [
      { title: "About KPSC", link: "/pages-menu/about-us-v2" },
      { title: "KPSC Prelims Syllabus", link: "/pages-menu/about-us-v2" },
      { title: "KPSC Mains Syllabus", link: "/pages-menu/about-us-v2" },
    ],
    isSubmenu: true,
  },
];

export const courseItems = [
  {
    title: "All Courses",
    link: "/courses",
    isSubmenu: false,
  },
  {
    title: "UPSC Courses",
    subItems: [
      { title: "Interview Preparation", link: "/courses/2" },
    ],
    isSubmenu: true,
  },
  {
    title: "KPSC Courses",
    subItems: [
      { title: "3 Days Crash Course", link: "/courses/3" },
      { title: "Focus 40", link: "/courses/4" },
      { title: "Focus 60", link: "/courses/5" },
    ],
    isSubmenu: true,
  },
];

export const downloadItems = [];

export const moreItems = [
  { name: "Downloads", link: "/downloads" },
  { name: "Infographics", link: "/infographics" },
];

export const menuItemsBak = [
  {
    title: "Business",
    items: [
      { title: "Insurance", link: "/" },
      { title: "Web Hosting", link: "/home/web-hosting" },
      { title: "Education", link: "/home/education" },
      { title: "N.P. Charity", link: "/home/charity" },
      { title: "Real Estate", link: "/home/real-estate" },
    ],
  },
  {
    title: "Landing",
    items: [
      { title: "Sass Product", link: "/home/sass-product" },
      { title: "App Landing", link: "/home/app-landing" },
      { title: "Crypto", link: "/home/crypto" },
      { title: "Personal Portfolio", link: "/home/personal-portfolio" },
    ],
  },
  {
    title: "Agency",
    items: [
      { title: "Agency Modern", link: "/home/agency-modern" },
      { title: "SEO & Digital Agency", link: "/home/seo-agency" },
      { title: "Design Agency", link: "/home/design-agency" },
      { title: "Lead Generation", link: "/home/lead-generation" },
    ],
  },
];

export const pagesItems = [
  {
    title: "About Us",
    subItems: [
      { title: "About - Insurance", link: "/pages-menu/about-us-v1" },
      { title: "About - Real Estate", link: "/pages-menu/about-us-v2" },
      { title: "About - Agency", link: "/pages-menu/about-us-v3" },
      { title: "About - Lead Generation", link: "/pages-menu/about-us-v4" },
    ],
  },
  {
    title: "Services",
    subItems: [
      { title: "Service - Insurance", link: "/pages-menu/service-v1" },
      { title: "Service - Real Estate", link: "/pages-menu/service-v2" },
      { title: "Service Lead Generation", link: "/pages-menu/service-v3" },
      { title: "Service Agency", link: "/pages-menu/service-v4" },
      { title: "Service Details", link: "/pages-menu/service-details" },
    ],
  },
  {
    title: "Our Team",
    subItems: [
      { title: "Team One", link: "/pages-menu/team-v1" },
      { title: "Team Two", link: "/pages-menu/team-v2" },
    ],
  },

  {
    title: "Pricing",
    subItems: [
      { title: "Pricing", link: "/pages-menu/pricing" },
      { title: "Pricing - Sass Product", link: "/pages-menu/pricing-v2" },
      { title: "Pricing -  Web Hosting", link: "/pages-menu/pricing-v3" },
    ],
  },
  {
    title: "Features",
    subItems: [
      { title: "Features - Sass Product", link: "/pages-menu/features-v1" },
      { title: "Features - Web Hosting", link: "/pages-menu/features-v2" },
    ],
  },
  {
    title: "Other Pages",
    subItems: [
      { title: "Testimonials", link: "/pages-menu/testimonials" },
      { title: "FAQ", link: "/pages-menu/faq" },
      { title: "Signin", link: "/login" },
      { title: "Signup", link: "/signup" },
      { title: "404 Error", link: "/404" },
    ],
  },
];

export const portfolioItems = [
  { name: "Portfolio 01", link: "/portfolio/portfolio-v1" },
  { name: "Portfolio 02", link: "/portfolio/portfolio-v2" },
  { name: "Portfolio 03", link: "/portfolio/portfolio-v3" },
  { name: "Portfolio 04", link: "/portfolio/portfolio-v4" },
  { name: "Portfolio 05", link: "/portfolio/portfolio-v5" },
  { name: "Portfolio 06", link: "/portfolio/portfolio-v6" },
  { name: "Portfolio 07", link: "/portfolio/portfolio-v7" },
  { name: "Portfolio Details", link: "/portfolio/1" },
];

export const blogItems = [
  { link: "/blog/blog-v1", text: "Editorial" },
  { link: "/blog/blog-v2", text: "Current Affair" },
];
export const contactItems = [
  { link: "/contact/contact-v1", text: "Contact - Insurance" },
  { link: "/contact/contact-v2", text: "Contact - Agency" },
  { link: "/contact/contact-v3", text: "Contact - Web Hosting" },
  { link: "/contact/contact-v4", text: "Contact - L.Generation" },
];

export const navItems = [
  {
    label: "Home",
    submenuItems: [
      { title: "Insurance", link: "/" },
      { title: "Web Hosting", link: "/home/web-hosting" },
      { title: "Education", link: "/home/education" },
      { title: "N.P. Charity", link: "/home/charity" },
      { title: "Real Estate", link: "/home/real-estate" },
      { title: "Sass Product", link: "/home/sass-product" },
      { title: "App Landing", link: "/home/app-landing" },
      { title: "Crypto", link: "/home/crypto" },
      { title: "Personal Portfolio", link: "/home/personal-portfolio" },
      { title: "Agency Modern", link: "/home/agency-modern" },
      { title: "SEO & Digital Agency", link: "/home/seo" },
      { title: "Design Agency", link: "/home/design-agency" },
      { title: "Lead Generation", link: "/home/lead-generation" },
    ],
  },
  { title: "About", link: "/pages-menu/about-us-v1" },
  { title: "Service", link: "/pages-menu/service-v1" },
  { title: "Portfolio", link: "/portfolio/portfolio-v1" },
  { title: "Grid With sidebar", link: "/blog/blog-v2" },
  { title: "Contact us", link: "/contact/contact-v1" },
];
