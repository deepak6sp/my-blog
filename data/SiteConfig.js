module.exports = {
  blogPostDir: "blog-posts", // The name of directory that contains your posts.
  siteTitle: "Deepak Pixel", // Site title.
  siteTitleAlt: "Deepak Pixel blog", // Alternative site title for SEO.
  siteLogo: "/logos/website-logo.png", // Logo used for SEO and manifest.
  siteUrl: "https://deepakpixel.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "IT Tech blog by Deepak Prakash - a melbourne based full stack developer.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  // siteGATrackingID: "UA-47311644-4", // Tracking code ID for google analytics.
  // disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Deepak Prakash", // Username to display in the author segment.
  // userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  // userLocation: "North Pole, Earth", // User location to display in the author segment.
  userAvatar: "/logos/avatar.png", // User avatar to display in the author segment.
  userDescription:
    "I’m a freelance UX and Full Stack developer with 5+ years of professional experience, based in Melbourne, Australia.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/deepak6sp",
      iconClassName: "fa fa-github"
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/deepak-prakash-a1bb2825/",
      iconClassName: "fa fa-linkedin"
    },
    // {
    //   label: "Email",
    //   url: "deepak6sp@gmail.com",
    //   iconClassName: "fa fa-envelope"
    // }
  ],
  copyright: "Copyright © 2018. Deepak Pixel" // Copyright string for the footer of the website and RSS feed.
};
