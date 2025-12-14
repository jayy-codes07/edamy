import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import search_icon from './search_icon.svg'
import cross_icon from './cross_icon.svg'
import upload_area from './upload_area.svg'
import sketch from './sktech.svg'
import microsoft_logo from './microsoft_logo.svg'
import walmart_logo from './walmart_logo.svg'
import accenture_logo from './accenture_logo.svg'
import adobe_logo from './adobe_logo.svg'
import paypal_logo from './paypal_logo.svg'
import course_1_thumbnail from './course_1.png'
import course_2_thumbnail from './course_2.png'
import course_3_thumbnail from './course_3.png'
import course_4_thumbnail from './course_4.png'
import star from './rating_star.svg'
import star_blank from './star_dull_icon.svg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import arrow_icon from './arrow_icon.svg'
import down_arrow_icon from './down_arrow_icon.svg'
import time_left_clock_icon from './time_left_clock_icon.svg'
import time_clock_icon from './time_clock_icon.svg'
import user_icon from './user_icon.svg'
import home_icon from './home_icon.svg'
import add_icon from './add_icon.svg'
import my_course_icon from './my_course_icon.svg'
import person_tick_icon from './person_tick_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import file_upload_icon from './file_upload_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import dropdown_icon from './dropdown_icon.svg'
import patients_icon from './patients_icon.svg'
import play_icon from './play_icon.svg'
import blue_tick_icon from './blue_tick_icon.svg'
import course_4 from './course_4.png'
import profile_img from './profile_img.png'
import profile_img2 from './profile_img2.png'
import profile_img3 from './profile_img3.png'
import lesson_icon from './lesson_icon.svg'


export const assets = {
    logo,
    search_icon,
    sketch,
    microsoft_logo,
    walmart_logo,
    accenture_logo,
    adobe_logo,
    paypal_logo,
    course_1_thumbnail,
    course_2_thumbnail,
    course_3_thumbnail,
    course_4_thumbnail,
    star,
    star_blank,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    arrow_icon,
    dropdown_icon,
    cross_icon,
    upload_area,
    logo_dark,
    down_arrow_icon,
    time_left_clock_icon,
    time_clock_icon,
    user_icon,
    home_icon,
    add_icon,
    my_course_icon,
    person_tick_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    course_4,
    file_upload_icon,
    appointments_icon,
    earning_icon,
    patients_icon,
    profile_img,
    profile_img2,
    profile_img3,
    play_icon,
    blue_tick_icon,
    lesson_icon
}

export const dummyEducatorData = {
    "_id": "675ac1512100b91a6d9b8b24",
    "name": "GreatStack",
    "email": "user.greatstack@gmail.com",
    "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yclFkaDBOMmFqWnBoTTRBOXZUanZxVlo0aXYifQ",
    "createdAt": "2024-12-12T10:56:17.930Z",
    "updatedAt": "2024-12-12T10:56:17.930Z",
    "__v": 0
}

export const dummyTestimonial = [
    {
        name: 'Donald Jackman',
        role: 'SWE 1 @ Amazon',
        image: assets.profile_img_1,
        rating: 5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'Richard Nelson',
        role: 'SWE 2 @ Samsung',
        image: assets.profile_img_2,
        rating: 4,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
    {
        name: 'James Washington',
        role: 'SWE 2 @ Google',
        image: assets.profile_img_3,
        rating: 4.5,
        feedback: 'I\'ve been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.',
    },
];

export const dummyDashboardData = {
    "totalEarnings": 505.01,
    "enrolledStudentsData":[
  {
    "courseTitle": "Cybersecurity Basics",
    "student": {
      "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "name": "Jay Hadiya",
      "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
    }
  },
  {
    "courseTitle": "Full Stack Web Development",
    "student": {
      "_id": "user_3rRmvZzs13C5Cr7iU1Hwbb6gU8W",
      "name": "Sarah Jenkins",
      "imageUrl": "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    "courseTitle": "Python for Data Science",
    "student": {
      "_id": "user_4sSnwAat24D6Ds8jV2Iyyc7hV9X",
      "name": "Michael Chen",
      "imageUrl": "https://randomuser.me/api/portraits/men/32.jpg"
    }
  },
  {
    "courseTitle": "UI/UX Design Fundamentals",
    "student": {
      "_id": "user_5tToxBbu35E7Et9kW3Jzzd8iW0Y",
      "name": "Emily Davis",
      "imageUrl": "https://randomuser.me/api/portraits/women/68.jpg"
    }
  },
  {
    "courseTitle": "Introduction to Cloud Computing",
    "student": {
      "_id": "user_6uUpyCcv46F8Fu0lX4Kaae9jX1Z",
      "name": "David Kim",
      "imageUrl": "https://randomuser.me/api/portraits/men/85.jpg"
    }
  },
  {
    "courseTitle": "Advanced React Patterns",
    "student": {
      "_id": "user_7vVqzDdw57G9Gv1mY5Lbbf0kY2A",
      "name": "Priya Patel",
      "imageUrl": "https://randomuser.me/api/portraits/women/22.jpg"
    }
  },
  {
    "courseTitle": "Machine Learning A-Z",
    "student": {
      "_id": "user_8wWrxEex68H0Hw2nZ6Mccg1lZ3B",
      "name": "James Wilson",
      "imageUrl": "https://randomuser.me/api/portraits/men/11.jpg"
    }
  },
  {
    "courseTitle": "Blockchain Essentials",
    "student": {
      "_id": "user_9xXsyFfy79I1Ix3oA7Nddh2mH4C",
      "name": "Sophia Martinez",
      "imageUrl": "https://randomuser.me/api/portraits/women/91.jpg"
    }
  },
  {
    "courseTitle": "Digital Marketing Masterclass",
    "student": {
      "_id": "user_0yYtzGgz80J2Jy4pB8Oeei3nI5D",
      "name": "Lucas Brown",
      "imageUrl": "https://randomuser.me/api/portraits/men/54.jpg"
    }
  },
  {
    "courseTitle": "Game Development with Unity",
    "student": {
      "_id": "user_1zZuaHha91K3Kz5qC9Pffj4oJ6E",
      "name": "Olivia Taylor",
      "imageUrl": "https://randomuser.me/api/portraits/women/15.jpg"
    }
  }
],
    "totalCourses": 8
}

export const dummyStudentEnrolled =[
  {
    "student": {
      "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
      "name": "GreatStack",
      "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
    },
    "courseTitle": "Introduction to JavaScript",
    "purchaseDate": "2025-06-02T08:39:55.509Z"
  },
  {
    "student": {
      "_id": "user_3rRmvZzs13C5Cr7iU1Hwbb6gU8W",
      "name": "Sarah Jenkins",
      "imageUrl": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    "courseTitle": "Full Stack Web Development",
    "purchaseDate": "2025-06-15T10:15:20.100Z"
  },
  {
    "student": {
      "_id": "user_4sSnwAat24D6Ds8jV2Iyyc7hV9X",
      "name": "Michael Chen",
      "imageUrl": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    "courseTitle": "Python for Data Science",
    "purchaseDate": "2025-06-28T14:45:10.550Z"
  },
  {
    "student": {
      "_id": "user_5tToxBbu35E7Et9kW3Jzzd8iW0Y",
      "name": "Emily Davis",
      "imageUrl": "https://randomuser.me/api/portraits/women/68.jpg"
    },
    "courseTitle": "UI/UX Design Fundamentals",
    "purchaseDate": "2025-07-05T09:20:30.220Z"
  },
  {
    "student": {
      "_id": "user_6uUpyCcv46F8Fu0lX4Kaae9jX1Z",
      "name": "David Kim",
      "imageUrl": "https://randomuser.me/api/portraits/men/85.jpg"
    },
    "courseTitle": "Introduction to Cloud Computing",
    "purchaseDate": "2025-07-20T16:50:45.330Z"
  },
  {
    "student": {
      "_id": "user_7vVqzDdw57G9Gv1mY5Lbbf0kY2A",
      "name": "Priya Patel",
      "imageUrl": "https://randomuser.me/api/portraits/women/22.jpg"
    },
    "courseTitle": "Advanced React Patterns",
    "purchaseDate": "2025-08-01T11:10:05.880Z"
  },
  {
    "student": {
      "_id": "user_8wWrxEex68H0Hw2nZ6Mccg1lZ3B",
      "name": "James Wilson",
      "imageUrl": "https://randomuser.me/api/portraits/men/11.jpg"
    },
    "courseTitle": "Machine Learning A-Z",
    "purchaseDate": "2025-08-18T13:30:15.770Z"
  },
  {
    "student": {
      "_id": "user_9xXsyFfy79I1Ix3oA7Nddh2mH4C",
      "name": "Sophia Martinez",
      "imageUrl": "https://randomuser.me/api/portraits/women/91.jpg"
    },
    "courseTitle": "Blockchain Essentials",
    "purchaseDate": "2025-09-05T08:05:55.440Z"
  },
  {
    "student": {
      "_id": "user_0yYtzGgz80J2Jy4pB8Oeei3nI5D",
      "name": "Lucas Brown",
      "imageUrl": "https://randomuser.me/api/portraits/men/54.jpg"
    },
    "courseTitle": "Digital Marketing Masterclass",
    "purchaseDate": "2025-09-22T18:25:40.990Z"
  },
  {
    "student": {
      "_id": "user_1zZuaHha91K3Kz5qC9Pffj4oJ6E",
      "name": "Olivia Taylor",
      "imageUrl": "https://randomuser.me/api/portraits/women/15.jpg"
    },
    "courseTitle": "Game Development with Unity",
    "purchaseDate": "2025-10-10T12:00:00.000Z"
  },
  {
    "student": {
      "_id": "user_2aAxbIib02L4Lm6rD0Qggk5pK7F",
      "name": "William Anderson",
      "imageUrl": "https://randomuser.me/api/portraits/men/62.jpg"
    },
    "courseTitle": "Cybersecurity for Beginners",
    "purchaseDate": "2025-10-25T10:30:25.123Z"
  },
  {
    "student": {
      "_id": "user_3bBycJjc13M5Mn7sE1Rhhj6qL8G",
      "name": "Mia Thomas",
      "imageUrl": "https://randomuser.me/api/portraits/women/33.jpg"
    },
    "courseTitle": "iOS App Development with Swift",
    "purchaseDate": "2025-11-05T14:15:10.456Z"
  },
  {
    "student": {
      "_id": "user_4cCzdKkd24N6No8tF2Siiu7rM9H",
      "name": "Ethan White",
      "imageUrl": "https://randomuser.me/api/portraits/men/29.jpg"
    },
    "courseTitle": "DevOps Engineering",
    "purchaseDate": "2025-11-20T09:45:30.789Z"
  },
  {
    "student": {
      "_id": "user_5dDveLle35O7Op9uG3Tjjv8sN0I",
      "name": "Isabella Harris",
      "imageUrl": "https://randomuser.me/api/portraits/women/58.jpg"
    },
    "courseTitle": "Graphic Design Masterclass",
    "purchaseDate": "2025-12-01T16:20:55.012Z"
  },
  {
    "student": {
      "_id": "user_6eEvfMmf46P8Pq0vH4Ukkx9tO1J",
      "name": "Alexander Clark",
      "imageUrl": "https://randomuser.me/api/portraits/men/92.jpg"
    },
    "courseTitle": "Data Structures & Algorithms",
    "purchaseDate": "2025-12-15T11:55:40.345Z"
  }
]

export const dummyCourses = [
    {
        "_id": "605c72efb3f1c2b1f8e4e1a1",
        "courseTitle": "Introduction to JavaScript",
        "courseDescription": "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
        "coursePrice": 49.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started with JavaScript",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is JavaScript?",
                        "lectureDuration": 16,
                        "lectureUrl": "https://youtu.be/CBWnBi-awSA",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Setting Up Your Environment",
                        "lectureDuration": 19,
                        "lectureUrl": "https://youtu.be/4l87c2aeB4I",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Variables and Data Types",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Understanding Variables",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/pZQeBJsGoDQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Data Types in JavaScript",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/ufHT2WEkkC4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773e37360cb0ab974342314"
            }
        ],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T04:47:44.701Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/CBWnBi-awSA/maxresdefault.jpg"
    },{
        "_id": "675ac1512100b91a6d9b8b30",
        "courseTitle": "Complete React Developer Guide",
        "courseDescription": "<h2>Master React.js from Scratch</h2><p>Learn how to build dynamic web applications using React. This course covers Hooks, Redux, Context API, and Next.js.</p><p>You will build three real-world projects including an E-commerce site.</p><ul><li>Understand Virtual DOM</li><li>State Management with Redux</li><li>Server-side rendering with Next.js</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "react-ch1",
                "chapterOrder": 1,
                "chapterTitle": "React Basics",
                "chapterContent": [
                    {
                        "lectureId": "react-lec1",
                        "lectureTitle": "JSX and Components",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/w7ejDZ8SWv8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": ["user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V"],
        "courseRatings": [{"userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w", "rating": 5}],
        "createdAt": "2024-12-18T09:00:00.000Z",
        "updatedAt": "2025-01-03T10:00:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b31",
        "courseTitle": "Machine Learning A-Z",
        "courseDescription": "<h2>Become a Data Scientist</h2><p>Master Machine Learning on Python & R. Have a great intuition of many Machine Learning models.</p><ul><li>Linear Regression</li><li>Neural Networks</li><li>Reinforcement Learning</li></ul>",
        "coursePrice": 94.99,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "ml-ch1",
                "chapterOrder": 1,
                "chapterTitle": "Data Preprocessing",
                "chapterContent": [
                    {
                        "lectureId": "ml-lec1",
                        "lectureTitle": "Setting up the environment",
                        "lectureDuration": 500,
                        "lectureUrl": "https://youtu.be/i_LwzRVP7bg",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b25",
        "enrolledStudents": ["user_3rRmvZzs13C5Cr7iU1Hwbb6gU8W"],
        "courseRatings": [{"userId": "user_4sSnwAat24D6Ds8jV2Iyyc7hV9X", "rating": 4.5}],
        "createdAt": "2024-12-19T10:15:00.000Z",
        "updatedAt": "2025-01-04T11:20:00.000Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/i_LwzRVP7bg/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b32",
        "courseTitle": "UI/UX Design Masterclass",
        "courseDescription": "<h2>Design Beautiful Interfaces</h2><p>Learn Figma, Adobe XD, and design principles. Understand user flow, wireframing, and prototyping.</p><ul><li>Color Theory & Typography</li><li>Mobile App Design</li><li>Interactive Prototypes</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "ui-ch1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Figma",
                "chapterContent": [
                    {
                        "lectureId": "ui-lec1",
                        "lectureTitle": "Interface Tour",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/jwMw6KGu7Q0",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b26",
        "enrolledStudents": ["user_5tToxBbu35E7Et9kW3Jzzd8iW0Y"],
        "courseRatings": [{"userId": "user_6uUpyCcv46F8Fu0lX4Kaae9jX1Z", "rating": 5}],
        "createdAt": "2024-12-20T11:30:00.000Z",
        "updatedAt": "2025-01-05T09:45:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img-c.udemycdn.com/course/750x422/4456572_f07a_6.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b33",
        "courseTitle": "Node.js API Masterclass",
        "courseDescription": "<h2>Build Scalable Backends</h2><p>Deep dive into Node.js, Express, and MongoDB. Learn to build RESTful APIs with authentication and security.</p><ul><li>JWT Authentication</li><li>Mongoose ODM</li><li>Error Handling</li></ul>",
        "coursePrice": 79.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "node-ch1",
                "chapterOrder": 1,
                "chapterTitle": "Express Basics",
                "chapterContent": [
                    {
                        "lectureId": "node-lec1",
                        "lectureTitle": "Routing and Middleware",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/Oe421EPjeBE",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [],
        "courseRatings": [],
        "createdAt": "2024-12-21T14:00:00.000Z",
        "updatedAt": "2025-01-01T08:00:00.000Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b34",
        "courseTitle": "SQL for Data Analysis",
        "courseDescription": "<h2>Master Databases</h2><p>Learn SQL from scratch to expert level. Ideal for Data Analysts and Business Intelligence professionals.</p><ul><li>Complex Joins</li><li>Window Functions</li><li>Database Design</li></ul>",
        "coursePrice": 49.99,
        "isPublished": true,
        "discount": 0,
        "courseContent": [
            {
                "chapterId": "sql-ch1",
                "chapterOrder": 1,
                "chapterTitle": "Select Statements",
                "chapterContent": [
                    {
                        "lectureId": "sql-lec1",
                        "lectureTitle": "Filtering and Sorting",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/HXV3zeQKqGY",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b27",
        "enrolledStudents": ["user_7vVqzDdw57G9Gv1mY5Lbbf0kY2A"],
        "courseRatings": [{"userId": "user_8wWrxEex68H0Hw2nZ6Mccg1lZ3B", "rating": 4}],
        "createdAt": "2024-12-22T08:45:00.000Z",
        "updatedAt": "2025-01-02T13:20:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b35",
        "courseTitle": "Digital Marketing Strategy",
        "courseDescription": "<h2>Grow Your Business</h2><p>A comprehensive guide to SEO, Social Media Marketing, Email Marketing, and Google Analytics.</p><ul><li>Content Strategy</li><li>Facebook Ads</li><li>Keyword Research</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "dm-ch1",
                "chapterOrder": 1,
                "chapterTitle": "SEO Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "dm-lec1",
                        "lectureTitle": "On-Page vs Off-Page SEO",
                        "lectureDuration": 900,
                        "lectureUrl": "https://youtu.be/bIX3TQgZduY",
                        "isPreviewFree": false,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b28",
        "enrolledStudents": ["user_9xXsyFfy79I1Ix3oA7Nddh2mH4C"],
        "courseRatings": [{"userId": "user_0yYtzGgz80J2Jy4pB8Oeei3nI5D", "rating": 5}],
        "createdAt": "2024-12-23T15:10:00.000Z",
        "updatedAt": "2025-01-03T16:00:00.000Z",
        "__v": 1,
        "courseThumbnail": "https://algorimedia.kesug.com/wp-content/uploads/2025/07/687193083.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b36",
        "courseTitle": "Flutter & Dart Guide",
        "courseDescription": "<h2>Build iOS and Android Apps</h2><p>The complete guide to building native mobile apps with a single codebase using Google's Flutter framework.</p><ul><li>Dart Programming</li><li>State Management</li><li>Native Device Features</li></ul>",
        "coursePrice": 84.99,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "fl-ch1",
                "chapterOrder": 1,
                "chapterTitle": "Getting Started",
                "chapterContent": [
                    {
                        "lectureId": "fl-lec1",
                        "lectureTitle": "Installation and Setup",
                        "lectureDuration": 550,
                        "lectureUrl": "https://youtu.be/VPvVD8t02U8",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b29",
        "enrolledStudents": [],
        "courseRatings": [{"userId": "user_1zZuaHha91K3Kz5qC9Pffj4oJ6E", "rating": 4.8}],
        "createdAt": "2024-12-24T09:30:00.000Z",
        "updatedAt": "2025-01-04T12:00:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/VPvVD8t02U8/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b37",
        "courseTitle": "Ethical Hacking Bootcamp",
        "courseDescription": "<h2>Learn Cybersecurity</h2><p>Start your career in cybersecurity. Learn penetration testing, network security, and web vulnerabilities.</p><ul><li>Kali Linux</li><li>WiFi Hacking</li><li>Metasploit</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 50,
        "courseContent": [
            {
                "chapterId": "sec-ch1",
                "chapterOrder": 1,
                "chapterTitle": "Reconnaissance",
                "chapterContent": [
                    {
                        "lectureId": "sec-lec1",
                        "lectureTitle": "Gathering Information",
                        "lectureDuration": 1200,
                        "lectureUrl": "https://youtu.be/fNzpcB7ODxQ",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b30",
        "enrolledStudents": ["user_2aAxbIib02L4Lm6rD0Qggk5pK7F"],
        "courseRatings": [{"userId": "user_3bBycJjc13M5Mn7sE1Rhhj6qL8G", "rating": 5}],
        "createdAt": "2024-12-25T13:45:00.000Z",
        "updatedAt": "2025-01-05T08:30:00.000Z",
        "__v": 4,
        "courseThumbnail": "https://img.youtube.com/vi/fNzpcB7ODxQ/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b38",
        "courseTitle": "Microsoft Excel Mastery",
        "courseDescription": "<h2>From Beginner to Pro</h2><p>Master Excel formulas, charts, Pivot Tables, and VBA. Increase your productivity and data analysis skills.</p><ul><li>VLOOKUP & XLOOKUP</li><li>Dashboards</li><li>Macros</li></ul>",
        "coursePrice": 39.99,
        "isPublished": true,
        "discount": 5,
        "courseContent": [
            {
                "chapterId": "xl-ch1",
                "chapterOrder": 1,
                "chapterTitle": "Functions",
                "chapterContent": [
                    {
                        "lectureId": "xl-lec1",
                        "lectureTitle": "Logical Functions",
                        "lectureDuration": 400,
                        "lectureUrl": "https://youtu.be/Vl0H-qTclOg",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b31",
        "enrolledStudents": [],
        "courseRatings": [],
        "createdAt": "2024-12-26T10:00:00.000Z",
        "updatedAt": "2025-01-02T14:10:00.000Z",
        "__v": 0,
        "courseThumbnail": "https://img.youtube.com/vi/Vl0H-qTclOg/maxresdefault.jpg"
    },
    {
        "_id": "675ac1512100b91a6d9b8b39",
        "courseTitle": "AWS Solutions Architect",
        "courseDescription": "<h2>Cloud Computing Certification</h2><p>Prepare for the AWS Certified Solutions Architect Associate exam. Learn EC2, S3, RDS, and VPC.</p><ul><li>IAM Policies</li><li>Auto Scaling</li><li>Serverless Architecture</li></ul>",
        "coursePrice": 109.99,
        "isPublished": true,
        "discount": 10,
        "courseContent": [
            {
                "chapterId": "aws-ch1",
                "chapterOrder": 1,
                "chapterTitle": "Cloud Concepts",
                "chapterContent": [
                    {
                        "lectureId": "aws-lec1",
                        "lectureTitle": "Introduction to AWS",
                        "lectureDuration": 1100,
                        "lectureUrl": "https://youtu.be/Ia-UEZhR-aI",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b32",
        "enrolledStudents": ["user_4cCzdKkd24N6No8tF2Siiu7rM9H", "user_5dDveLle35O7Op9uG3Tjjv8sN0I"],
        "courseRatings": [{"userId": "user_4cCzdKkd24N6No8tF2Siiu7rM9H", "rating": 5}],
        "createdAt": "2024-12-27T16:20:00.000Z",
        "updatedAt": "2025-01-05T10:50:00.000Z",
        "__v": 3,
        "courseThumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEbEPgf622lnz_cFRKHGEnVZR02l2SOHxt9uXe1Gm&s"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ae",
        "courseTitle": "Cybersecurity Basics",
        "courseDescription": "<h2>Protect Systems and Networks</h2><p>Cybersecurity is critical in today's digital age. This course introduces the fundamentals of cybersecurity, including threat analysis, ethical hacking, and secure programming practices.</p><p>By the end of this course, you will understand how to identify vulnerabilities and implement security measures effectively.</p><ul><li>Understand security protocols</li><li>Learn about encryption techniques</li><li>Conduct basic penetration testing</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Cybersecurity",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cybersecurity?",
                        "lectureDuration": 10,
                        "lectureUrl": "https://youtu.be/samplelink5",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Types of Cyber Threats",
                        "lectureDuration": 18,
                        "lectureUrl": "https://youtu.be/samplelink6",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Basic Security Practices",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Password Management",
                        "lectureDuration": 15,
                        "lectureUrl": "https://youtu.be/samplelink7",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Network Security Essentials",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink8",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-27T11:30:00.000Z",
        "updatedAt": "2024-12-31T04:14:49.773Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/jZFaMEqEqEQ/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1a7",
        "courseTitle": "Web Development Bootcamp",
        "courseDescription": "<h2>Become a Full-Stack Web Developer</h2><p>This comprehensive bootcamp covers everything you need to know to become a full-stack web developer. From HTML and CSS to JavaScript and backend technologies, this course is designed to take you from beginner to job-ready.</p><p>Throughout the course, you will work on real-world projects, build a portfolio, and gain the skills necessary to succeed in the tech industry.</p><ul><li>Learn front-end and back-end development</li><li>Build responsive and dynamic web applications</li><li>Understand databases and server-side programming</li></ul>",
        "coursePrice": 99.99,
        "isPublished": true,
        "discount": 25,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "HTML & CSS Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to HTML",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Styling with CSS",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "JavaScript Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "JavaScript Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "DOM Manipulation",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:31:27.290Z",
        "__v": 2,
        "courseThumbnail": "https://img.youtube.com/vi/lpx2zFkapIk/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ac",
        "courseTitle": "Cloud Computing Essentials",
        "courseDescription": "<h2>Master Cloud Fundamentals</h2><p>Learn the foundations of cloud computing and explore popular cloud platforms like AWS, Azure, and Google Cloud. This course is ideal for IT professionals and developers looking to transition to cloud-based solutions.</p><p>By the end of this course, you will understand cloud services, deployment models, and best practices for using cloud resources efficiently.</p><ul><li>Understand cloud architecture</li><li>Learn to work with AWS, Azure, and GCP</li><li>Explore serverless computing and storage solutions</li></ul>",
        "coursePrice": 69.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cloud Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Cloud Computing?",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Cloud Service Models",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Exploring Cloud Platforms",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "AWS Basics",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Introduction to Google Cloud",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2024-12-31T05:32:55.357Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/0yboGn8errU/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ad",
        "courseTitle": "Data Science with Python",
        "courseDescription": "<h2>Start Your Data Science Journey</h2><p>Data Science is one of the most in-demand fields in the world. This course teaches you the essentials of data analysis, visualization, and machine learning using Python. Learn libraries like Pandas, NumPy, Matplotlib, and Scikit-learn.</p><p>By the end of this course, you will be equipped to work on real-world data projects and gain insights from data.</p><ul><li>Data cleaning and preprocessing</li><li>Exploratory Data Analysis (EDA)</li><li>Build predictive models</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 20,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Python for Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Python Basics",
                        "lectureDuration": 30,
                        "lectureUrl": "https://youtu.be/samplelink1",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Working with NumPy",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink2",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Data Visualization",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Introduction to Matplotlib",
                        "lectureDuration": 20,
                        "lectureUrl": "https://youtu.be/samplelink3",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Advanced Visualizations with Seaborn",
                        "lectureDuration": 25,
                        "lectureUrl": "https://youtu.be/samplelink4",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
            "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [
            {
                "userId": "user_2qjlgkAqIMpiR2flWIRzvWKtE0w",
                "rating": 5,
                "_id": "6773acf160cb0ab974342248"
            }
        ],
        "createdAt": "2024-12-27T10:00:00.000Z",
        "updatedAt": "2024-12-31T09:57:48.992Z",
        "__v": 3,
        "courseThumbnail": "https://img.youtube.com/vi/E4znbZgUWzA/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1aa",
        "courseTitle": "Data Science and Machine Learning",
        "courseDescription": "<h2>Unlock the Power of Data</h2><p>This course provides a comprehensive introduction to data science and machine learning. You will learn how to analyze data, build predictive models, and apply machine learning algorithms to real-world problems.</p><p>By the end of this course, you will have a solid understanding of data manipulation, visualization, and machine learning techniques, enabling you to make data-driven decisions.</p><ul><li>Understand data analysis and visualization</li><li>Learn machine learning algorithms and their applications</li><li>Work with popular data science libraries like Pandas and Scikit-Learn</li></ul>",
        "coursePrice": 89.99,
        "isPublished": true,
        "discount": 30,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Introduction to Data Science",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "What is Data Science?",
                        "lectureDuration": 600,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Data Collection and Cleaning",
                        "lectureDuration": 720,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Machine Learning Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Supervised vs Unsupervised Learning",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Building Your First Model",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:53:59.753Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/631lFJdQvoo/maxresdefault.jpg"
    },
    {
        "_id": "605c72efb3f1c2b1f8e4e1ab",
        "courseTitle": "Introduction to Cybersecurity",
        "courseDescription": "<h2>Protect the Digital World</h2><p>This course covers the essentials of cybersecurity, including understanding threats, vulnerabilities, and how to secure systems against cyber-attacks. Ideal for beginners, this course will prepare you for a career in cybersecurity.</p><p>By the end of this course, you will be able to identify and mitigate risks, implement security best practices, and understand the fundamentals of encryption and network security.</p><ul><li>Understand common cybersecurity threats</li><li>Learn about encryption and secure communication</li><li>Explore tools for penetration testing</li></ul>",
        "coursePrice": 59.99,
        "isPublished": true,
        "discount": 15,
        "courseContent": [
            {
                "chapterId": "chapter1",
                "chapterOrder": 1,
                "chapterTitle": "Cybersecurity Basics",
                "chapterContent": [
                    {
                        "lectureId": "lecture1",
                        "lectureTitle": "Introduction to Cybersecurity",
                        "lectureDuration": 700,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture2",
                        "lectureTitle": "Understanding Cyber Threats",
                        "lectureDuration": 750,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            },
            {
                "chapterId": "chapter2",
                "chapterOrder": 2,
                "chapterTitle": "Network Security Fundamentals",
                "chapterContent": [
                    {
                        "lectureId": "lecture3",
                        "lectureTitle": "Securing Networks",
                        "lectureDuration": 800,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": true,
                        "lectureOrder": 1
                    },
                    {
                        "lectureId": "lecture4",
                        "lectureTitle": "Firewalls and VPNs",
                        "lectureDuration": 850,
                        "lectureUrl": "https://youtu.be/-HeadgoqJ7A",
                        "isPreviewFree": false,
                        "lectureOrder": 2
                    }
                ]
            }
        ],
        "educator": "675ac1512100b91a6d9b8b24",
        "enrolledStudents": [
            "user_2qjlgkAqIMpiR2flWIRzvWKtE0w"
        ],
        "courseRatings": [],
        "createdAt": "2024-12-17T08:16:53.622Z",
        "updatedAt": "2025-01-02T06:56:13.208Z",
        "__v": 1,
        "courseThumbnail": "https://img.youtube.com/vi/WbV3zRgpw_E/maxresdefault.jpg"
    }
]