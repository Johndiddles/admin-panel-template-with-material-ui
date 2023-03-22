import { Box, Typography, useTheme } from "@mui/material";
import Headers from "../../components/Headers";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../themes";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Headers title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.green[500]}>
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            inventore ab vero similique, est nihil placeat quod hic quidem rerum
            labore incidunt ad tempore blanditiis doloribus ducimus numquam
            dolorem corrupti? Accusantium aspernatur ad rerum, dignissimos natus
            deleniti eos quae expedita, dolores excepturi doloremque
            voluptatibus veniam explicabo optio corrupti nam facilis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.green[500]}>
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            inventore ab vero similique, est nihil placeat quod hic quidem rerum
            labore incidunt ad tempore blanditiis doloribus ducimus numquam
            dolorem corrupti? Accusantium aspernatur ad rerum, dignissimos natus
            deleniti eos quae expedita, dolores excepturi doloremque
            voluptatibus veniam explicabo optio corrupti nam facilis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.green[500]}>
            A random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            inventore ab vero similique, est nihil placeat quod hic quidem rerum
            labore incidunt ad tempore blanditiis doloribus ducimus numquam
            dolorem corrupti? Accusantium aspernatur ad rerum, dignissimos natus
            deleniti eos quae expedita, dolores excepturi doloremque
            voluptatibus veniam explicabo optio corrupti nam facilis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.green[500]}>
            The "What Kinda" Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            inventore ab vero similique, est nihil placeat quod hic quidem rerum
            labore incidunt ad tempore blanditiis doloribus ducimus numquam
            dolorem corrupti? Accusantium aspernatur ad rerum, dignissimos natus
            deleniti eos quae expedita, dolores excepturi doloremque
            voluptatibus veniam explicabo optio corrupti nam facilis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.green[500]}>
            The "No stupid" Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            inventore ab vero similique, est nihil placeat quod hic quidem rerum
            labore incidunt ad tempore blanditiis doloribus ducimus numquam
            dolorem corrupti? Accusantium aspernatur ad rerum, dignissimos natus
            deleniti eos quae expedita, dolores excepturi doloremque
            voluptatibus veniam explicabo optio corrupti nam facilis!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" color={colors.green[500]}>
            Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            inventore ab vero similique, est nihil placeat quod hic quidem rerum
            labore incidunt ad tempore blanditiis doloribus ducimus numquam
            dolorem corrupti? Accusantium aspernatur ad rerum, dignissimos natus
            deleniti eos quae expedita, dolores excepturi doloremque
            voluptatibus veniam explicabo optio corrupti nam facilis!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
