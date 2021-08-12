import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    width: '100%',
    left: 0,
    bottom: 0,
    backgroundColor: 'rgb(39 42 44)'
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="YouTube" value="YouTube" icon={<YouTubeIcon style={{color: 'red'}} />} href="https://www.youtube.com/"/>
      <BottomNavigationAction label="Instagram" value="Instagram" icon={<InstagramIcon style={{color: 'pink'}} />} href="https://instagram.com" />
      <BottomNavigationAction label="Telegram" value="Telegram" icon={<TelegramIcon style={{color: 'blue'}} />} href="https://telegram.org" />
      <BottomNavigationAction label="Twitter" value="Twitter" icon={<TwitterIcon style={{color: 'blue'}} />} href="https://twitter.com/?lang=ru" />
      <h5 style={{color: '#f50057', marginTop: 12, marginLeft: 80}}>email: Library@gmail.com&#8195;</h5>
      <Button label="Adress" value="adress" style={{color: '#f50057', marginLeft: 100, fontSize: 15}}  href="https://www.google.ru/maps/place/12+%D1%83%D0%BB.+%D0%AF%D0%BA%D0%BE%D0%B2%D0%B0+%D0%9B%D0%BE%D0%B3%D0%B2%D0%B8%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE,+%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/@42.8613866,74.5962219,17z/data=!3m1!4b1!4m5!3m4!1s0x389eb7d48514cee5:0x12f0b11436b1de75!8m2!3d42.8613866!4d74.5984106" >&#8195;Адрес: Логвиненко 12</Button>
    </BottomNavigation>
    
  );
}
