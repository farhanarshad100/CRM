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
  frontCard:{
background: "#FFFFFF",
border: "1px solid #F1F5F9",
boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
borderRadius: "32px",
borderRadius:"32px",
overflow:"hidden",
width:"338px",
margin:"auto",
position:"relative",
  },
  coverFront:{
background: "linear-gradient(135deg, #004CCA 0%, #0062FF 100%)",
padding:"32px"
  },
  cardProfile:{
    position: "relative",
width: "128px",
height: "128px",
background: "#F7FAFC",
border: "4px solid #FFFFFF",
borderRadius: "12px",
bottom:"64px",
left:"0",
right:"0",
margin:"auto"
  }
};
export default style;
