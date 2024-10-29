import { Box, Container } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "./undangan.png",
      title: "Undangan Web",
      link: "https://undangannikah.rf.gd/",
      description:
        "This wedding invitation website was crafted with a focus on elegance and simplicity to ensure a delightful user experience. Built using HTML, CSS, and JavaScript, it features smooth animations powered by AOS (Animate On Scroll). To manage guest RSVPs, a Firebase backend stores and organizes responses efficiently. The site includes a custom-designed photo gallery, a countdown timer to the big day, and personalized sections for the couple’s story, event details, and venue map integration using Google Maps API. The entire project is optimized for mobile, providing easy navigation for all invited guests.",
    },
    {
      id: 2,
      image: "./spotify clone 2.png",
      title: "Spotify Clone",
      link: "#",
      description:
        "This was a project I did to learn more about different technologies like React, Redux, and the Material-UI component library. This Project features dynamic routing, state management, and showing data based on API calls. The layout is obviously based on the Spotify Web Player. This was one of my first projects so it has some flaws, for example it not being responsive.",
    },
  ];

  return (
    <Container
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "95%",
      }}
    >
      <NavigationBar />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          marginTop: "10%",
          gap: "3%",
          display: "block",
          justifyContent: "space-around",
          alignItems: "space-around",
          height: "100%",
        }}
      >
        {projects.map((project) => (
          <Box key={project.id}>
            <motion.text
              transition={{ delay: 0.5, duration: 1.5 }}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              fontWeight={600}
              style={{
                fontSize: "2rem",
                marginBottom: "2%",
                textAlign: "center",
                display: "block",
                fontWeight: 700,
              }}
            >
              {project.title}
            </motion.text>
            <Box
              sx={{
                backgroundColor: "linear-gradient(to right, #414345, #232526)",
                padding: "2%",
                boxShadow:
                  "0px 0px 10px 0px linear-gradient(to right, #414345, #232526)",
              }}
            >
              <motion.img
                transition={{ delay: 0.5, duration: 1.5 }}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                onClick={() => window.open(project.link, "_blank")}
                src={project.image}
                alt={project.title}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "auto",
                  objectFit: "fill",
                  boxShadow: "0px 0px 7.5px 0px ",
                }}
              />

              <motion.text
                transition={{ delay: 0.5, duration: 1.5 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                fontWeight={400}
                fontSize={20}
                style={{
                  marginTop: "3%",
                  textAlign: "start",
                }}
              >
                {project.description}
              </motion.text>
            </Box>
          </Box>
        ))}
      </Box>
      <Box sx={{ position: "relative", zIndex: 1, marginTop: 10 }}>
        <Footer />
      </Box>
    </Container>
  );
};

export default Projects;
