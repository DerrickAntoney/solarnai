import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

export default function CategoryGrid() {
  const theme = useTheme();
  
  // Define the breakpoints for the responsive grid
  // const isLg = useMediaQuery(theme.breakpoints.up('lg')); // For lg (large screens)
  const isMd = useMediaQuery(theme.breakpoints.between('sm', 'lg')); // For md (medium screens)
  const isSm = useMediaQuery(theme.breakpoints.down('sm')); // For sm (small screens)

  // Define number of columns based on screen size
  let cols = 4; // Default for large screens
  if (isMd) cols = 3; // Medium screens (md)
  if (isSm) cols = 2; // Small screens (sm)

  return (
    <Grid container spacing={2} sx={{ paddingTop: '20px' }}>
      {/* Categories Subheader */}
      <Grid item xs={12}>
        <Typography variant="h6" component="div" align="center" gutterBottom>
          Categories
        </Typography>
      </Grid>
      
      {itemData.map((item, index) => (
        <Grid item xs={12} sm={6} md={cols} key={index}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image={item.img}
              alt={item.category}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" gutterBottom>
                {item.category}
              </Typography>
            </CardContent>
            <IconButton
              sx={{
                color: 'rgba(0, 0, 0, 0.54)',
                position: 'absolute',
                bottom: 10,
                right: 10,
              }}
              aria-label={`info about ${item.category}`}
            >
              <InfoIcon />
            </IconButton>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    category: 'Batteries',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    category: 'Charge Controllers',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    category: 'Solar Panels',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    category: 'Solar Flood Lights',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    category: 'Street Lights',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    category: 'Home Lighting Systems',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    category: 'Batteries',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    category: 'Charge Controllers',
  },
];
