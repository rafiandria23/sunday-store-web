'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          name: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
          description:
            'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!',
          image_url: 'https://i.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Modern React with Redux [2020 Update]',
          description:
            'Master React v16.6.3 and Redux with React Router, Webpack, and Create-React-App. Includes Hooks!',
          image_url: 'https://i.udemycdn.com/course/240x135/705264_caa9_11.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Advanced React and Redux: 2020 Edition',
          description:
            "Detailed walkthroughs on advanced React and Redux concepts - Authentication, Testing, Middlewares, HOC's, and Deployment",
          image_url: 'https://i.udemycdn.com/course/240x135/781532_8b4d_6.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Node with React: Fullstack Web Development',
          description:
            'Build and deploy fullstack web apps with NodeJS, React, Redux, Express, and MongoDB.',
          image_url: 'https://i.udemycdn.com/course/240x135/1254420_f6cb_4.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Complete React Developer Course (w/ Hooks and Redux)',
          description:
            'Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!',
          image_url: 'https://i.udemycdn.com/course/240x135/1286908_1773_5.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'GraphQL with React: The Complete Developers Guide',
          description:
            'Learn and master GraphQL by building real web apps with React and Node',
          image_url: 'https://i.udemycdn.com/course/240x135/1109926_7f97_2.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)',
          description:
            'Become a Senior React Developer! Build a massive E-commerce app with Redux, Hooks, GraphQL, ContextAPI, Stripe, Firebase',
          image_url: 'https://i.udemycdn.com/course/240x135/2365628_0b60_7.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Server Side Rendering with React and Redux',
          description:
            'Build React, Redux, and React Router apps using Server Side Rendering (SSR), Isomorphic, and Universal JS techniques',
          image_url: 'https://i.udemycdn.com/course/240x135/1383496_caab_4.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Modern React Bootcamp (Hooks, Context, NextJS, Router)',
          description:
            'Just published! Follow the same curriculum I teach my students in SF. 10+ projects including one HUGE application!',
          image_url: 'https://i.udemycdn.com/course/240x135/2320056_4fa0_6.jpg',
          price: 168000,
          stock: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
