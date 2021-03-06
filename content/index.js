const {
  CONTENT_ROOT,
  CONTENT_ARCHIVED_ROOT,
  CONTENT_TRANSLATED_ROOT,
  REPOSITORY_URLS,
  ROOTS,
  VALID_LOCALES,
} = require("./constants");
const Document = require("./document");
const { getPopularities } = require("./popularities");
const Redirect = require("./redirect");
const Image = require("./image");
const { buildURL, memoize, slugToFolder } = require("./utils");
const { resolveFundamental } = require("@yari-internal/fundamental-redirects");

module.exports = {
  CONTENT_ROOT,
  CONTENT_ARCHIVED_ROOT,
  CONTENT_TRANSLATED_ROOT,
  REPOSITORY_URLS,
  ROOTS,
  VALID_LOCALES,

  getPopularities,

  Document,
  Redirect,
  Image,

  buildURL,
  memoize,
  slugToFolder,
  resolveFundamental,
};
