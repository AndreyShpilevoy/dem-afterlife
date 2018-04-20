import { createMediaQueryMin } from "utils";

const calculateStyles = ({ grid }) =>
  grid.containers.reduce(
    (previous, { width, mediaMinString }) => ({
      ...previous,
      ...createMediaQueryMin(mediaMinString, {
        container: {
          width,
          marginLeft: "auto",
          marginRight: "auto"
        }
      })
    }),
    {}
  );

export default calculateStyles;
