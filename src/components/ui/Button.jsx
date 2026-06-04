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
         color:"#181C1E",
         fontSize:"14px",
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}