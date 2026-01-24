/**
 * Meta Tag Manager
 * Utility for dynamically managing meta tags for SEO optimization
 * Useful for future single-page route implementations
 */

/**
 * Updates or creates a meta tag in the document head
 * @param {string} name - The meta tag name or property attribute
 * @param {string} content - The content value
 * @param {string} [attribute='name'] - The attribute to use ('name', 'property', 'http-equiv')
 * @example
 * setMetaTag('description', 'Page description', 'name');
 * setMetaTag('og:title', 'Page Title', 'property');
 */
const setMetaTag = (name, content, attribute = "name") => {
  if (!name || !content) {
    console.warn("Meta tag name and content are required");
    return;
  }

  let metaTag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (metaTag) {
    metaTag.setAttribute("content", content);
  } else {
    metaTag = document.createElement("meta");
    metaTag.setAttribute(attribute, name);
    metaTag.setAttribute("content", content);
    document.head.appendChild(metaTag);
  }
};

/**
 * Updates the page title
 * @param {string} title - The new page title
 * @example
 * setPageTitle('Git Status Command Guide');
 */
const setPageTitle = (title) => {
  if (!title) {
    console.warn("Page title is required");
    return;
  }
  document.title = title;
};

/**
 * Updates the canonical URL
 * @param {string} url - The canonical URL
 * @example
 * setCanonicalUrl('https://example.com/git-status');
 */
const setCanonicalUrl = (url) => {
  if (!url) {
    console.warn("Canonical URL is required");
    return;
  }

  let link = document.querySelector('link[rel="canonical"]');

  if (link) {
    link.setAttribute("href", url);
  } else {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", url);
    document.head.appendChild(link);
  }
};

/**
 * Adds structured data (JSON-LD) to the page
 * @param {Object} data - The structured data object
 * @example
 * addStructuredData({
 *   "@context": "https://schema.org",
 *   "@type": "Article",
 *   "headline": "Git Commands Guide"
 * });
 */
const addStructuredData = (data) => {
  if (!data) {
    console.warn("Structured data is required");
    return;
  }

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Updates multiple meta tags at once
 * @param {Object} tags - Object with tag configurations
 * @example
 * updateMetaTags({
 *   'description': { content: 'Page description', attribute: 'name' },
 *   'og:title': { content: 'Page Title', attribute: 'property' }
 * });
 */
const updateMetaTags = (tags) => {
  if (!tags || typeof tags !== "object") {
    console.warn("Tags object is required");
    return;
  }

  Object.entries(tags).forEach(([key, { content, attribute = "name" }]) => {
    setMetaTag(key, content, attribute);
  });
};

export {
  setMetaTag,
  setPageTitle,
  setCanonicalUrl,
  addStructuredData,
  updateMetaTags,
};
