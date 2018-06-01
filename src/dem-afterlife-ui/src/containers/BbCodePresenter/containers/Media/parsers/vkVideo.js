const vkVideo = sourceLink => {
  const parsedLink = sourceLink.match(
    /(?:vk\.com|vkontakte\.ru)\/video_ext\.php\?oid=([-_\w\d]+)(?:&|&amp;)id=([-_\w\d]+)(?:&|&amp;)hash=([-_\w\d]+)/i
  );
  if (parsedLink) {
    return {
      type: "iframe",
      success: true,
      url: `https://vk.com/video_ext.php?oid=${parsedLink[1]}&id=${
        parsedLink[2]
      }&hash=${parsedLink[3]}`,
      isShortHeight: false
    };
  }
  return { success: false };
};

export default vkVideo;
