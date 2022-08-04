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
                                height: { xs: 420, xl: 390 },
                                alignItems: "center",
                                justifyContent: "space-around",
                                background: "#F2F2F2",
                                maxWidth: "100vw"
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around",
                                    alignItems: "left",
                                    maxWidth: { xs: "100%", xl: "330px" },
                                    height: { xs: "300px", xl: "300px" },
                                    padding: 2,
                                }}>
                                    <Box
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            width: '100%',
                                            height: { xs: "90%", xl: "200px" },
                                            borderRadius: 3,
                                        }}
                                        src={detail.image}
                                        alt={detail.name}
                                    />
                                    <Typography sx={{
                                        fontWeight: "bold",
                                        fontSize: { xs: "20px", xl: "27px" },
                                        mt: 2
                                    }}>{detail.description}</Typography>
                                    <Typography sx={{
                                        fontSize: { xs: "20px", xl: "24px" },
                                        mt: 1
                                    }}>{detail.name}</Typography>
                                </Box>
                            </Box>
                        ) : null}
                    </div>)
                }) : ''}

            </AutoPlaySwipeableViews>
            <MobileStepper
                sx={{ background: "#F2F2F2", justifyContent: "space-evenly" }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        sx={{ color: "black" }}
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
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ color: "black" }}>
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