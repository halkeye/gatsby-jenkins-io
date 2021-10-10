import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import LinkWrapper from './LinkWrapper';
/*
        - slide_background = slide.background || "rgba(0,0,0,0)"
        - if slide.background_image
          - slide_background = "#{slide_background} url(#{expand_link(slide.background_image.src)}) no-repeat center"
          :style => "background: #{slide_background};"}
          */
const Slide = ({
  id, _image, _title, _href, _intro, _call_to_action,
}) => (
  <div className="container">
    {/* Spacing to make content more even */}
    <div className="pt-4">&nbsp;</div>
    <div className="row">
      <div className="col-md-12 col-lg-8 order-first order-lg-last">
        {_image && <GatsbyImage image={getImage(_image._src)} role="presentation" alt="" />}
      </div>
      <div className="col-md-12 col-lg-4 order-last order-lg-first">
        <LinkWrapper to={_href} style={{ fontSize: '16px', color: '#fff', textDecoration: 'none' }}>
          <h2>{_title}</h2>
          <div dangerouslySetInnerHTML={{ __html: _intro }} />
        </LinkWrapper>
        {_call_to_action && <div><LinkWrapper className="btn btn-primary" to={_call_to_action._href}>{_call_to_action._text}</LinkWrapper></div>}
      </div>
    </div>
    <div className="pt-4">&nbsp;</div>
  </div>
);
Slide.displayName = 'ProjectCarouselSlide';

const ProjectCarousel = ({ slides, background, backgroundImage }) => (
  <div style={{
    background: `${background || '#4799d6'}`,
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'inherit',
    backgroundSize: 'cover',
  }}
  >
    <Carousel
      autoPlay
      interval={5000}
      useKeyboardArrows
      infiniteLoop
      swipeable
      showThumbs={false}
    >
      {slides.map((slide) => (<Slide key={slide.id} {...slide} />))}
    </Carousel>
  </div>
);
ProjectCarousel.displayName = 'ProjectCarousel';

export default ProjectCarousel;
