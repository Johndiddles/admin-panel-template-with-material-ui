import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import Headers from "../../components/Headers";
import { tokens } from "../../themes";
import { mockTransactions } from "../../data/mockData";
import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import ProgressCircle from "../../components/Progress";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Headers title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            color="secondary"
            variant="contained"
            sx={{
              // backgroundColor: colors.green[500],
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} /> DOWNLOAD REPORTS
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* first row  */}
        <>
          <StatBox
            title="12,361"
            subtitle="Emails sent"
            progress="0.75"
            increase="+14%"
            icon={
              <Email sx={{ color: colors.grayAccent[300], fontSize: "26px" }} />
            }
          />
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSale
                sx={{ color: colors.grayAccent[300], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAdd
                sx={{ color: colors.grayAccent[300], fontSize: "26px" }}
              />
            }
          />
          <StatBox
            title="1,325,134"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+30%"
            icon={
              <Traffic
                sx={{ color: colors.grayAccent[300], fontSize: "26px" }}
              />
            }
          />
        </>

        {/* second row  */}
        <>
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[500]}
          >
            <Box
              mt="25px"
              p="0 35px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grayAccent[100]}
                >
                  Revenue Generated
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.green[500]}
                >
                  $59,342,320{" "}
                </Typography>
              </Box>

              <Box>
                <IconButton>
                  <DownloadOutlined
                    sx={{ fontSize: "26px", color: colors.green[500] }}
                  />
                </IconButton>
              </Box>
            </Box>

            <Box height="250px" m="-20px 0 0 0px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          {/* transactions  */}
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[500]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              color={colors.grayAccent[100]}
              p="15px"
            >
              <Typography
                color={colors.grayAccent[100]}
                variant="h5"
                fontWeight="600"
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, index) => (
              <Box
                key={`${transaction.txId}-${index}`}
                display="flex"
                justifyContent="space-between"
                alignContent="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.green[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grayAccent[500]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box color={colors.grayAccent[100]}> {transaction.date}</Box>
                <Box
                  backgroundColor={colors.green[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  {" "}
                  {transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </>

        {/* third row  */}
        <>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[500]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600">
              Campaign
            </Typography>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mt="25px"
            >
              <ProgressCircle size="125" />
              <Typography
                variant="h5"
                color={colors.green[500]}
                sx={{ mt: "15px" }}
              >
                $48,352 revenue generated
              </Typography>
              <Typography variant="h5" fontWeight="600">
                Includes extra misc expenditures and costs
              </Typography>
            </Box>
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[500]}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ p: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>

          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[500]}
            p="30px"
          >
            <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
              Geography Based Traffic
            </Typography>
            <Box height="200px">
              <GeographyChart isDashboard={true} />
            </Box>
          </Box>
        </>
      </Box>
    </Box>
  );
};

export default Dashboard;
