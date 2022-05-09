
import { Box } from '@mui/material';
import React from 'react';
import { CarouselBox } from '../styled/StyledBox';

export const Carousel = () => {
  return (
    <div>
      
<CarouselBox>
  <Box
  component={'img'}
  src="https://res.cloudinary.com/imajin/image/upload/v1592043748/movie/movie1_q5acl5.jpg"
  width="25%"
  borderRadius={5}
  position="relative" top="10%" left="25%"
  />




</CarouselBox>
      
    </div>
  );
};

export default Carousel;