const { default: s3Client } = require("./s3Client");

describe("s3Client", function testS3() {
  expect(s3Client).toBeDefined();
});
