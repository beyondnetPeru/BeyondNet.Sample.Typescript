module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
}
