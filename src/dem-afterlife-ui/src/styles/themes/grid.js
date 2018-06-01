const grid = {
  containers: [
    {
      gridSize: "xs",
      mediaMinString: "min-width: 0px",
      mediaMaxString: "max-width: 575px",
      width: "100%"
    },
    {
      gridSize: "sm",
      mediaMinString: "min-width: 576px",
      mediaMaxString: "max-width: 767px",
      width: "540px"
    },
    {
      gridSize: "md",
      mediaMinString: "min-width: 768px",
      mediaMaxString: "max-width: 991px",
      width: "720px"
    },
    {
      gridSize: "lg",
      mediaMinString: "min-width: 992px",
      mediaMaxString: "max-width: 1199px",
      width: "960px"
    },
    {
      gridSize: "xl",
      mediaMinString: "min-width: 1200px",
      mediaMaxString: "max-width: 100vw",
      width: "1140px"
    }
  ]
};

export default grid;
