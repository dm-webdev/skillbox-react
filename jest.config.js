module.exports = {
<<<<<<< HEAD
  preset: 'ts-jest',
  testEnvironment: 'node',
=======
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'node', //среда тестирования
  setupFilesAfterEnv: ["<rootDir>./jest.setup.js"],
  moduleNameMapper: {
    "\\.(css)": "identity-obj-proxy" //опция для работы со стилями
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
>>>>>>> server--config
};