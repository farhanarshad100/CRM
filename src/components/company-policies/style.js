const style = {
companyFilter:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"40px",
   
},
companyPolicies:{
    "& h1":{
        fontSize:"36px",
        color:"#181C1E",
        fontWeight:"800",
        letterSpacing:"-0.9px"
    },
    "& p":{
        fontSize:"16px",
        fontWeight:"500",
    }
},
PoliciesDetails:{
        background: "#FFFFFF",
        border: "1px solid rgba(226, 232, 240, 0.05)",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        padding: "4px",
},
innerDetails:{
display:"flex",
justifyContent:"space-between",
alignItems:"start",
marginBottom:"16px",
},
iconBtn:{
background:"#FFDBD0",
borderRadius:"4px",
padding:"12px",
},
versionCheck:{
    display:"flex",
    gap:"20px",
    position:"relative",
  
},
versionInner:{
    "& p":{
        fontSize:"11px",
        color:"#424656",
        fontWeight:"800",
    },
      "& h6":{
        fontSize:"14px",
        color:"#181C1E",
        fontWeight:"800",
    },

},
PoliciesFooter:{
  background:"#F1F4F6",
  padding:"16px",
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center"
}
}
export default style