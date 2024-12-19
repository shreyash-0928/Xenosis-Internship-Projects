export const validateVideoUploadForm = (file) => {
  if (
    !file ||
    file.size > 100 * 1024 * 1024 ||
    !file.type.startsWith("video/")
  ) {
    return false;
  }
  return true;
};
