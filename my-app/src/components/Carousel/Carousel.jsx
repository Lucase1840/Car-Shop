import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carousel({ carouselData }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = carouselData ? carouselData.length : 0

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
        <Box sx={{ maxWidth: "100%" }}>
            {/* <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: '#F7F7F7',
                }}
            >
            </Paper> */}

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >

                {carouselData ? carouselData.map((detail, i) => {
                    return (<div key={i}>
                        {Math.abs(activeStep - i) <= 2 ? (
                            <Box sx={{
                                display: 'flex',
                                flexDirection: "row",
                                height: 410,
                                alignItems: "center",
                                justifyContent: "space-around",
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    alignItems: "left",
                                    maxWidth: 270,
                                    height: "265px",
                                    padding: 2,
                                }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            // overflow: 'hidden',
                                            width: '100%',
                                            height: "380px"
                                        }}
                                        src={detail.image}
                                        alt={detail.name}
                                    />
                                    <Typography sx={{
                                        fontWeight: "bold",
                                        fontSize: { sx: "2vw", xl: "1vw" },
                                        mt: 1
                                    }}>{detail.description}</Typography>
                                    <Typography sx={{
                                        mt: 1
                                    }}>{detail.name}</Typography>
                                </Box>
                            </Box>
                        ) : null}
                    </div>)
                }) : ''}

            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }

            />
        </Box>
    );
}

export default Carousel;