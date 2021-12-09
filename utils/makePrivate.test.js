const AWS = require("aws-sdk");
const endpointUrl = process.env.SPACES_ENDPOINT;
const accessKeyId = process.env.SPACES_KEY;
const secretAccessKey = process.env.SPACES_SECRET;
const endpoint = new AWS.Endpoint(endpointUrl);

const s3Client = new AWS.S3({
  endpoint,
  accessKeyId,
  secretAccessKey,
});
const Bucket = process.env.SPACES_BUCKET; //?

describe("make private", () => {
  it("Should make all private", async () => {
    const files = await s3Client.listObjects({ Bucket }).promise();

    // const res = await Promise.all(
    //   files["Contents"].map(async (file) => {
    //     s3Client
    //       .putObjectAcl({
    //         Key: file.Key,
    //         Bucket: process.env.SPACES_BUCKET,
    //         ACL: "private",
    //       })
    //       .promise();
    //   })
    // );
    console.log(res);
  });
});
