import { Project } from '../types';
import im1 from '../assets/im1.png'
import im2 from '../assets/im2.png'
import image from '../assets/image.png'


export const projects: Project[] = [
  {
    id: 'delishha',
    title: 'Delishha',
    description: 'A food ordering app built with the MERN stack that allows users to browse, order, and track their favorite meals.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS', 'Redux','Render'],
    imageUrl: `${im2}` ,
    demoUrl: 'https://food-delivery-app-iota-six.vercel.app/signup',
    githubUrl: 'https://github.com/esha-gupta-11/Food-Delivery-App',
    category: 'web',
    featured: true,
    details: {
      overview: 'Delishha is a food ordering platform that provides users with a seamless experience to browse through various restaurants, view menus, customize orders, and track deliveries in real-time.',
      challenges: 'Implementing real-time order tracking, optimizing database queries for menu items, and ensuring mobile responsiveness across all devices.',
      solutions: 'Utilized Socket.io for real-time updates, implemented MongoDB indexing for faster queries, and used Tailwind CSS for responsive design across all breakpoints.',
      features: [
        'User authentication and profile management',
        'Restaurant search and filtering',
        'Menu browsing with customization options',
        'Secure checkout process',
        'Real-time order tracking',
        'Rating and review system'
      ]
    }
  },
  {
    id: 'knotup',
    title: 'Knot Up',
    description: 'An e-commerce platform for handmade scrunchies with customization options and secure payment processing.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe', ],
    imageUrl: `${image}`,
    demoUrl: 'https://github.com/esha-gupta-11/Knot-up',
    githubUrl: 'https://github.com/esha-gupta-11/Knot-up',
    category: 'web',
    featured: true,
    details: {
      overview: 'Knot Up is a dedicated e-commerce platform for premium handmade scrunchies, featuring a wide range of fabrics, colors, and customization options for customers seeking unique hair accessories.',
      challenges: 'Building a robust product customization system, implementing secure payment processing, and creating an efficient inventory management system.',
      solutions: 'Developed a dynamic product configuration UI, integrated Stripe for secure payments, and created a real-time inventory tracking system with MongoDB.',
      features: [
        'Interactive product customization',
        'Secure payment processing with Stripe',
        'User accounts and order history',
        'Wishlist functionality',
        'Product reviews and ratings',
        'Responsive design for mobile shopping'
      ]
    }
  },
  {
    id: 'sora',
    title: 'Sora',
    description: 'A comprehensive e-commerce platform for skincare products with personalized recommendations and subscription services.',
    technologies: ['React', 'Redux', 'Tailwind',],
    imageUrl: `${im1}`,
    demoUrl: 'https://e-commerce-henna-alpha-25.vercel.app/',
    githubUrl: 'https://github.com/esha-gupta-11/E-Commerce',
    category: 'web',
    featured: true,
    details: {
      overview: 'Sora is a premium e-commerce platform for skincare products that offers personalized product  on user skin types and concerns, with  regular deliveries.',
      challenges: 'Creating an algorithm for personalized product recommendations, implementing a subscription service with flexible delivery schedules, and optimizing image loading for product galleries.',
      solutions: 'Developed a recommendation engine using user preferences and product tags, created a flexible subscription management system, and implemented lazy loading and image optimization.',
      features: [
        'Personalized product recommendations',
        'Skin analysis quiz',
        'Subscription service with flexible delivery options',
        'Detailed product information with ingredients list',
        'User reviews and ratings',
        'Secure checkout with multiple payment options'
      ]
    }
  }
];