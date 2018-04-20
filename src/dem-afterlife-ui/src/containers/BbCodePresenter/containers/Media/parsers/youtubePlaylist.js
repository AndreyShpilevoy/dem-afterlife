const youtubePlaylist = sourceLink => {
  const parsedLink = sourceLink.match(
    /youtube(?:-nocookie)?\.com\/(?:playlist\?list=|embed\/videoseries\?list=)([-_\w\d]+)/i
  );
  if (parsedLink) {
    return {
      type: "iframe",
      success: true,
      url: `https://www.youtube.com/embed/videoseries?list=${parsedLink[1]}`,
      isShortHeight: false
    };
  }
  return { success: false };
};

export default youtubePlaylist;
