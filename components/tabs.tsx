import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  // Media query to detect screen size
  const isSm = useMediaQuery(theme.breakpoints.down('sm')); // sm and below (small screens)

  // Handle tab change
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant={isSm ? 'scrollable' : 'fullWidth'} // Scrollable on sm and below, fullWidth on md and above
        scrollButtons={isSm ? 'auto' : false} // Show scroll buttons only on sm screens
        allowScrollButtonsMobile={isSm} // Allow scroll buttons only on sm screens
        aria-label="scrollable force tabs example"
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          borderRadius: 5, // Round the edges of the whole Tabs container
        }}
      >
        <Tab
          label="Batteries"
          sx={{
            borderRadius: 2, // Rounded corners for individual tabs
            margin: '3px 8px', // Margin between the tabs
            textTransform: 'none', // Disable uppercase text
            padding: '6px 12px', // Padding for a smoother button
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main, // Highlight selected tab with a background color
              color: theme.palette.common.white, // White text when selected
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover, // Hover effect
            },
          }}
        />
        <Tab
          label="Inverters"
          sx={{
            borderRadius: 2,
            margin: '3px 8px',
            textTransform: 'none',
            padding: '6px 12px',
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
        <Tab
          label="Charge Controllers"
          sx={{
            borderRadius: 2,
            margin: '0 8px',
            textTransform: 'none',
            padding: '6px 12px',
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
        <Tab
          label="Solar Panels"
          sx={{
            borderRadius: 2,
            margin: '3px 8px',
            textTransform: 'none',
            padding: '6px 12px',
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
        <Tab
          label="Solar Flood Lights"
          sx={{
            borderRadius: 2,
            margin: '3px 8px',
            textTransform: 'none',
            padding: '6px 12px',
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
        <Tab
          label="Street Lights"
          sx={{
            borderRadius: 2,
            margin: '3px 8px',
            textTransform: 'none',
            padding: '6px 12px',
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
        <Tab
          label="Home Lighting Systems"
          sx={{
            borderRadius: 2,
            margin: '3px 8px',
            textTransform: 'none',
            padding: '6px 12px',
            '&.Mui-selected': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
            },
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }}
        />
      </Tabs>
    </Box>
  );
}
