import React from 'react';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SchoolIcon from '@mui/icons-material/School';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import TheatersIcon from '@mui/icons-material/Theaters';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export interface NavItem {
  id: number;
  icon: React.Component;
  link: string;
  text: string;
}

const IconStyles = {
  color: 'white',
  '&:hover': {
    color: 'grey',
  },
};

export default [
  {
    id: 1,
    icon: <SchoolIcon sx={IconStyles} fontSize="large" />,
    link: '/fact',
    text: 'Fact',
  },
  {
    id: 2,
    icon: <FactCheckIcon sx={IconStyles} fontSize="large" />,
    link: '/trivia',
    text: 'Trivia',
  },
  {
    id: 3,
    icon: <PsychologyAltIcon sx={IconStyles} fontSize="large" />,
    link: '/riddle',
    text: 'Riddle',
  },
  {
    id: 4,
    icon: <CameraAltIcon sx={IconStyles} fontSize="large" />,
    link: '/image',
    text: 'Image',
  },
  {
    id: 5,
    icon: <TheaterComedyIcon sx={IconStyles} fontSize="large" />,
    link: '/joke',
    text: 'Dad joke',
  },
  {
    id: 6,
    icon: <GolfCourseIcon sx={IconStyles} fontSize="large" />,
    link: '/hobby',
    text: 'Hobby',
  },
  {
    id: 7,
    icon: <ThumbUpAltIcon sx={IconStyles} fontSize="large" />,
    link: '/advice',
    text: 'Advice',
  },
  {
    id: 8,
    icon: <CenterFocusStrongIcon sx={IconStyles} fontSize="large" />,
    link: '/gif',
    text: 'GIF',
  },
  {
    id: 9,
    icon: <NewspaperIcon sx={IconStyles} fontSize="large" />,
    link: '/news',
    text: 'News',
  },
  {
    id: 10,
    icon: <CalendarMonthIcon sx={IconStyles} fontSize="large" />,
    link: '/national-today',
    text: 'National day',
  },
];
