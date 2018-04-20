const yandexMusicAudio = sourceLink => {
  const parsedLink = sourceLink.match(
    /music\.yandex\.(?:ru|by|ua|kz)\/iframe\/(?:(#album)\/\d+|#track\/\d+\/\d+)/i
  );
  if (parsedLink) {
    return {
      type: "iframe",
      success: true,
      url: `https://${parsedLink[0]}`,
      isShortHeight: !parsedLink[1]
    };
  }
  return { success: false };
};

export default yandexMusicAudio;
