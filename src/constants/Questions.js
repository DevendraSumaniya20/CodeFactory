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
};

export default questions;
