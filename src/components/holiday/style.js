const style = {
holidayCard:{
background: "#FFFFFF",
border: "1px solid rgba(194, 198, 217, 0.15)",
boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
borderRadius: "8px",
padding:"24px",
display:"flex",
justifyContent:"space-between",
alignItems:"center",

},
iconSection:{
    background:"rgb(0 76 202 / 10%)",
    padding:"12px",
    borderRadius:"8px",
},
holiDetails:{
"& p":{
    fontSize:"14px",
    color:"#424656",
    fontWeight:"500",
    lineheight:"20px",
},
"& h3":{
       fontSize:"36px",
    color:"#004CCA",
    fontWeight:"800",
    lineheight:"40px",
}
},
nextHolidayCard:{
    background:"linear-gradient(135deg, #004CCA 0%, #0062FF 100%)",
    "& p":{
    fontSize:"14px",
    color:"#fff",
    fontWeight:"500",
    lineheight:"20px",
},
"& h3":{
       fontSize:"36px",
    color:"#fff",
    fontWeight:"800",
    lineheight:"40px",
}
}

}
export default style