import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useNavigate } from 'react-router-dom';

export const Navigation = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction
          label="Ask"
          icon={<PersonIcon />}
          onClick={() => navigate('/')}
        />
        <BottomNavigationAction
          label="National Today"
          icon={<DateRangeIcon />}
          onClick={() => navigate('/national-today')}
        />
      </BottomNavigation>
    </Paper>
  );
};
export default Navigation;
