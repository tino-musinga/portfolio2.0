// import React from 'react';
// import Slider from 'react-slick';
// import './NewsCarousel.css'; // Make sure to create the CSS file for styling

// const newsArticles = [
//   {
//     title: "Johnson C Smith University News",
//     image: "https://via.placeholder.com/300",
//     link: "https://www.jcsu.edu/news/sophomore-tinotenda-musingarimi-networks-find-golden-opportunities"
//   },
//   {
//     title: "Ally Bank Moguls in the Making",
//     image: "https://via.placeholder.com/300",
//     link: "https://www.ally.com/go/moguls/"
//   },
//   {
//     title: "JP Morgan Data for Good Challenge",
//     image: "https://via.placeholder.com/300",
//     link: "https://www.jpmorgan.com/technology/technology-blog/advancing-hbcu"
//   },
//   {
//     title: "Duke Endowment Luncheon",
//     image: "https://via.placeholder.com/300",
//     link: "https://www.linkedin.com/feed/update/urn:li:activity:7259365605500207104/"
//   },
//   {
//     title: "American Airline BE SMART Hackathon",
//     image: "https://via.placeholder.com/300",
//     link: "https://www.prnewswire.com/news-releases/hbcu-students-showcase-tech-talent-at-black-enterprises-9th-annual-be-smart-hackathon-in-charlotte-302291886.html"
//   }
// ];

// const NewsCarousel = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//   };

//   return (
//     <div className="news-carousel-container">
//       <h2>Tino in the News</h2>
//       <Slider {...settings}>
//         {newsArticles.map((article, index) => (
//           <div key={index} className="news-article">
//             <a href={article.link} target="_blank" rel="noopener noreferrer">
//               <img src={article.image} alt={`News Article ${index + 1}`} />
//               <h3>{article.title}</h3>
//             </a>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default NewsCarousel;


import React from 'react';
import Slider from 'react-slick';
import './NewsCarousel.css'; // Make sure to create the CSS file for styling

// Import local images
import article1 from '../images/jcsu.jpg';
import article2 from '../images/allyba.jpg';
import article3 from '../images/jpmorg.jpg';
import article4 from '../images/dukeuncheon.jpg';
import article5 from '../images/tinopropi.JPG';

const newsArticles = [
  {
    title: "Johnson C Smith University News",
    image: article1, // Use the imported local image
    link: "https://www.jcsu.edu/news/sophomore-tinotenda-musingarimi-networks-find-golden-opportunities" // Replace with actual article link
  },
  {
    title: "Ally Bank Moguls in the Making",
    image: article2, // Use the imported local image
    link: "https://www.ally.com/go/moguls/" // Replace with actual article link
  },
  {
    title: "JP Morgan Data for Good Challenge",
    image: article3, // Use the imported local image
    link: "https://www.jpmorgan.com/technology/technology-blog/advancing-hbcu" // Replace with actual article link
  },
  {
    title: "Duke Endowment Luncheon",
    image: article4, // Use the imported local image
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7259365605500207104/" // Replace with actual article link
  },
  {
    title: "American Airline BE SMART Hackathon",
    image: article5, // Use the imported local image
    link: "https://www.prnewswire.com/news-releases/hbcu-students-showcase-tech-talent-at-black-enterprises-9th-annual-be-smart-hackathon-in-charlotte-302291886.html" // Replace with actual article link
  }
];

const NewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="news-carousel-container">
      <h2>Tino in the News</h2>
      <Slider {...settings}>
        {newsArticles.map((article, index) => (
          <div key={index} className="news-article">
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              <img src={article.image} alt={`News Article ${index + 1}`} />
              <h3>{article.title}</h3>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;

