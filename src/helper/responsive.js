import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const IsMobile = () => {
  return useMediaQuery(useTheme().breakpoints.down("sm"));
};

export { IsMobile };
