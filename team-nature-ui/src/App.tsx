import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/300.css";

import * as React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  VStack,
  Grid,
  extendTheme,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Counter } from "./donations/Counter";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Heading>JOIN THE MOVEMENT</Heading>
          <Text>
            Help us remove 30 million pounds of trash by January 1st, 2022.
          </Text>
          <Heading as="h2" size="4xl">
            <Counter from={0} to={1237109} />
          </Heading>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
