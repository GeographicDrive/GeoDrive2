// config.js — provides window.__DEFAULT_CESIUM_TOKEN__.
//
// This committed copy intentionally ships with an EMPTY token so nothing
// secret ever lives in git history. When the site is deployed via
// .github/workflows/deploy.yml, this file is regenerated on the runner
// (not committed) with the real value pulled from the CESIUM_TOKEN
// repository secret, then published as part of the Pages artifact.
//
// For local development without a token, the app still runs fine — it
// just falls back to ArcGIS imagery / flat terrain until you paste a
// personal token into Settings.
window.__DEFAULT_CESIUM_TOKEN__ = "";
