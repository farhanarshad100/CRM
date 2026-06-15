const style = {
  manageDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
    "& h3": {
      color: "#181C1E",
      fontSize: "36px",
      fontWeight: "800",
      letterSpacing: "-0.9px",
      lineHeight: "40px",
    },
    "& p": {
      color: "#424656",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
      manageInputSection: {
      background: "#FFFFFF",
      border: "1px solid rgba(194, 198, 217, 0.15)",
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      borderRadius: "12px",
      padding:"24px",
      
      "& .MuiOutlinedInput-root": {
      background: "#F1F4F6",
      borderRadius: "8px",
       height:"44px",
       color:"#181C1E",
       fontSize:"14px",
       fontWeight:"400",

       "& fieldset": {
        border: "none",
      },
      
        "& input::placeholder": {
        color: "#6B7280",
        opacity: 1,
      },
      
    "& input": {
      color: "#000",
      fontSize:"14px",
    padding:"12px 50px"
    },
}
    },
};
export default style;
