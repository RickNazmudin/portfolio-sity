import {
  Box,
  Chip,
  Container,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "100vh",
        marginBottom: "2%",
      }}
    >
      <NavigationBar />
      <Box sx={{ mt: 10, px: 2, marginLeft: isMobile ? "0" : "-1rem" }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#ebdddd", maxWidth: "75ch", mb: 2 }}
          >
            I am Sity Nuraisyah, a recent graduate with a Bachelor's degree in
            Computer Science, specializing in Information Systems. I am
            passionate about designing and implementing efficient information
            solutions. I have hands-on experience in systems analysis and
            development, with a focus on creating seamless user experiences and
            data-driven insights. Currently, I am honing my skills in both
            front-end and back-end development and am eager to expand my
            expertise in database management and software integration.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Work Experience
          </Typography>
          <WorkExperience
            title="Apprenticeship as IT-Specialist"
            date="09.2023 - present"
            label="Freelance"
          />
          <WorkExperience
            title="Web Developer"
            date="06.2023 - 07.2023"
            label="Internship"
          />
          <WorkExperience
            title="Self Employed - Hardware related services"
            date="12.2022 - 05.2024"
            label="Self Employed"
          />
          <WorkExperience
            title="Voluntary Social Year"
            date="10.2021 - 09.2022"
            label="Social Year"
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2 }}
          >
            Education
          </Typography>
          <Education
            title="Self Teaching - Web Development"
            date="2019 - present"
            label="Self Teaching"
          />
          <Education title="Sarjana Komputer" date="2023" label="STIMIK AMIK" />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

const WorkExperience = ({
  title,
  date,
  label,
}: {
  title: string;
  date: string;
  label: string;
}) => (
  <Box sx={{ mb: 4 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2" sx={{ color: "#ebdddd", opacity: 0.7 }}>
        {title}
      </Typography>
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20" }}
      />
    </Box>
    <Typography
      variant="body1"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </Box>
);

const Education = ({
  title,
  date,
  label,
}: {
  title: string;
  date: string;
  label: string;
}) => (
  <Box sx={{ mb: 4 }}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body1" sx={{ color: "#ebdddd", opacity: 0.7 }}>
        {title}
      </Typography>
      <Chip
        label={label}
        variant="filled"
        sx={{ background: "#D7FFE0", color: "#1B5E20" }}
      />
    </Box>
    <Typography
      variant="body2"
      sx={{ color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1 }}
    >
      {date}
    </Typography>
    <Divider sx={{ mt: 2, backgroundColor: "#ebdddd", opacity: 0.4 }} />
  </Box>
);

export default About;
