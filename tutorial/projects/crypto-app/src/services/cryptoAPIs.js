const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-mvMzZFdMKFnkkDs8AfKxsHSy";

const coinsListURL = (page, currency) =>
  `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;

const searchURL = (text) =>
  `${BASE_URL}/search?query=${text}&x_cg_demo_api_key=${API_KEY}`;

const marketChartURL = (coinId, currency) =>
  `${BASE_URL}/coins/${coinId}/market_chart?vs_currency=${currency}&days=7`;

export { coinsListURL, searchURL, marketChartURL };
