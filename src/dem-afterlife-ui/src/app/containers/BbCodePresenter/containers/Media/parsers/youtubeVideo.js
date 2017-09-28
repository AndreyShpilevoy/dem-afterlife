const youtubeVideo = sourceLink => {
    const parsedLink = sourceLink.match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|(?:embed\/(?!videoseries))|v\/))([-_\w\d]+)(?:.*(?:start)=(\d+))?/i);
    if (parsedLink) {
        return {
            type: 'iframe',
            success: true,
            url: `https://www.youtube.com/embed/${parsedLink[1]}?start=${parsedLink[2] || 0}`,
            isShortHeight: false
        };
    }
    return {success: false};
};

export default youtubeVideo;