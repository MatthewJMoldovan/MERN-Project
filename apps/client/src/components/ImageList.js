import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

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
      <Box sx={{ maxWidth: '100%' }}>
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
                  src={step.assets.huge_thumb.url}
                  style={{ margin: '0px 0px -60px 0px' }}
                  alt="fitness"
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        {/* <MobileStepper steps={maxSteps} position="static" activeStep={activeStep} /> */}
      </Box>
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
    </>
  );
};
