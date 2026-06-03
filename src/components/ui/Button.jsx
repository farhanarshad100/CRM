import MuiButton from "@mui/material/Button";

export default function Button({
  children,
  sx = {},
  ...props
}) {
  return (
    <MuiButton
      sx={{
        borderRadius: "4px",
        textTransform: "none",
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
}