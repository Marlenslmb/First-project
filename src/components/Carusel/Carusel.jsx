import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco',
    imgPath:
      'https://images.wallpaperscraft.ru/image/kniga_stranica_listya_82167_1920x1080.jpg',
  },
  {
    label: 'BOOK',
    imgPath:
      'https://images.wallpaperscraft.ru/image/kniga_nadpis_tekst_154956_1920x1080.jpg',
  },
  {
    label: 'Coffe, with a Book',
    imgPath:
      'https://images.wallpaperscraft.ru/image/kniga_chashka_ochki_152285_1920x1080.jpg',
  },
  {
    label: 'Cat',
    imgPath:
      'https://img3.akspic.ru/originals/8/1/9/5/2/125918-gimalajskaya_koshka-murlykane-koshachih-son-kot-1920x1080.jpg',
  },
  {
    label: 'Clock',
    imgPath:
      'https://cdn.wallpapersafari.com/59/29/p97sEt.jpg',
  },
  {
    label: 'Library',
    imgPath:
      'https://cdna.artstation.com/p/assets/images/images/025/569/566/large/conor-powers-stout-powers-stout-conor-interior-render.jpg?1586215256',
  },
  {
    label: 'Nature',
    imgPath:
      'https://st.depositphotos.com/1779860/1683/i/950/depositphotos_16833415-stock-photo-the-book.jpg',
  },
  {
    label: 'Library',
    imgPath:
      'https://wpapers.ru/wallpapers/All/11497/1920x1080_%D0%9A%D0%BD%D0%B8%D0%B6%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BB%D0%BA%D0%B8.jpg',
  },
  {
    label: 'BOOK',
    imgPath:
      'https://storge.pic2.me/c/1360x800/601/5f0b6d9c1a9534.07993924.jpg',
  },
  {
    label: 'Alice',
    imgPath:
      'https://www.cashadvance6online.com/data/archive/img/830955274.jpeg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    margin: '0 auto',
    backgroundColor: '#505050'
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: '#505050'
  },
  img: {
    height: 580,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
}));

function Carusel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

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
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default Carusel;
