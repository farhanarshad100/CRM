// https://crm-red-three-67.vercel.app/office-location
const style = {
  locationTopSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
  },
  locationLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    "& h3": {
      color: "#181C1E",
      fontSize: "36px",
      fontWeight: "800",
      letterSpacing: "-1.8px",
    },
    h6: {
      color: "#004CCA",
      fontSize: "12px",
      fontWeight: "800",
    },
    "& p": {
      fontSize: "16px",
      color: "#424656",
      fontWeight: "400",
    },
  },
  locationRight: {
    display: "flex",
    gap: "12px",
  },
  cardOffice: {
    borderRadius: "12px",
    background: "#fff",
    padding: "32px",
  },
  innerDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBox: {
    width: "44px",
    height: "44px",
    borderRadius: "8px",
    background: "rgb(180 197 255 / 20%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addressSection:{
    display:"flex",
    gap:"16px",
    margin:"20px 0px 28px 0px",
    "& p":{
      color:"#424656",
      fontSize:"18px",
      fontWeight:"400",
      whiteSpace: "pre-line",
    }
  },
  official:{
    margin:"0",
    padding:"0",
    " & li":{
      color:"#fff",
      fontSize:"14px",
      fontWeight:"400",
      padding:"0",
      margin:"0",
      marginBottom:"12px",
      "& span":{
        marginRight:"10px",
      },
      "&:last-child":{
        marginBottom:"0",
      }
    }
  }
};
export default style;
