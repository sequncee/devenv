require("dotenv").config();
const {
  start,
  banner,
} = require("../src/common/builder");


module.exports = async (req, res) => {
    const {
    platform,
    platformversion,
  } = req.query;
  // res.json({
  //   body: req.body,
  //   query: req.query,
  //   cookies: req.cookies,
  // }) 
  // 返回raw
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  // const shell =start.arguments+banner
  console.log(platform);
  res.send(start()+banner())

}
// module.exports = async (req, res) => {

//   let stats;

//   if (blacklist.includes(username)) {
//     return res.send(renderError("Something went wrong"));
//   }

//   if (locale && !isLocaleAvailable(locale)) {
//     return res.send(renderError("Something went wrong", "Language not found"));
//   }

//   try {
//     stats = await fetchStats(
//       username,
//       parseBoolean(count_private),
//       parseBoolean(include_all_commits),
//     );

//     const cacheSeconds = clampValue(
//       parseInt(cache_seconds || CONSTANTS.TWO_HOURS, 10),
//       CONSTANTS.TWO_HOURS,
//       CONSTANTS.ONE_DAY,
//     );

//     res.setHeader("Cache-Control", `public, max-age=${cacheSeconds}`);

//     return res.send(
//       renderStatsCard(stats, {
//         hide: parseArray(hide),
//         show_icons: parseBoolean(show_icons),
//         hide_title: parseBoolean(hide_title),
//         hide_border: parseBoolean(hide_border),
//         hide_rank: parseBoolean(hide_rank),
//         include_all_commits: parseBoolean(include_all_commits),
//         line_height,
//         title_color,
//         icon_color,
//         text_color,
//         bg_color,
//         theme,
//         custom_title,
//         locale: locale ? locale.toLowerCase() : null,
//         disable_animations: parseBoolean(disable_animations),
//       }),
//     );
//   } catch (err) {
//     return res.send(renderError(err.message, err.secondaryMessage));
//   }
// };
