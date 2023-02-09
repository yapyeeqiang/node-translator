const { translate } = require("./utils/translation.js");

translate("Hello Thailand!", "th", ({ translatedText }) => {
  console.log(translatedText);
});
