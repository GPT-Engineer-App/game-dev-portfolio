import { useState } from "react";
import { Container, Box, Text, VStack, HStack, Button, Image, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import { FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const moveUp = () => setPosition((prev) => ({ ...prev, y: prev.y - 10 }));
  const moveDown = () => setPosition((prev) => ({ ...prev, y: prev.y + 10 }));
  const moveLeft = () => setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
  const moveRight = () => setPosition((prev) => ({ ...prev, x: prev.x + 10 }));

  const checkPosition = (x, y) => {
    if (x === 50 && y === 0) {
      setModalContent("This is a brief information.");
      setIsOpen(true);
    } else if (x === 150 && y === 0) {
      setModalContent("Here are my social media pages.");
      setIsOpen(true);
    } else if (x === 250 && y === 0) {
      setModalContent("Thank you for visiting!");
      setIsOpen(true);
    }
  };

  const handleMove = (direction) => {
    if (direction === "up") moveUp();
    if (direction === "down") moveDown();
    if (direction === "left") moveLeft();
    if (direction === "right") moveRight();
    checkPosition(position.x, position.y);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Developer Portfolio Game</Text>
        <Text>Use the arrow buttons to navigate the game world.</Text>
        <Box position="relative" width="300px" height="300px" border="1px solid black" backgroundImage="url('https://images.unsplash.com/photo-1664665239609-c07159ff308c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBzcHJpdGV8ZW58MHx8fHwxNzE2NDYzMDM3fDA&ixlib=rb-4.0.3&q=80&w=1080')" backgroundSize="cover">
          <Image src="https://example.com/character.png" position="absolute" left={`${position.x}px`} top={`${position.y}px`} />
          <Image src="https://example.com/exclamation.png" position="absolute" left="50px" top="0px" />
          <Image src="https://example.com/exclamation.png" position="absolute" left="150px" top="0px" />
          <Image src="https://example.com/exclamation.png" position="absolute" left="250px" top="0px" />
        </Box>
        <HStack spacing={2}>
          <IconButton aria-label="Move Up" icon={<FaArrowUp />} onClick={() => handleMove("up")} />
          <IconButton aria-label="Move Left" icon={<FaArrowLeft />} onClick={() => handleMove("left")} />
          <IconButton aria-label="Move Down" icon={<FaArrowDown />} onClick={() => handleMove("down")} />
          <IconButton aria-label="Move Right" icon={<FaArrowRight />} onClick={() => handleMove("right")} />
        </HStack>
      </VStack>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{modalContent}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
