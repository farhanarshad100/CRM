const style = {
  companyInfo: {
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    border: "1px solid rgba(226, 232, 240, 0.1)",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    marginBottom: "24px",
    height: "100%",
  },
  innerLogo: {
    background: "rgba(255, 255, 255, 0.002)",
    boxShadow:
      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1);",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "center",
  },
  companyInfoDetails: {
    "& h1": {
      fontSize: "27px",
      color: "#0F172A",
      fontWeight: "800",
    },
  },
  companyInfoInner: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  info: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "12px",
    "& p": {
      fontSize: "14px",
      fontWeight: "500",
      color: "#64748B",
    },
  },
  overviewDetails: {
    display: "flex",
    justifyContent: "space-between",
  },
  overviewInner: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "61px",
  },
  innerDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "30%",
    "& h5": {
      latterSpace: "1.5px",
      fontSize: "12px",
      color: "#94A3B8",
    },
    "& h4": {
      fontSize: "18px",
      color: "#1E293B",
      fontWeight: "800",
    },
    "& span": {
      width: "40px",
      height: "2px",
      background: "#DBEAFE",
    },
  },
  socialBtn: {
    marginTop: "30px",
    "& ul": {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      "& li": {
        padding: "0",
        "& a": {
          background: "#F8FAFC",
          borderRadius: "16px",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#334155",
          "& span": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "44px",
            height: "44px",
            background: "#FFFFFF",
            border: "1px solid #F1F5F9",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "8px",
          },
        },
      },
    },
  },
  CompanyCulture: {
    marginTop: "24px",
    marginBottom: "24px",
    "& img": {
      borderRadius: "16px",
      width: "100%",
      height: "280px",
      display: "block",
    },
  },
  activeEmployees: {
    background: "#004cca",
    boxShadow:
      "0px 20px 25px -5px rgba(30, 58, 138, 0.1), 0px 8px 10px -6px rgba(30, 58, 138, 0.1)",
    borderRadius: "16px",
    padding: "40px",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",

    flexDirection: "column",
    "& h1": {
      fontSize: "48px",
      fontWeight: "800",
      color: "#fff",
    },
    "& p": {
      fontSize: "12px",
      latterSpace: "2.5px",
      color: "#99b7ea",
      fontWeight: "800",
    },
  },
  processBarSection: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      fontSize: "12px",
      latterSpace: "2.5px",
      color: "#99b7ea",
      fontWeight: "800",
    },
  },
  locationInfo:{
    padding:"120px",
    "& h6":{
      fontSize:"20px",
      color:"#0F172A",
      fontWeight:"800",
    },
    "& p":{
      fontSize:"16px",
      fontWeight:"500",
      color:"#64748B"
    }
  },
  locationIcon:{
    display: "flex",
justifyContent: "center",
alignItems: "center",
padding: "0px",
width: "56px",
height: "56px",
background: "#EFF6FF",
boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
borderRadius: "16px",
marginBottom:"24px",
  }
};

export default style;
