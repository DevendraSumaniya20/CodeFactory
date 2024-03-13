const questions = {
  design_principles: [
    {
      question:
        'What design principle focuses on making designs easy to understand and use?',
      options: [
        {id: '0', option: 'A', answer: 'Balance'},
        {id: '1', option: 'B', answer: 'Contrast'},
        {id: '2', option: 'C', answer: 'Emphasis'},
        {id: '3', option: 'D', answer: 'Proportion'},
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'How do design principles impact UI development?',
      options: [
        {id: '0', option: 'A', answer: 'They guide layout and hierarchy'},
        {id: '1', option: 'B', answer: 'They influence color choices'},
        {id: '2', option: 'C', answer: 'They affect user interactions'},
        {id: '3', option: 'D', answer: 'They shape content structure'},
      ],
      correctAnswerIndex: 0,
    },
  ],
  accessibility: [
    {
      question: 'Why is accessibility important in UI design?',
      options: [
        {id: '0', option: 'A', answer: 'It enhances visual appeal'},
        {
          id: '1',
          option: 'B',
          answer: ' It ensures compatibility with all devices',
        },
        {
          id: '2',
          option: 'C',
          answer: 'It improves user experience for people with disabilities',
        },
        {id: '3', option: 'D', answer: 'It reduces development time'},
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'What are key practices for web accessibility?',
      options: [
        {id: '0', option: 'A', answer: 'Use alt text for images'},
        {id: '1', option: 'B', answer: 'Maintain consistent layout'},
        {id: '2', option: 'C', answer: 'Ensure high color contrast'},
        {id: '3', option: 'D', answer: 'Avoid complex animations'},
      ],
      correctAnswerIndex: 0,
    },
  ],
  color_theory: [
    {
      question: 'What role does color theory play in design?',
      options: [
        {id: '0', option: 'A', answer: 'It evokes emotions and messages'},
        {id: '1', option: 'B', answer: 'It dictates font sizes'},
        {id: '2', option: 'C', answer: 'It influences layout'},
        {id: '3', option: 'D', answer: 'It affects interactions'},
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'How does understanding color theory improve UX in apps?',
      options: [
        {id: '0', option: 'A', answer: 'By creating appealing interfaces'},
        {id: '1', option: 'B', answer: 'By speeding up load times'},
        {id: '2', option: 'C', answer: 'By enhancing server response'},
        {id: '3', option: 'D', answer: 'By adding more features'},
      ],
      correctAnswerIndex: 0,
    },
  ],
  typography: [
    {
      question: 'Why is typography important in design?',
      options: [
        {id: '0', option: 'A', answer: 'It improves readability and appeal'},
        {id: '1', option: 'B', answer: 'It speeds up development'},
        {id: '2', option: 'C', answer: 'It boosts server performance'},
        {id: '3', option: 'D', answer: 'It decreases engagement'},
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'What typography mistakes should be avoided in UI design?',
      options: [
        {id: '0', option: 'A', answer: 'Using too many fonts'},
        {id: '1', option: 'B', answer: 'Using small font sizes'},
        {id: '2', option: 'C', answer: 'Ignoring line spacing'},
        {id: '3', option: 'D', answer: 'Using only uppercase letters'},
      ],
      correctAnswerIndex: 0,
    },
  ],
  HTML: [
    {
      question: 'What does HTML stand for?',
      options: [
        {id: '0', option: 'A', answer: 'Hyper Text Markup Language'},
        {id: '1', option: 'B', answer: 'Hyperlinks and Text Markup Language'},
        {id: '2', option: 'C', answer: 'Home Tool Markup Language'},
        {id: '3', option: 'D', answer: 'Hyperlink Text Markdown Language'},
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Which tag defines an unordered list in HTML?',
      options: [
        {id: '0', option: 'A', answer: '<ul>'},
        {id: '1', option: 'B', answer: '<ol>'},
        {id: '2', option: 'C', answer: '<li>'},
        {id: '3', option: 'D', answer: '<list>'},
      ],
      correctAnswerIndex: 0,
    },
  ],
  CSS: [
    {
      question: 'What does CSS stand for?',
      options: [
        {id: '0', option: 'A', answer: 'Cascading Style Sheets'},
        {id: '1', option: 'B', answer: 'Computer Style Sheets'},
        {id: '2', option: 'C', answer: 'Colorful Style Sheets'},
        {id: '3', option: 'D', answer: 'Creative Style Sheets'},
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Which CSS property changes text color?',
      options: [
        {id: '0', option: 'A', answer: 'color'},
        {id: '1', option: 'B', answer: 'text-color'},
        {id: '2', option: 'C', answer: 'font-color'},
        {id: '3', option: 'D', answer: 'text-style'},
      ],
      correctAnswerIndex: 0,
    },
  ],
  JavaScript: [
    {
      question: 'What is JavaScript?',
      options: [
        {id: '0', option: 'A', answer: 'A programming language'},
        {id: '1', option: 'B', answer: 'A markup language'},
        {id: '2', option: 'C', answer: 'A styling language'},
        {id: '3', option: 'D', answer: 'A scripting language'},
      ],
      correctAnswerIndex: 3,
    },
    {
      question: 'How do you declare a variable in JavaScript?',
      options: [
        {id: '0', option: 'A', answer: 'var'},
        {id: '1', option: 'B', answer: 'let'},
        {id: '2', option: 'C', answer: 'const'},
        {id: '3', option: 'D', answer: 'variable'},
      ],
      correctAnswerIndex: 0,
    },
  ],
  Responsive_Design: [
    {
      question: 'What is responsive web design?',
      options: [
        {id: '0', option: 'A', answer: 'Designing for various screens'},
        {id: '1', option: 'B', answer: 'Designing only for mobile'},
        {id: '2', option: 'C', answer: 'Using fixed layouts'},
        {id: '3', option: 'D', answer: 'Designing only for desktops'},
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'Which CSS feature makes a website responsive?',
      options: [
        {id: '0', option: 'A', answer: 'flex'},
        {id: '1', option: 'B', answer: 'responsive-layout'},
        {id: '2', option: 'C', answer: 'media-queries'},
        {id: '3', option: 'D', answer: 'fixed-layout'},
      ],
      correctAnswerIndex: 2,
    },
  ],

  data_analysis: [
    {
      question:
        'What type of chart is best suited for showing the distribution of a single categorical variable?',
      options: [
        {id: '0', option: 'A', answer: 'Scatter plot'},
        {id: '1', option: 'B', answer: 'Histogram'},
        {id: '2', option: 'C', answer: 'Pie chart'},
        {id: '3', option: 'D', answer: 'Line chart'},
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        'Which measure of central tendency is affected most by extreme values?',
      options: [
        {id: '0', option: 'A', answer: 'Mean'},
        {id: '1', option: 'B', answer: 'Median'},
        {id: '2', option: 'C', answer: 'Mode'},
        {id: '3', option: 'D', answer: 'Standard deviation'},
      ],
      correctAnswerIndex: 0,
    },
  ],

  data_visualization: [
    {
      question:
        'Which type of chart is used to show the composition of a whole?',
      options: [
        {id: '0', option: 'A', answer: 'Bar chart'},
        {id: '1', option: 'B', answer: 'Line chart'},
        {id: '2', option: 'C', answer: 'Pie chart'},
        {id: '3', option: 'D', answer: 'Scatter plot'},
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        'What type of chart is best for comparing values across different categories?',
      options: [
        {id: '0', option: 'A', answer: 'Histogram'},
        {id: '1', option: 'B', answer: 'Line chart'},
        {id: '2', option: 'C', answer: 'Bar chart'},
        {id: '3', option: 'D', answer: 'Pie chart'},
      ],
      correctAnswerIndex: 2,
    },
  ],

  machine_learning: [
    {
      question: 'Which type of algorithm is used for classification problems?',
      options: [
        {id: '0', option: 'A', answer: 'Decision Tree'},
        {id: '1', option: 'B', answer: 'Regression'},
        {id: '2', option: 'C', answer: 'Clustering'},
        {id: '3', option: 'D', answer: 'Neural Network'},
      ],
      correctAnswerIndex: 0,
    },
    {
      question: 'What is the goal of unsupervised learning?',
      options: [
        {id: '0', option: 'A', answer: 'Predict a target variable'},
        {
          id: '1',
          option: 'B',
          answer: 'Minimize errors between predicted and actual values',
        },
        {
          id: '2',
          option: 'C',
          answer: 'Discover patterns or structures in data',
        },
        {
          id: '3',
          option: 'D',
          answer: 'Classify data into predefined categories',
        },
      ],
      correctAnswerIndex: 2,
    },
  ],

  statistics: [
    {
      question: 'What measure of variability is resistant to outliers?',
      options: [
        {id: '0', option: 'A', answer: 'Range'},
        {id: '1', option: 'B', answer: 'Standard Deviation'},
        {id: '2', option: 'C', answer: 'Mean Absolute Deviation'},
        {id: '3', option: 'D', answer: 'Variance'},
      ],
      correctAnswerIndex: 2,
    },
    {
      question: 'What does the p-value represent in hypothesis testing?',
      options: [
        {
          id: '0',
          option: 'A',
          answer: 'The probability of making a Type II error',
        },
        {
          id: '1',
          option: 'B',
          answer:
            'The probability of observing the data given that the null hypothesis is true',
        },
        {
          id: '2',
          option: 'C',
          answer:
            'The probability of rejecting the null hypothesis when it is actually true',
        },
        {
          id: '3',
          option: 'D',
          answer: 'The probability of making a Type I error',
        },
      ],
      correctAnswerIndex: 1,
    },
  ],

  visual_hierarchy: [
    {
      question:
        'What principle of visual hierarchy emphasizes the importance of arranging elements in order of their significance?',
      options: [
        {id: '0', option: 'A', answer: 'Contrast'},
        {id: '1', option: 'B', answer: 'Alignment'},
        {id: '2', option: 'C', answer: 'Proximity'},
        {id: '3', option: 'D', answer: 'Hierarchy'},
      ],
      correctAnswerIndex: 3,
    },
    {
      question:
        "Which element of design is used to guide the viewer's eye through a composition in a deliberate way?",
      options: [
        {id: '0', option: 'A', answer: 'Color'},
        {id: '1', option: 'B', answer: 'Texture'},
        {id: '2', option: 'C', answer: 'Line'},
        {id: '3', option: 'D', answer: 'Direction'},
      ],
      correctAnswerIndex: 3,
    },
  ],

  image_editing: [
    {
      question:
        'What is the process of removing imperfections or unwanted elements from an image called?',
      options: [
        {id: '0', option: 'A', answer: 'Sharpening'},
        {id: '1', option: 'B', answer: 'Cropping'},
        {id: '2', option: 'C', answer: 'Retouching'},
        {id: '3', option: 'D', answer: 'Filtering'},
      ],
      correctAnswerIndex: 2,
    },
    {
      question:
        'Which tool is commonly used to adjust the brightness and contrast of an image?',
      options: [
        {id: '0', option: 'A', answer: 'Brush tool'},
        {id: '1', option: 'B', answer: 'Levels adjustment'},
        {id: '2', option: 'C', answer: 'Blur tool'},
        {id: '3', option: 'D', answer: 'Eraser tool'},
      ],
      correctAnswerIndex: 1,
    },
  ],

  typography: [
    {
      question: 'What term refers to the spacing between lines of text?',
      options: [
        {id: '0', option: 'A', answer: 'Kerning'},
        {id: '1', option: 'B', answer: 'Leading'},
        {id: '2', option: 'C', answer: 'Tracking'},
        {id: '3', option: 'D', answer: 'Alignment'},
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'What does the term "serif" refer to in typography?',
      options: [
        {
          id: '0',
          option: 'A',
          answer: 'A typeface without decorative features',
        },
        {
          id: '1',
          option: 'B',
          answer: 'The decorative strokes at the ends of characters',
        },
        {id: '2', option: 'C', answer: 'The spacing between characters'},
        {id: '3', option: 'D', answer: 'The size of the typeface'},
      ],
      correctAnswerIndex: 1,
    },
  ],

  branding: [
    {
      question: 'What is a brand style guide?',
      options: [
        {
          id: '0',
          option: 'A',
          answer:
            'A document outlining the colors, fonts, and visual elements of a brand',
        },
        {
          id: '1',
          option: 'B',
          answer: 'A marketing strategy to increase brand awareness',
        },
        {
          id: '2',
          option: 'C',
          answer: 'A financial plan for brand development',
        },
        {
          id: '3',
          option: 'D',
          answer: 'A customer feedback system for brand improvement',
        },
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What is the process of creating a unique name and image for a product in the consumers' mind called?",
      options: [
        {id: '0', option: 'A', answer: 'Advertising'},
        {id: '1', option: 'B', answer: 'Marketing'},
        {id: '2', option: 'C', answer: 'Branding'},
        {id: '3', option: 'D', answer: 'Promotion'},
      ],
      correctAnswerIndex: 2,
    },
  ],

  programming_fundamentals: [
    {
      question:
        "What is the term for a named storage location in a computer's memory?",
      options: [
        {id: '0', option: 'A', answer: 'Variable'},
        {id: '1', option: 'B', answer: 'Function'},
        {id: '2', option: 'C', answer: 'Operator'},
        {id: '3', option: 'D', answer: 'Class'},
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        'Which programming construct allows for the execution of a set of statements repeatedly?',
      options: [
        {id: '0', option: 'A', answer: 'Loop'},
        {id: '1', option: 'B', answer: 'Function'},
        {id: '2', option: 'C', answer: 'Conditional statement'},
        {id: '3', option: 'D', answer: 'Array'},
      ],
      correctAnswerIndex: 0,
    },
  ],

  algorithms: [
    {
      question:
        'What is the process of finding the solution to a problem through step-by-step procedures called?',
      options: [
        {id: '0', option: 'A', answer: 'Programming'},
        {id: '1', option: 'B', answer: 'Algorithm'},
        {id: '2', option: 'C', answer: 'Data structure'},
        {id: '3', option: 'D', answer: 'Function'},
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        'Which algorithmic technique is used to decrease the time complexity of algorithms?',
      options: [
        {id: '0', option: 'A', answer: 'Divide and conquer'},
        {id: '1', option: 'B', answer: 'Greedy algorithms'},
        {id: '2', option: 'C', answer: 'Dynamic programming'},
        {id: '3', option: 'D', answer: 'Backtracking'},
      ],
      correctAnswerIndex: 2,
    },
  ],

  data_structures: [
    {
      question:
        'Which data structure follows the Last In First Out (LIFO) principle?',
      options: [
        {id: '0', option: 'A', answer: 'Queue'},
        {id: '1', option: 'B', answer: 'Stack'},
        {id: '2', option: 'C', answer: 'Linked list'},
        {id: '3', option: 'D', answer: 'Tree'},
      ],
      correctAnswerIndex: 1,
    },
    {
      question: 'Which data structure organizes data in a hierarchical manner?',
      options: [
        {id: '0', option: 'A', answer: 'Array'},
        {id: '1', option: 'B', answer: 'Graph'},
        {id: '2', option: 'C', answer: 'Queue'},
        {id: '3', option: 'D', answer: 'Tree'},
      ],
      correctAnswerIndex: 3,
    },
  ],

  debugging: [
    {
      question:
        'What is the process of identifying and removing errors from a computer program called?',
      options: [
        {id: '0', option: 'A', answer: 'Testing'},
        {id: '1', option: 'B', answer: 'Debugging'},
        {id: '2', option: 'C', answer: 'Compiling'},
        {id: '3', option: 'D', answer: 'Running'},
      ],
      correctAnswerIndex: 1,
    },
    {
      question:
        'Which debugging technique involves systematically adding print statements to code to track the flow of execution?',
      options: [
        {id: '0', option: 'A', answer: 'Breakpoint debugging'},
        {id: '1', option: 'B', answer: 'Logging'},
        {id: '2', option: 'C', answer: 'Interactive debugging'},
        {id: '3', option: 'D', answer: 'Tracing'},
      ],
      correctAnswerIndex: 3,
    },
  ],
};

export default questions;

/*{
  question: '',
  options: [
    {id: '0', option: 'A', answer: ''},
    {id: '1', option: 'B', answer: ''},
    {id: '2', option: 'C', answer: ''},
    {id: '3', option: 'D', answer: ''},
  ],
  correctAnswerIndex: 0,
 }, */
