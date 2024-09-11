// jest.config.js
module.exports = {
  preset: 'ts-jest',  // Use ts-jest to handle TypeScript files
  testEnvironment: 'node',
  roots: ['./src', './tests'],  // Define source and test directories
  moduleFileExtensions: ['ts', 'js', 'json'],
};
