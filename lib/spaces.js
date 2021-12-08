import s3Client from "./s3Client";

export const getImage = async (Bucket, Key) => {
  return s3Client.getObject({ Bucket, Key });
};
