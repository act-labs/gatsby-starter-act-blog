// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    "testMatch": [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
    "testPathIgnorePatterns": ["/node_modules/", "/.cache/"],
    "moduleNameMapper": {
      "\\.(css|less)$": "<rootDir>/src/__mocks__/less-imports.js",
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__mocks__/jpg-imports.js",
      "^actb(.*)$": "<rootDir>$1",      
    }

};
