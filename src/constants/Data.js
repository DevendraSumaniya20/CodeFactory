import Color from './Color';
import ImagePath from './ImagePath';
import questions from './Questions';

const data = [
  {
    id: 1,
    image: ImagePath.UI_IMG,
    Price: 3700,
    duration: '3 h 30 min',
    type: 'UI',
    otherDetails: 'Advanced mobile interface design',
    backgroundColor: Color.DETAILSBACKGROUND,
    aboutCourseDetails:
      'Learn to create stunning user interfaces for mobile applications with advanced techniques and design principles. Dive deep into usability, accessibility, and aesthetics to craft seamless user experiences that elevate your app to the next level.',
    topics: {
      topic1: {
        name: 'design principles',
        questions: questions.design_principles,
      },
      topic2: {
        name: 'accessibility',
        questions: questions.accessibility,
      },
      topic3: {
        name: 'color theory',
        questions: questions.color_theory,
      },
      topic4: {
        name: 'typography',
        questions: questions.typography,
      },
    },
  },
  {
    id: 2,
    image: ImagePath.WEB_IMG,
    Price: 4440,
    duration: '4 h',
    type: 'Web Development',
    otherDetails: 'Responsive website design and development',
    backgroundColor: Color.DETAILSBACKGROUND,
    aboutCourseDetails:
      'Master the art of building responsive websites that adapt flawlessly to various devices and screen sizes. Explore the latest web technologies and best practices in front-end development to create engaging and dynamic web experiences.',
    topics: {
      topic1: {
        name: 'HTML',
        questions: questions.HTML,
      },
      topic2: {
        name: 'CSS',
        questions: questions.CSS,
      },
      topic3: {
        name: 'JavaScript',
        questions: questions.JavaScript,
      },
      topic4: {
        name: 'Responsive Design',
        questions: questions.Responsive_Design,
      },
    },
  },
  {
    id: 3,
    image: ImagePath.DATA_SCIENCE_IMG,
    Price: 3330,
    duration: '2 h 45 min',
    type: 'Data Science',
    otherDetails: 'Introduction to data analysis and visualization',
    backgroundColor: Color.LIGHTGRAY,
    aboutCourseDetails:
      'Unlock the power of data through fundamental analysis and visualization techniques. Gain insights into the world of data science, from collecting and cleaning data to interpreting patterns and trends for informed decision-making.',
    topics: {
      topic1: {
        name: 'data analysis',
        questions: questions.data_analysis,
      },
      topic2: {
        name: 'data visualization',
        questions: questions.data_visualization,
      },
      topic3: {
        name: 'machine learning',
        questions: questions.machine_learning,
      },
      topic4: {
        name: 'statistics',
        questions: questions.statistics,
      },
    },
  },
  {
    id: 4,
    image: ImagePath.GRAPHICS_IMG,
    Price: 4070,
    duration: '3 h 15 min',
    type: 'Graphic Design',
    otherDetails: 'Fundamentals of digital graphic design',
    backgroundColor: Color.DETAILSBACKGROUND,
    aboutCourseDetails:
      'Delve into the core principles of digital graphic design and unleash your creativity. Learn essential design concepts, tools, and workflows to create visually captivating graphics for various digital platforms and mediums.',
    topics: {
      topic1: {
        name: 'visual hierarchy',
        questions: questions.visual_hierarchy,
      },
      topic2: {
        name: 'image editing',
        questions: questions.image_editing,
      },
      topic3: {
        name: 'typography',
        questions: questions.typography,
      },
      topic4: {
        name: 'branding',
        questions: questions.branding,
      },
    },
  },
  {
    id: 5,
    image: ImagePath.PROGRAMING_IMG,
    Price: 5180,
    duration: '5 h',
    type: 'Programming',
    otherDetails: 'Comprehensive introduction to programming concepts',
    backgroundColor: Color.LIGHTGRAY,
    aboutCourseDetails:
      'Embark on a comprehensive journey through the fundamental concepts of programming. From basic syntax to advanced algorithms, this course equips you with the knowledge and skills needed to kickstart your programming career.',
    topics: {
      topic1: {
        name: 'programming fundamentals',
        questions: questions.programming_fundamentals,
      },
      topic2: {
        name: 'algorithms',
        questions: questions.algorithms,
      },
      topic3: {
        name: 'data structures',
        questions: questions.data_structures,
      },
      topic4: {
        name: 'debugging',
        questions: questions.debugging,
      },
    },
  },

  {
    id: 6,
    image: ImagePath.UI_IMG,
    Price: 3700,
    duration: '3 h 30 min',
    type: 'UI',
    otherDetails: 'Advanced mobile interface design',
    backgroundColor: Color.DETAILSBACKGROUND,
    aboutCourseDetails:
      'Learn to create stunning user interfaces for mobile applications with advanced techniques and design principles. Dive deep into usability, accessibility, and aesthetics to craft seamless user experiences that elevate your app to the next level.',
    topics: {
      topic1: {
        name: 'design principles',
        questions: questions.design_principles,
      },
      topic2: {
        name: 'accessibility',
        questions: questions.accessibility,
      },
      topic3: {
        name: 'color theory',
        questions: questions.color_theory,
      },
      topic4: {
        name: 'typography',
        questions: questions.typography,
      },
    },
  },
  {
    id: 7,
    image: ImagePath.WEB_IMG,
    Price: 4440,
    duration: '4 h',
    type: 'Web Development',
    otherDetails: 'Responsive website design and development',
    backgroundColor: Color.DETAILSBACKGROUND,
    aboutCourseDetails:
      'Master the art of building responsive websites that adapt flawlessly to various devices and screen sizes. Explore the latest web technologies and best practices in front-end development to create engaging and dynamic web experiences.',
    topics: {
      topic1: {
        name: 'HTML',
        questions: questions.HTML,
      },
      topic2: {
        name: 'CSS',
        questions: questions.CSS,
      },
      topic3: {
        name: 'JavaScript',
        questions: questions.JavaScript,
      },
      topic4: {
        name: 'Responsive Design',
        questions: questions.Responsive_Design,
      },
    },
  },
  {
    id: 8,
    image: ImagePath.DATA_SCIENCE_IMG,
    Price: 3330,
    duration: '2 h 45 min',
    type: 'Data Science',
    otherDetails: 'Introduction to data analysis and visualization',
    backgroundColor: Color.LIGHTGRAY,
    aboutCourseDetails:
      'Unlock the power of data through fundamental analysis and visualization techniques. Gain insights into the world of data science, from collecting and cleaning data to interpreting patterns and trends for informed decision-making.',
    topics: {
      topic1: {
        name: 'data analysis',
        questions: questions.data_analysis,
      },
      topic2: {
        name: 'data visualization',
        questions: questions.data_visualization,
      },
      topic3: {
        name: 'machine learning',
        questions: questions.machine_learning,
      },
      topic4: {
        name: 'statistics',
        questions: questions.statistics,
      },
    },
  },
  {
    id: 9,
    image: ImagePath.GRAPHICS_IMG,
    Price: 4070,
    duration: '3 h 15 min',
    type: 'Graphic Design',
    otherDetails: 'Fundamentals of digital graphic design',
    backgroundColor: Color.DETAILSBACKGROUND,
    aboutCourseDetails:
      'Delve into the core principles of digital graphic design and unleash your creativity. Learn essential design concepts, tools, and workflows to create visually captivating graphics for various digital platforms and mediums.',
    topics: {
      topic1: {
        name: 'visual hierarchy',
        questions: questions.visual_hierarchy,
      },
      topic2: {
        name: 'image editing',
        questions: questions.image_editing,
      },
      topic3: {
        name: 'typography',
        questions: questions.typography,
      },
      topic4: {
        name: 'branding',
        questions: questions.branding,
      },
    },
  },
  {
    id: 10,
    image: ImagePath.PROGRAMING_IMG,
    Price: 5180,
    duration: '5 h',
    type: 'Programming',
    otherDetails: 'Comprehensive introduction to programming concepts',
    backgroundColor: Color.LIGHTGRAY,
    aboutCourseDetails:
      'Embark on a comprehensive journey through the fundamental concepts of programming. From basic syntax to advanced algorithms, this course equips you with the knowledge and skills needed to kickstart your programming career.',
    topics: {
      topic1: {
        name: 'programming fundamentals',
        questions: questions.programming_fundamentals,
      },
      topic2: {
        name: 'algorithms',
        questions: questions.algorithms,
      },
      topic3: {
        name: 'data structures',
        questions: questions.data_structures,
      },
      topic4: {
        name: 'debugging',
        questions: questions.debugging,
      },
    },
  },
];

export default data;
