import { useState } from "react";
import { Container, Box, Text, VStack, HStack, Button, Image, IconButton } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveUp = () => setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
  const moveDown = () => setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
  const moveLeft = () => setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
  const moveRight = () => setPosition((prev) => ({ ...prev, x: prev.x + 10 }));

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Developer Portfolio Game</Text>
        <Text>Use the arrow buttons to navigate the game world.</Text>
        <Box position="relative" width="300px" height="300px" border="1px solid black">
          <Image src="https://images.unsplash.com/photo-1664665239609-c07159ff308c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBzcHJpdGV8ZW58MHx8fHwxNzE2NDYzMDM3fDA&ixlib=rb-4.0.3&q=80&w=1080" position="absolute" left={`${position.x}px`} top={`${position.y}px`} />
        </Box>
        <HStack spacing={2}>
          <IconButton aria-label="Move Up" icon={<FaArrowUp />} onClick={moveUp} />
          <IconButton aria-label="Move Left" icon={<FaArrowLeft />} onClick={moveLeft} />
          <IconButton aria-label="Move Down" icon={<FaArrowDown />} onClick={moveDown} />
          <IconButton aria-label="Move Right" icon={<FaArrowRight />} onClick={moveRight} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
