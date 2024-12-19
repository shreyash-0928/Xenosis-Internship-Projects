export const recommendVideos = (videos, userHistory) => {
  return videos.filter((video) => userHistory.includes(video.id));
};
