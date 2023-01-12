import { Flex, Icon } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { HiVolumeOff } from 'react-icons/hi';
import { BeatLoader } from 'react-spinners';
import Switch from 'react-switch';
const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.volume = 0.2;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src="/audio/interlude.mp3" loop />
      <Flex
        background="rgb(13, 13, 13)"
        padding={{ base: 2, lg: 3 }}
        width="max-content"
        borderRadius="3xl"
        position="fixed"
        bottom={{ base: 6, lg: 8 }}
        left={{ base: 4, lg: 8 }}
        zIndex={1}
      >
        <Switch
          onChange={togglePlay}
          checked={isPlaying}
          onColor="#ecbdf5"
          onHandleColor="#cf59e6"
          handleDiameter={30}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          uncheckedIcon={false}
          checkedIcon={false}
          uncheckedHandleIcon={
            <Flex align="center" justify="center" height="100%">
              <Icon as={HiVolumeOff} color="gray.800" />
            </Flex>
          }
          checkedHandleIcon={
            <Flex align="center" justify="center" height="100%">
              <BeatLoader size={4} margin="0px" />
            </Flex>
          }
        />
      </Flex>
    </div>
  );
};

export default AudioPlayer;
