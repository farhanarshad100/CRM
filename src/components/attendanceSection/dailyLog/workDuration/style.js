const style = {
    attendance: {
        background: "#004ece",
        padding: "24px",
        borderRadius: "10px",
        border: "1px solid rgba(226, 232, 240, 0.1)",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        "& p": {
            color: "#b9cdf3",
            letterSpacing: "1px",
            fontSize: "13px",
            fontWeight: "500",
        },
        "& h3":{
            fontSize:"50px",
            fontWeight:"800",
            color:"#fff",
            marginTop:"40px"
        },
         "& h6": {
            color: "#b9cdf3",
            letterSpacing: "1px",
            fontSize: "16px",
            fontWeight: "500",
        },
    },
    attendanceUpdate:{
        background:"#fff",

            border: "1px solid rgba(226, 232, 240, 0.1)",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
               "& p": {
            color: "#181c1e",
            letterSpacing: "1px",
            fontSize: "13px",
            fontWeight: "500",
        },
        "& h3":{
            fontSize:"50px",
            fontWeight:"800",
            color:"#181c1e",
          
        },
         "& h6": {
            color: "#181c1e",
            letterSpacing: "1px",
            fontSize: "16px",
            fontWeight: "500",
        },
    },
    innerAttendance:{
        display:"flex",
          marginTop:"40px",
          justifyContent: "space-between",
          alignItems: "center",
        "& span":{
            background:"#d6e4f9",
            borderRadius:"100px",
            width:"60px",
            height:"60px",
            justifyContent:"center",
            alignItems:"center",
            display:"flex"
        }
    }
}
export default style;