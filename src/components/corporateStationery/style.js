const style = {
  corporateStationery: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "32px",
  },
  innerDetails: {
    "& h4": {
      fontSize: "30px",
      color: "#181C1E",
      fontWeight: "800",
      marginBottom: "8px",
    },
    "& p:": {
      color: "#424656",
      fontSize: "16px",
      fontWeight: "400",
      lineheight: "24px",
    },
  },
  StationeryTabs: {
    background: "#F1F4F6",
    padding: "4px",
    width: "300px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  active: {
    background: "#fff",
    color: "#004CCA",
  },
};
export default style;
