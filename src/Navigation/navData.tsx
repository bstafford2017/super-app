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
import { grey } from '@mui/material/colors';

export interface NavItem {
  id: number;
  icon: React.Component;
  link: string;
  text: string;
}

export default [
  {
    id: 1,
    icon: <SchoolIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/fact',
    text: 'Fact',
  },
  {
    id: 2,
    icon: <FactCheckIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/trivia',
    text: 'Trivia',
  },
  {
    id: 3,
    icon: <PsychologyAltIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/riddle',
    text: 'Riddle',
  },
  {
    id: 4,
    icon: <CameraAltIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/image',
    text: 'Image',
  },
  {
    id: 5,
    icon: <TheaterComedyIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/joke',
    text: 'Dad joke',
  },
  {
    id: 6,
    icon: <GolfCourseIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/hobby',
    text: 'Hobby',
  },
  {
    id: 7,
    icon: <TheatersIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/ron-quote',
    text: 'Ron Quote',
  },
  {
    id: 8,
    icon: <ThumbUpAltIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/advice',
    text: 'Advice',
  },
  {
    id: 9,
    icon: <CenterFocusStrongIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/gif',
    text: 'GIF',
  },
  {
    id: 10,
    icon: <NewspaperIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/news',
    text: 'News',
  },
  {
    id: 11,
    icon: <CalendarMonthIcon sx={{ color: grey[100] }} fontSize="large" />,
    link: '/national-today',
    text: 'National day',
  },
];
