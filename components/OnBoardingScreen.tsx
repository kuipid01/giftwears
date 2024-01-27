// components/OnBoardingScreen.js
import { easeIn, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const OnBoardingScreen = () => {
  const [showScreen, setShowScreen] = useState(false);

  useEffect(() => {
    // Check if the onboarding has been shown before
    const hasOnboardingShown = localStorage.getItem('hasOnboardingShown');

    // If not shown before, display onboarding
    if (!hasOnboardingShown) {
      setShowScreen(true);

      // Set a flag in local storage indicating that onboarding has been shown
      localStorage.setItem('hasOnboardingShown', 'true');
    }
  }, []);

  return (
    <>
      {showScreen && (
        <motion.div
          animate={{ top: '-100%', opacity: 0 }}
          transition={{
            duration: 0.4,
            delay: 1.6,
          }}
          className="fixed bg-dark top-0 left-0 w-full z-[7000] h-screen  flex"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
            <motion.div
              key={item}
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{
                delay: i * 0.1,
                duration: 0.3,
                ease: easeIn,
              }}
              className="flex-1 h-full bg-light-gray"
            ></motion.div>
          ))}
          <motion.p
            animate={{ top: '-100%', opacity: 0 }}
            transition={{
              duration: 0.4,
              delay: 1.4,
            }}
            className="text-lighter-grey tracking-widest text-[50px] absolute bottom-0 right-0 uppercase font-bold"
          >
            Gift Wears
          </motion.p>
        </motion.div>
      )}
    </>
  );
};

export default OnBoardingScreen;
