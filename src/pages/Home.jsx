import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* HERO SECTION */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Students Projects Portal
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={3}>
          Discover innovative student projects, explore GitHub repositories, and
          view live deployments.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/showcase"
        >
          Explore Projects
        </Button>
      </Box>

      {/* TOP PROJECTS PREVIEW SECTION */}
      <Box>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Top Prioritized Projects
        </Typography>

        <Grid container spacing={3}>
          {/* Static Preview Cards for now (API integration later) */}

          {[1, 2, 3].map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item}>
              <Card
                sx={{
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Project Title {item}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    Short description of the project goes here...
                  </Typography>

                  <Button
                    component={Link}
                    to={`/project/${item}`}
                    sx={{ mt: 2 }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
