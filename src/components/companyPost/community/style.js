const style = {
  mainHeading: {
    marginBottom: "24px",
    "& h1": {
      fontSize: "36px",
      color: "#181C1E",
      lineHeight: "40px",
    },
    "& p": {
      fontSize: "16px",
      color: "#424656",
      lineHeight: "24px",
    },
  },
  chatBox: {
    padding: "32px 24px 24px 24px",
    background: " #FFFFFF",
    border: "1px solid rgba(194, 198, 217, 0.15)",
    borderRadius: "8px",
  },
  topSection: {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
  },
  adminProfile: {
    width: "40px",
    "& img": {
      borderRadius: "8px",
    },
  },
  chatInput: {
    width: "100%",
    "& input": {
      width: "100%",
      background: "#F1F4F6",
      border: "0px",
      padding: "16px 64px 16px 16px",
    },
  },
  attachement: {
    borderTop: "1px solid #E5E9EB",
  },
  innerSectionAttachement: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "16px",
    alignItems:"center"
  },
  attachementIcon:{
    "& ul":{
        display:"flex",
        padding:"0",
        "& li":{
            padding:"0",
cursor:"pointer"
        }
    }
  }
};
export default style;
