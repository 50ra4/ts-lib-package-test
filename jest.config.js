module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  testMatch: ["**/**.test.ts"],
  transformIgnorePatterns: ["/node_modules/(?!(@50ra4)/)"],
};
