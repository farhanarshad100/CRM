const style = {
  employeeHours: {
    background: "#fff",
    padding: "24px",
    borderRadius: "10px",
    border: "1px solid rgba(226, 232, 240, 0.1)",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    "& p": {
      fontSize: "16px",
      color: "#424656",
      fontWeight: "500",
    },
    "& h3": {
      fontSize: "36px",
      color: "#424656",
      fontWeight: "700",
    },
    "& span": {
      fontSize: "20px",
      color: "#94A3B8",
      fontWeight: "700",
    },
  },
  employeeInner: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "18px",
    "& button": {
      borderRadius: "100%",
      background: "#ECFDF5",
      color: "#059669",
      borderRadius: "12px",
      padding: "3px 14px",
      height: "20px",
      fontSize: "12px",
    },
  },
  workIcon: {
    background: "#EFF6FF",
    width: "40px",
    height: "40px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
export default style;
