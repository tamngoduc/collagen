import { Components, Theme } from "@mui/material";

export const components: Components<Omit<Theme, "components">> | undefined = {
  MuiButton: {
    defaultProps: {
      // color: "primary",
      disableTouchRipple: true,
      sx: {
        typography: (theme) => ({ ...theme.typography.button }),
        borderRadius: 36,
        px: 9,
        py: 2,
        "&.Mui-disabled": {
          backgroundColor: "info.main",
          color: "#fff",
        },
        backgroundColor: "primary.light",
      },
    },
  },
};
