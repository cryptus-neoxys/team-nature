import { Avatar } from "@chakra-ui/avatar";
import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

import { Donation } from "../types";

import formatDate from "../utils/formatDate";

interface Props {
  donation: Donation;
}

export const LeaderBoardItem = ({ donation }: Props) => {
  return (
    <Flex
      boxShadow="md"
      padding={3}
      bg="white"
      borderRadius="lg"
      maxWidth="xl"
      w="100%"
    >
      <Avatar size="lg" />

      <Box flex={1} ml={4}>
        <Flex h="100%" justifyContent="space-between">
          <Flex direction="column" justifyContent="center" textAlign="left">
            <Text
              fontWeight="bold"
              color="blue.500"
              fontSize="sm"
              textTransform="capitalize"
            >
              {donation?.team}
            </Text>
            <Text>{donation.displayName}</Text>
            <Text fontSize="sm">{donation?.message}</Text>
          </Flex>

          <Flex direction="column" justifyContent="space-around">
            <div>
              <Badge
                bg="blue.400"
                color="whitesmoke"
                textTransform="none"
                px={3}
                py={1}
                borderRadius="md"
              >
                {donation.count} Pounds
              </Badge>
            </div>
            <Text fontSize="xs" fontWeight="semibold">
              {formatDate(donation?.createdAt)}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
