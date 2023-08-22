// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

const testFiles = fs.glob('**/*.test')

jest.run(testFiles)

module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/dist/']
}
