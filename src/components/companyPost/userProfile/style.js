const style = {
userProfile:{
    padding: "24px 24px",
background: "#FFFFFF",
border: "1px solid rgba(194, 198, 217, 0.15)",
borderRadius: "8px",
"& img":{
    borderRadius:"16px",
    margin:"auto"
},

},


feedUpdate:{
    padding: "24px 8px",
background: "#FFFFFF",
border: "1px solid rgba(194, 198, 217, 0.15)",
borderRadius: "8px",
marginTop:"24px",
"& h6":{
    fontSize:"12px",
    color:"#424656",
    letterSpacing:"1.8px",
    fontWeight:"bold",
    marginLeft:"16px",
    marginBottom:"24px",
},
"& ul":{
    "& li":{
     fontSize:"14px",
     color:"#424656",
     fontWeight:"600",
    }
}
},


userProfileDetails:{
    borderBottom:"1px solid #E5E9EB",
    padding:"20px 0px 20px",
    textAlign:"center",
"& h4":{
    color:"#181C1E",
    fontSize:"18px",
    lineHeight:"28px",
},
"& p":{
    fontSize:"14px",
    color:"#424656",
}
},
postAndLike:{
    display:"flex",
    justifyContent:"space-between",
    paddingTop:"20px",
},
postLikeInner:{
    textAlign:"center",
    "& h5":{
        color:"#004CCA",
    fontSize:"20px",
    fontWeight:"bold",
    lineHeight:"28px",
    },
    "& p":{
        color:"#424656",
        fontSize:"12px",
        letterSpacing:"1px",
    }
}
}
export default style