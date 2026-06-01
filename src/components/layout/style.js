const style={
searchBar:{
     position: "relative",
  width: "320px",
  marginLeft: "30px",
    "& span": {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    alignItems: "center",
  },
    "& input":{
        padding: "6px 35px 6px",
    height: "40px",
    width: "100%",
    border:"0",
    background:"#F1F4F6",
    borderRadius:"12px",
    color:"#424656",
    fontSize:"14px",
    "&::placeholder":{
     color:"#424656",
    },
    "&:focus":{
 border:"none",
 boxShadow:"none"
    }
    }
}
}
export default style