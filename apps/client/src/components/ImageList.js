import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import coverphoto from './coverphoto.jpg';
import coverphoto2 from './coverphoto2.jpg';
import coverphoto3 from './coverphoto3.jpg';
import { Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const StockImageList = (props) => {
  const [gymImages, setGymImages] = useState([]);
  const [fitImages, setFitImages] = useState([]);

  useEffect(() => {
    getGymImages();
    getFitImages();
  }, []);

  const getGymImages = async () => {
    await axios.get('http://localhost:8080/shutterstockAPI/gym').then((res) => {
      setGymImages(res.data.data);
    });
  };
  const getFitImages = async () => {
    await axios.get('http://localhost:8080/shutterstockAPI/fitness').then((res) => {
      setFitImages(res.data.data);
    });
  };

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = gymImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Grid container sx={{ width: '40%' }} mb={3} columnSpacing={{ xs: 1 }}>
        <Grid xs={6}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {gymImages.map((step, index) => (
              <div key={index}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 300,
                      display: 'block',
                      maxWidth: '100%',
                      width: 600,
                      objectFit: 'cover',
                    }}
                    src={step.assets.huge_thumb.url}
                    alt="fitness"
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
        <Grid xs={6}>
          <Link
            to="/user/new"
            className="btn btn-outline-light carousel-caption"
            style={{
              top: '50%',
              left: '60%',
              transform: 'translateY(-50%)',
              bottom: 'initial',
              padding: '10px',
            }}
          >
            get started now →
          </Link>
          <img src={coverphoto} style={{ width: '100%', height: '300px' }} />
        </Grid>
      </Grid>
      <Grid container sx={{ width: '40%' }} mb={5} rowSpacing={1} columnSpacing={{ xs: 1 }}>
        <Grid xs={4}>
          <img src={coverphoto2} style={{ width: '400px', height: '600px' }} />
          <img src={coverphoto3} style={{ width: '400px', height: '600px' }} className="mt-3" />
        </Grid>
        <Grid xs={8}>
          <ImageList sx={{ width: '100', height: '100%' }} variant="woven" cols={3} gap={8}>
            {fitImages.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${image.assets.huge_thumb.url}?w=161&fit=crop&auto=format`}
                  srcSet={`${image.assets.huge_thumb.url}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  alt="fitness"
                  loading="lazy"
                  style={{ margin: '0px 0px -60px 0px' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </>
  );
};
