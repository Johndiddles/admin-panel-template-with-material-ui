import { Box, useTheme } from "@mui/material";
import Headers from "../../components/Headers";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../themes";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Headers title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grayAccent[100]}`}
        borderRadius="8px"
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
