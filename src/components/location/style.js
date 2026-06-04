const style = {
locationTopSection:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"end"
},
locationLeft:{
    display:"flex",
    flexDirection:"column",
    gap:"8px",
    "& h3":{
        color:"#181C1E",
        fontSize:"36px",
        fontWeight:"800",
        letterSpacing:"-1.8px"
    },
    "h6":{
        color:"#004CCA",
        fontSize:"12px",
        fontWeight:"800",
    },
    "& p":{
        fontSize:"16px",
        color:"#424656",
        fontWeight:"400",
    }
},
locationRight:{
    display:"flex",
    gap:"12px",
}
}
export default style