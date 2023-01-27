import { Box, useTheme } from '@chakra-ui/react';

interface IToggle {
  isToggled: boolean;
  handleToggle: () => void;
}

const Toggle = ({ isToggled, handleToggle }: IToggle) => {
  const theme = useTheme();

  const color = 'white';
  const duration = 0.4;
  const easing = 'cubic-bezier(0, 0, 0, 1)';
  const time = Math.max(0, duration);
  const lines = 2;
  const area = 50;
  const size = 50;

  const width = Math.max(12, Math.min(area, size));
  const barHeightRaw = width / 12;
  const barHeight = Math.round(barHeightRaw);
  const space = 3;
  const marginRaw = width / (lines * (space + (lines === 2 ? 1 : 1.25)));
  const margin = Math.round(marginRaw);
  const height = barHeight * lines + margin * (lines - 1);
  const topOffset = Math.round((area - height) / 2);

  return (
    <Box cursor="pointer" height="48px" position="relative" width="48px" tabIndex={0} onClick={handleToggle}>
      <Box
        data-testid="bar-wrap-one"
        transition={`${0.4 / 2}s cubic-bezier(0, 0, 0, 1) ${isToggled ? '0s' : `${0.4 / 2}s`}`}
        transform={`${isToggled ? `translateY(${barHeight / 2 + margin / 2}px)` : 'none'}`}
      >
        <Box
          data-testid="bar-one"
          width={width}
          top={topOffset}
          background={color}
          height="1px"
          position="absolute"
          transition={`${time / 2}s ${easing} ${isToggled ? `${time / 2}s` : '0s'}`}
          transform={`${isToggled ? `rotate(10deg)` : 'none'}`}
        />
      </Box>

      <Box
        data-testid="bar-wrap-three"
        transition={`${time / 2}s ${easing} ${isToggled ? '0s' : `${time / 2}s`}`}
        transform={`${isToggled ? `translateY(-${barHeight / 2 + margin / 2}px)` : 'none'}`}
      >
        <Box
          data-testid="bar-three"
          width={`${isToggled ? '50' : '30'}px`}
          top={`${topOffset + barHeight + margin}px`}
          background={color}
          height="1px"
          position="absolute"
          transition={`${time / 2}s ${easing} ${isToggled ? `${time / 2}s` : '0s'}`}
          transform={`${isToggled ? `rotate(-10deg)` : 'none'}`}
        />
      </Box>
    </Box>
  );
};

export default Toggle;
