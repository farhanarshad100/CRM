const style = {
  LeftSide: {
    width: "216px",
  },

  cardBox: {
    background: "#fff",
    borderRadius: "8px",
    border: "1px solid rgba(226, 232, 240, 0.1)",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
    position: "relative",
    marginBottom: "24px",
  },

  innerBox: {
    background: "linear-gradient(135deg, #004CCA 0%, #0062FF 100%)",
    color: "#fff",
    padding: "48px",
    position: "relative",
  },
  sideBarLogo: {
    position: "absolute",
    top: "58px",
    left: "0",
    right: "0",
    margin: "auto",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  details: {
    marginTop: "8px",
    "& h4": {
      fontSize: "20px",
      fontWeight: "600",
      color: "#181C1E",
    },
    "& p": {
      fontSize: "12px",
      fontWeight: "300",
      color: "#424656",
      letterSpacing: "1.2px"
    }
  },
  profileBottom: {
    marginTop: "10px",
    "& ul": {
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
      gap: "10px",
      "& li": {
        background: "#F1F4F6",
        borderRadius: "4px",
        width: "32px",
        height: "32px",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
      }
    }

  },
  cardBoxP3:{
  padding:"24px",
  "& h5":{
    fontSize:'15px',
    fontWeight:"600",
    color:"#181C1E",
  }
  },
  infoDetails:{
    display:"flex",
    flexDirection:"column",
    gap:"16px",
  },
  notification:{
    borderLeft:"4px solid #A12D01",
    background:"#F1F4F6",
    borderRadius:"8px",
    padding:"16px",
    width:"100%",
    marginTop:"16px",
    "& p":{
      fontSize:"14px",
      color:"181C1E",
      fontWeight:"500"
    },
    "& h6":{
      color:"#A12D01",
      fontSize:"12px",
      fontWeight:"700",
      marginTop:"12px"
    }
  },
  policySection:{
    display:"flex",
    gap:"16px",
  },
  iconBox:{
   background:"#D3E1F6",
      width:"32px",
      height:"32px",
    borderRadius: "21px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rightInfo:{
 width: "calc(100% - 48px)",
 "& h3":{
  fontSize:"12px",
  fontWeight:"600",
  color:"#181C1E",
  marginBottom:"3px"
 },
 "& p":{
  fontSize:"11px",
  color:"#424656",
  fontWeight:"400",

 }
  },
  iconBoxBg:{
    background:"#E5E9EB",
  }

};

export default style;