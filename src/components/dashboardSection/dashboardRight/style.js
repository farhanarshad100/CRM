

const style ={
    dashboardRight:{
        width:"calc(100% - 240px)"
    },
topSection:{
    display:"flex",
    justifyContent: "space-between",
    alignItems: "end",
    marginBottom:"32px",
    "& h2":{
        fontSize:"24px",
        fontWeight:"800",
        color:"#181C1E",
    },
    "& p":{
        color:"#424656",
        fontSize:"14px",
        fontWeight:"500",
    }
},
userCard:{
    display: "flex",
flexDirection: "column",
alignItems: "flex-start",
padding: "24px",
background: "#FFFFFF",
border: "1px solid rgba(226, 232, 240, 0.05)",
boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
borderRadius: "16px",
"& h4":{
    fontSize:"16px",
    fontWeight:"700",
    color:"#181C1E",
},
"& p":{
    fontSize:"12px",
    fontWeight:"400",
    color:"#424656",
    marginTop:"5px",
}
},
userDetails:{
    background:"#EFF6FF",
    width:"48px",
    height:"48px",
    borderRadius:"8px",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:"18px",
}
}
export default style