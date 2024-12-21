// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Box, HStack } from '@chakra-ui/react';

// You can customize the settings for the carousel (speed, arrows, etc.)
const carouselSettings = {
  dots: true, // Shows dots below the carousel
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

const carouselData = [
  "/images/ganga_ghat_1.jpg",
  "/images/ganga_ghat_3.jpg",
  "/images/ganga_ghat_3.jpg"
];

const Slide = () => {
  return (
    <HStack
      w="100%" // Correct the width from '１００％' to '100%'
      h="200px"
      bg="cyan.400"
      border="cyan.700"
      alignContent="center"
      justifyContent="center"
      mx="4"
    >
      {carouselData.map((carouselItem, index) => (
        <img src={carouselItem} alt="Slide 1" key={index} />
      ))}
    </HStack>
  );
};

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Box m="20">
        <Box
          sx={{
            ".slick-dots": {
              transform: "translateY(1em)"
            },
            ".slick-dots li button": {
              _before: {
                transition: "0.2s",
                content: "''",
                borderRadius: "100%",
                background: "cyan.500"
              }
            },
            ".slick-arrow": {
              backgroundColor: "cyan.500",
              color: "white",
              w: "30px",
              h: "50px",
              transition: "0.2s",
              _hover: {
                backgroundColor: "cyan.500",
                color: "white"
              },
              _focus: {
                backgroundColor: "cyan.500",
                color: "white"
              },
              _before: {
                transition: "0.2s"
              }
            },
            ".slick-prev": {
              left: "-40px",
              _before: {
                content: '"◀"'
              }
            },
            ".slick-next": {
              right: "-40px",
              _before: {
                content: '"▶"'
              }
            }
          }}
        >
          <Slider {...carouselSettings}>
            <Slide />
          </Slider>
        </Box>
      </Box>
    </div>
  );
}

export default Carousel;
