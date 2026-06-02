const style = {
  monthlyEfficiencyInner: {
    padding: "32px",
    background: "linear-gradient(135deg, #004CCA 0%, #0062FF 100%)",
    boxShadow:
      "0px 20px 25px -5px rgba(0, 76, 202, 0.2), 0px 8px 10px -6px rgba(0, 76, 202, 0.2)",
    borderRadius: "8px",
    height:"100%",
    "& h4":{
        fontSize:"20px",
        fontWeight:"700",
        color:"#FFFFFF",
        marginBottom:"7px"
    },
        "& p":{
        fontSize:"14px",
        fontWeight:"400",
        color:"#DBEAFE",
        marginBottom:"7px"
    },
            "& button":{
        fontSize:"14px",
        fontWeight:"700",
    
        padding:"10px 24px",
        borderRadius:"8px",
        marginRight:"16px",
        marginTop:"17px"
    }
  },
  monthlyEfficiencyInnerRight:{
    background:"#E0E3E5",
    boxShadow:"none",
    "& h6":{
        color:"#424656",
        fontSize:"11px",
        fontWeight:"700"
    },
    "& ul":{
        borderBottom:"1px solid #d9d9d9",
"& li":{
    display:"flex",
    alignItems:"center",
    gap:"6px",
    fontSize:"14px",
    fontWeight:"700",
    color:"#181C1E",
    paddingLeft:"0px"
}
    },
    "& a":{
        fontSize:"12px",
        fontWeight:"700",
        display:"flex",
        alignItems:"center",
        gap:"6px",
        color:"#004CCA",
        marginTop:"10px",
    }
  }
};
export default style;
