import { BoxProps, TransitionProps, chakra, forwardRef } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, { shouldForwardProp: isValidMotionProp });

export type IAnimatedRotatedGradientBox = Testable<
  BoxProps & {
    firstColor: string;
    secondColor: string;
    duration?: number;
  }
>;

export const AnimatedRotatedGradientBox = forwardRef<IAnimatedRotatedGradientBox, 'div'>(
  ({ testID = 'AnimatedRotatedGradientBox', firstColor, secondColor, duration = 15, ...restBoxProps }, ref) => {
    const background = Array(5)
      .fill(0)
      .map((_, i) => `linear-gradient(${i * 90}deg, ${firstColor}, ${secondColor})`);

    const transition: TransitionProps['transition'] = {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'loop',
    } as unknown as TransitionProps['transition'];

    return (
      <ChakraBox
        data-testid={testID}
        ref={ref}
        {...restBoxProps}
        animate={{ background }}
        transition={transition}
      />
    );
  }
);
