import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <animated.div style={fadeIn} className="text-center">
        <div className="text-4xl font-extrabold mb-4 text-primary">
          <ReactTyped className='text-primary'
            strings={['Better Time Management App']}
            typeSpeed={50}
            backSpeed={25}
            backDelay={1000}
            loop={false}
          />
        </div>
        <p className="text-lg text-gray-600 mb-8">
          Take control of your tasks and boost your productivity.
        </p>
        <Link to="/todo-list"
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full py-2 px-8 shadow-lg hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          Get Started
        </Link>
      </animated.div>
    </div>
  );
};

export default HomeScreen;
