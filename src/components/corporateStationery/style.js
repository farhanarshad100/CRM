import { colors } from "@mui/material";

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
padding:"32px",
height:"162px",
"& p":{
fontSize:"12px",
fontWeight:"500",
color:"#FFFFFF",
},
"& h3":{
  fontSize:"18px",
  fontWeight:"900",
  color:"#fff",
}
  },
  cardProfile:{
    position: "relative",
width: "128px",
height: "128px",
background: "#F7FAFC",
border: "4px solid #FFFFFF",
borderRadius: "12px",
bottom:"-25px",
left:"0",
right:"0",
margin:"auto",
overflow:"hidden"
  },

boxInnerPart:{
  padding:"80px 32px 32px",
  textAlign:"center",
  "& h4":{
    fontSize:"24px",
    fontWeight:"bold"
  },
  "& p":{
    fontSize:"14px",
    fontWeight:"bold",
    color:"#004CCA",
  }
},
lineHr:{
    borderBottom: "1px solid #F1F5F9",
    margin: "32px 0",
},
profileList:{
  padding:"0",
  "& li":{
    padding:"0",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"16px",
    color:"#424656",
    fontSize:"12px",

    "&:last-child":{
          marginBottom:"0px",
    },
    "& span":{
      color:"#181C1E",
      fontWeight:"bold",
      fontSize:"14px"
    }
  }
},
frontCardDetails:{
  display:"flex",
  alignItems:"center",
  marginTop:"32px",
  marginBottom:"16px",
  gap:"8px",
  "span":{
    background:"#94A3B8",
    width:"8px",
    height:"8px",
    borderRadius:"100px"
  }
},
frontCard2:{
  background:"#fff"
},
  coverBack:{
padding:"32px",
  borderBottom: "10px solid transparent",
        borderImage: "linear-gradient(90deg, #004CCA 0%, #0062FF 50%, #004CCA 100%) 1",

"& h3":{
  fontSize:"12px",
  fontWeight:"900",
  color:"#004CCA",
},
  },
  innerBox:{
    display:"flex",
    gap:"15px",
marginTop:"10px",
    justifyContent:"space-between",
 
  
  },
  backsideInner:{
    background:"#F1F4F6",
    padding:"12px",
    borderRadius:"8px",
    width:"100%",
    "& h5":{
      fontSize:"12px",
      color:"#424656",
     fontWeight:"600",
      marginBottom:"4px"
    },
    "& h3":{
      color:"#181C1E",
      fontSize:"18px",
      fontWeight:"800"
    }
  },
  backsideInner2:{
    background:"#FFDAD6",
        "& h5":{
          color:"#BA1A1A",
             fontSize:"12px",
                   fontWeight:"600",
        },
        "& h3":{
           color:"#BA1A1A",
             fontSize:"18px",
      fontWeight:"800"
        }
  },
  officeAddress:{
    paddingTop:"32px",
      
    "& h6":{
      marginBottom:"16px",
      color:"#004CCA",
      fontSize:"12px"
    },
    "& p":{
      color:"#181C1E",
      fontSize:"10px",
      fontWeight:"600"
    }
  },
  officeAddressInner:{
    display:"flex",
    justifyContent:"space-between",
      paddingBottom:"22px"
  },
  bar:{
    padding:"15px 0 0 0",
    "& img":{
      filter: "invert(1)",
    }
  },

};



export default style;
