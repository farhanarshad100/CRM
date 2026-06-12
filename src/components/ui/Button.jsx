import MuiButton from "@mui/material/Button";

export default function Button({
children,
  sx = {},
  ...props
}) {
  return (
    <MuiButton
      sx={{
        borderRadius: "8px",
        textTransform: "none",
         color:"#fff",
         fontSize:"16px",
         background:"#004CCA",
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}