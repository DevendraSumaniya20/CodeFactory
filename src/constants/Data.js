import Color from './Color';
import ImagePath from './ImagePath';

const data = [
  {
    id: 1,
    image: ImagePath.DATAIMG1,
    Price: '$50',
    duration: '3 h 30 min',
    type: 'UI',
    otherDetails: 'Advanced mobile interface design',
    backgroundColor: Color.DETAILSBACKGROUND,
  },
  {
    id: 2,
    image: ImagePath.DATAIMG2,
    Price: '$60',
    duration: '4 h',
    type: 'Web Development',
    otherDetails: 'Responsive website design and development',
    backgroundColor: Color.DETAILSBACKGROUND,
  },
  {
    id: 3,
    image: ImagePath.DATAIMG3,
    Price: '$45',
    duration: '2 h 45 min',
    type: 'Data Science',
    otherDetails: 'Introduction to data analysis and visualization',
    backgroundColor: Color.LIGHTGRAY,
  },
  {
    id: 4,
    image: ImagePath.DATAIMG4,
    Price: '$55',
    duration: '3 h 15 min',
    type: 'Graphic Design',
    otherDetails: 'Fundamentals of digital graphic design',
    backgroundColor: Color.DETAILSBACKGROUND,
  },
  {
    id: 5,
    image: ImagePath.DATAIMG5,
    Price: '$70',
    duration: '5 h',
    type: 'Programming',
    otherDetails: 'Comprehensive introduction to programming concepts',
    backgroundColor: Color.LIGHTGRAY,
  },
];

export default data;
