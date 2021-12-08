import s3Client from "./s3Client";

const expireSeconds = 120;

export const getImage = async (Bucket, Key) => {
  return s3Client.getObject({ Bucket, Key }).promise();
};

export const getImageLink = async (Bucket, Key) => {
  return s3Client.getSignedUrl("getObject", {
    Bucket,
    Key,
    Expires: expireSeconds,
  });
};
