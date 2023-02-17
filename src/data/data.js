const data_portfolio = {
  profile: {
    name: 'Andrés',
    lastName: 'López',
    career: 'Full Stack developer',
    description:
      'Im a entusiastic in technology and solving logic problemes with help of mathematics and engineering...',
    imgUrl: '../assets/img/man_portrait.jpeg',
  },
  about: {
    description: 'lorem ipsum',
  },
  expertise: [
    {
      id: 1,
      field: 'Web development',
      description: 'lorem ...',
      stack: [
        { id: 1, skillName: 'React' },
        { id: 2, skillName: 'MongoDb' },
        { id: 3, skillName: 'ExpressJS' },
        { id: 4, skillName: 'NodeJS' },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      projectName: 'Shared places app',
      typeProject: 'individual',
      stack: [
        { skillName: 'React' },
        { skillName: 'MongoDb' },
        { skillName: 'ExpressJS' },
        { skillName: 'NodeJS' },
      ],
      shortDescription: 'Short description',
      longDescription: 'Long Description',
      designDesicion: 'design desicion lorem',
      challenges: 'challenges lorem',
      gitLink: 'gitlink',
      appLink: 'appLink',
      imgUrl: '../assets/img/project.jpg',
    },
    {
      id: 2,
      projectName: 'Nasa',
      typeProject: 'individual',
      stack: [
        { skillName: 'React' },
        { skillName: 'MongoDb' },
        { skillName: 'ExpressJS' },
        { skillName: 'NodeJS' },
      ],
      shortDescription: 'Short description',
      longDescription: 'Long Description',
      designDesicion: 'design desicion lorem',
      challenges: 'challenges lorem',
      gitLink: 'gitlink',
      appLink: 'appLink',
      imgUrl: '../assets/img/project.jpg',
    },
    {
      id: 3,
      projectName: 'Clothes',
      typeProject: 'individual',
      stack: [
        { skillName: 'React' },
        { skillName: 'MongoDb' },
        { skillName: 'ExpressJS' },
        { skillName: 'NodeJS' },
      ],
      shortDescription: 'Short description',
      longDescription: 'Long Description',
      designDesicion: 'design desicion lorem',
      challenges: 'challenges lorem',
      gitLink: 'gitlink',
      appLink: 'appLink',
      imgUrl: '../assets/img/project.jpg',
    },
  ],
  workExperience: [
    {
      companyName: 'Facebook',
      location: 'USA',
      initDate: '2022',
      endDate: '-',
      tasks: [
        { id: 1, description: 'task lorem 1' },
        { id: 2, description: 'task lorem 2' },
        { id: 3, description: 'task lorem 3' },
      ],
      stack: [
        { id: 1, skillName: 'React' },
        { id: 2, skillName: 'MongoDb' },
        { id: 3, skillName: 'ExpressJS' },
        { id: 4, skillName: 'NodeJS' },
      ],
    },
  ],
  contact: {
    email: 'email',
    gitHbProfile: 'githubprofile',
    linkedInProfile: 'LKProfile',
  },
};

export default data_portfolio;
