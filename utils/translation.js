require("dotenv").config();

const googleTranslate = require("google-translate")(process.env.API_KEY);

function translate(text, targetLanguage, cb) {
  googleTranslate.translate(text, targetLanguage, (error, translation) => {
    cb(translation);
  });
}

module.exports = {
  translate,
};
