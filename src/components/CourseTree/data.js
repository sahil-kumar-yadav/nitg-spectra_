
const data = [
  {
    year: 'Year 1',
    semesters: [
      {
        semester: 'Semester 1',
        courses: [
          {
            course: 'Introduction to Computer Science',
            files: [
              { name: 'File 1A1', icon: 'file-pdf', url: '/pdfs/sample.pdf' },
              { name: 'File 1A2', icon: 'file-word', url: '/pdfs/sample.pdf' },
            ],
          },
          {
            course: 'Introduction to Communication Engineering',
            files: [
              { name: 'File 1A1', icon: 'file-pdf', url: '/pdfs/sample.pdf' },
              { name: 'File 1A2', icon: 'file-word', url: '/pdfs/sample.pdf' },
            ],
          },
          // Add more courses as needed
        ],
      },
      {
        semester: 'Semester 2',
        courses: [
          {
            course: 'Data Structures',
            files: [
              { name: 'File 1B1', icon: 'file-pdf', url: '/pdfs/sample.pdf' },
              { name: 'File 1B2', icon: 'file-word', url: '/pdfs/sample.pdf' },
            ],
          },
          // Add more courses as needed
        ],
      },
    ],
  },
  {
    year: 'Year 2',
    semesters: [
      {
        semester: 'Semester 1',
        courses: [
          {
            course: 'Introduction to Computer Science',
            files: [
              { name: 'File 1A1', icon: 'file-pdf', url: '/pdfs/sample.pdf' },
              { name: 'File 1A2', icon: 'file-word', url: '/pdfs/sample.pdf' },
            ],
          },
          // Add more courses as needed
        ],
      },
      {
        semester: 'Semester 2',
        courses: [
          {
            course: 'Data Structures',
            files: [
              { name: 'File 1B1', icon: 'file-pdf', url: '/pdfs/sample.pdf' },
              { name: 'File 1B2', icon: 'file-word', url: '/pdfs/sample.pdf' },
            ],
          },
          // Add more courses as needed
        ],
      },
    ],
  },
  {
    year: 'Year 3',
    semesters: [
      // Add data for Year 2 as needed
    ],
  },
  // Add data for subsequent years as needed
];

export default data;
