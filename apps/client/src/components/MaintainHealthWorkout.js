import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Week One" {...a11yProps(0)} />
          <Tab label="Week Two" {...a11yProps(1)} />
          <Tab label="Week Three" {...a11yProps(2)} />
          <Tab label="Week Four" {...a11yProps(3)} />
          <Tab label="Week Five" {...a11yProps(4)} />
          <Tab label="Week Six" {...a11yProps(5)} />
          <Tab label="Week Seven" {...a11yProps(6)} />
          <Tab label="Week Eight" {...a11yProps(7)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bench/Dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups/Assisted Pull-ups:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Overhead press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Plank:</p>
                    <p>3 sets, holding for 45-60 seconds each </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Russian twists:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicycle crunches:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline bench/dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Romanian deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated Row (close grip):</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep curls:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank with leg lifts:</p>
                    <p>3 sets of 10 per leg </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Side plank:</p>
                    <p>3 sets, holding for 45-60 seconds per side </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">V-ups:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 60-90 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Step-Ups:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bench/Dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Sumo Deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups/Assisted Pull-ups:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Overhead press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank:</p>
                    <p>3 sets, holding for 45-60 seconds each </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Russian twists:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicycle crunches:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bulgarian split squats:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hamstring curls:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Chest flyers:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricept extensions:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank with leg lifts:</p>
                    <p>3 sets of 10 per leg </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Side plank:</p>
                    <p>3 sets, holding for 45-60 seconds per side </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">V-ups:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 60-90 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bench/Dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups/Assisted Pull-ups:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Overhead press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank:</p>
                    <p>3 sets, holding for 45-60 seconds each </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Russian twists:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicycle crunches:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline bench/dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Romanian deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated Row (close grip):</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep curls:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>{' '}
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank with leg lifts:</p>
                    <p>3 sets of 10 per leg </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Side plank:</p>
                    <p>3 sets, holding for 45-60 seconds per side </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">V-ups:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 60-90 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Step-Ups:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bench/Dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Sumo Deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups/Assisted Pull-ups:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Overhead press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank:</p>
                    <p>3 sets, holding for 45-60 seconds each </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Russian twists:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicycle crunches:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bulgarian split squats:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hamstring curls:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Chest flyers:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricept extensions:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank with leg lifts:</p>
                    <p>3 sets of 10 per leg </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Side plank:</p>
                    <p>3 sets, holding for 45-60 seconds per side </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">V-ups:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 60-90 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bench/Dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups/Assisted Pull-ups:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Overhead press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank:</p>
                    <p>3 sets, holding for 45-60 seconds each </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Russian twists:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicycle crunches:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline bench/dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Romanian deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated Row (close grip):</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep curls:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>{' '}
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank with leg lifts:</p>
                    <p>3 sets of 10 per leg </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Side plank:</p>
                    <p>3 sets, holding for 45-60 seconds per side </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">V-ups:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 60-90 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Step-Ups:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bench/Dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Sumo Deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups/Assisted Pull-ups:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Overhead press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank:</p>
                    <p>3 sets, holding for 45-60 seconds each </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Russian twists:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicycle crunches:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bulgarian split squats:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hamstring curls:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Chest flyers:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricept extensions:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank with leg lifts:</p>
                    <p>3 sets of 10 per leg </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Side plank:</p>
                    <p>3 sets, holding for 45-60 seconds per side </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">V-ups:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 60-90 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Squats:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bench/Dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups/Assisted Pull-ups:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Overhead press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank:</p>
                    <p>3 sets, holding for 45-60 seconds each </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Russian twists:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicycle crunches:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Lunges:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Incline bench/dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Romanian deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Seated Row (close grip):</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicep curls:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>{' '}
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank with leg lifts:</p>
                    <p>3 sets of 10 per leg </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Side plank:</p>
                    <p>3 sets, holding for 45-60 seconds per side </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">V-ups:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 60-90 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 1 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Step-Ups:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bench/Dumbbell press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Sumo Deadlifts:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Pull-ups/Assisted Pull-ups:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Overhead press:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 2 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 3 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank:</p>
                    <p>3 sets, holding for 45-60 seconds each </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Russian twists:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bicycle crunches:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 4 - Full Body - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bulgarian split squats:</p>
                    <p>3 sets of 10 reps per leg - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Bent-over rows:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Hamstring curls:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Chest flyers:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Tricept extensions:</p>
                    <p>3 sets of 10 reps - RPE 7 </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 5 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 6 - HIIT and Core - 60 min</h5>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">Warm-up:</p>
                    <p>5 minutes light cardio </p>
                  </div>
                  <div className="d-flex">
                    <p className="fw-bold me-2">HIIT Workout:</p>
                    <p>
                      30 seconds of high-intensity exercise followed by 30 seconds <br /> of rest, repeat for 10
                      minutes. (burpees, mountain clumbers, <br /> sprints, cycling etc)
                    </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Plank with leg lifts:</p>
                    <p>3 sets of 10 per leg </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Side plank:</p>
                    <p>3 sets, holding for 45-60 seconds per side </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">V-ups:</p>
                    <p>3 sets of 20 reps </p>
                  </div>
                  <div className="d-flex ">
                    <p className="fw-bold me-2">Cool down:</p>
                    <p>5-10 minutes of stretching </p>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Day 7 - Active Recovery - 30-60 min</h5>
                  </div>
                  <div>
                    <ul>
                      <li>Stretching</li>
                      <li>Yoga</li>
                      <li>Walking</li>
                      <li>Light clycling</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={3}>
              <Card sx={{ minHeight: 475 }}>
                <CardContent>
                  <div className="d-flex align-items-center justify-content-center shadow-sm align-middle bg-dark rounded pt-2 mb-2 text-light">
                    <h5 className="fw-bold">Helpful Resources</h5>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <a href="https://examine.com/">Examine.com</a>
                      </li>
                      <li>
                        <a href="https://www.nutrition.gov/topics/exercise-and-fitness">Nutrition.gov</a>
                      </li>
                      <li>
                        <a href="https://www.muscleandstrength.com/exercises">Excercise tutorials</a>
                      </li>
                      <li>
                        <a href="https://cronometer.com/">Nutrition calculator and tracker</a>
                      </li>
                      <li>
                        <a href="https://hubermanlab.com/">Hubermanlab.com</a>
                      </li>
                    </ul>
                    <div className="d-flex ">
                      <p className="fw-bold me-2">Note:</p>
                      <p>
                        Make sure to choose weights that are challenging but allow you to complete the full sets and
                        reps with good form. Rest for 60-90 seconds between sets
                        <br />
                        While exercise plays a large role it is important to properly maintain all aspects of your life
                        including daily activity, hydration, sleep, nutrition, and more.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </TabPanel>
    </Box>
  );
}
