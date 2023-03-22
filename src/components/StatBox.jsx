import { Typography, useTheme, Box } from "@mui/material";
import React from "react";
import { tokens } from "../themes";
import ProgressCircle from "./Progress";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      gridColumn="span 3"
      backgroundColor={colors.primary[500]}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="4px"
    >
      <Box width="100%" m="0 30px">
        <Box display="flex" justifyContent="space-between">
          <Box>
            {icon}{" "}
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: colors.grayAccent[100] }}
            >
              {title}
            </Typography>
          </Box>
          <Box>
            <ProgressCircle progress={progress} />
          </Box>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="h5" sx={{ color: colors.green[100] }}>
            {subtitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            fontWeight="bold"
            sx={{ color: colors.green[600] }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
