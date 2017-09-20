const calculateRoadMapZoomLevel = (value, result = 2) => value >= 2 ? calculateRoadMapZoomLevel(value / 2, result + 1) : result;
const getSatelliteZoomLevel = satelliteZoom => calculateRoadMapZoomLevel(45875200 / satelliteZoom);

const googleMaps = sourceLink => {
    const parsedLink = sourceLink.match(/google(?:\.com)?\.\w+\/maps\/(?:@(\d+\.\d+),(\d+\.\d+),(\d+|\d+.\d+)([zm]))|(embed\?[!=.-_\w\d]+)/i);
    if (parsedLink) {
        if (parsedLink[4] === 'z') {
            return {
                type: 'iframe',
                success: true,
                url: `https://maps.google.com/maps?ll=${parsedLink[1]},${parsedLink[2]}&t=m&z=${Number.parseInt(parsedLink[3], 10)}&output=embed`,
                isShortHeight: false
            };
        } else if (parsedLink[4] === 'm') {
            return {
                type: 'iframe',
                success: true,
                url: `https://maps.google.com/maps?ll=${parsedLink[1]},${parsedLink[2]}&t=h&z=${getSatelliteZoomLevel(parsedLink[3])}&output=embed`,
                isShortHeight: false
            };
        } else if (parsedLink[5]) {
            return {
                type: 'iframe',
                success: true,
                url: `https://www.google.com/maps/${parsedLink[5]}`,
                isShortHeight: false
            };
        }
    }
    return {success: false};
};

export default googleMaps;