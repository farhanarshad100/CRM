const style ={
dailyBreakdown:{
    display:"flex",
    justifyContent:"space-between",
    marginTop:"24px",
       alignItems:"center",
},
dailyInnerDetails:{
    display:"flex",
    alignItems:"center",
    gap:"10px",
    "& h4":{
        fontSize:"16px",
        color:"#181C1E",
        fontWeight:"700"
    }
},
presentSection:{
    "& ul":{
        display:"flex",
        gap:"16px",
        alignItems:"center",
        whiteSpace: "nowrap",
        padding:"0",
        "& li":{
            fontSize:"12px",
            color:"#424656",
            fontWeight:"600",
            display:"flex",
            gap:"6px",
            padding:"0",
            alignItems:"center",
    
        }
    }
}
}
export default style