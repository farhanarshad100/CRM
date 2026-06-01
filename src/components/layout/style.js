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
},
sideNav: {
  "& ul li": {
    color: "#3a3a3a",
  },
  "& ul li a": {

    padding:"8px 20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  "& ul li.active": {
    backgroundColor: "#004cca",
    color:"#fff",
  },
  "& .css-1b50ykj-MuiTypography-root":{
    fontSize:"14px",
    fontWeight:"500"
  }
},
}
export default style