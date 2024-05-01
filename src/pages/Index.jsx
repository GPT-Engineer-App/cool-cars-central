import { Box, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaCar, FaTachometerAlt, FaTools } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Ultimate Racing Machines
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <CarCard imageSrc="https://images.unsplash.com/photo-1611566026373-c6c8da0ea861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWNlJTIwY2FyfGVufDB8fHx8MTcxNDUyODU0MHww&ixlib=rb-4.0.3&q=80&w=1080" title="Speedster 3000" description="Experience the thrill of the track with the Speedster 3000, designed for peak performance and aerodynamics." icon={<FaTachometerAlt />} />
        <CarCard imageSrc="https://images.unsplash.com/photo-1541348263662-e068662d82af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXJ8ZW58MHx8fHwxNzE0NTI4NTQwfDA&ixlib=rb-4.0.3&q=80&w=1080" title="Night Hawk" description="Sleek, stylish, and fast. The Night Hawk offers a blend of luxury and speed for the discerning enthusiast." icon={<FaCar />} />
        <CarCard imageSrc="https://images.unsplash.com/photo-1614610767572-89b84742a2f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXJ8ZW58MHx8fHwxNzE0NTI4NTQxfDA&ixlib=rb-4.0.3&q=80&w=1080" title="Track Titan" description="Built for the racetrack, the Track Titan delivers raw power and precision handling." icon={<FaTools />} />
      </SimpleGrid>
    </Box>
  );
};

const CarCard = ({ imageSrc, title, description, icon }) => {
  return (
    <VStack bg="gray.700" p={4} borderRadius="lg" align="stretch">
      <Image src={imageSrc} borderRadius="md" />
      <Heading as="h3" size="md" mt={4}>
        {title}
      </Heading>
      <Text color="gray.300" fontSize="sm">
        {description}
      </Text>
      <Flex align="center" mt={2} color="white">
        {icon}
        <Text ml={2}>Learn More</Text>
      </Flex>
    </VStack>
  );
};

export default Index;
