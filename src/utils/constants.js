const API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const OFFSET_LIVE_CHAT = 100;

export const IMAGES = {
  LOGO_DARK: require("D:/Namaste Dev/tubeLive/src/utils/images/logo_1.png"),
  LOGO_LIGHT: require("D:/Namaste Dev/tubeLive/src/utils/images/logo_light.png"),
  // FAVICON: require("D:/Namaste Dev/tubeLive/src/utils/images/favicon.png")
};
