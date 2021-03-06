import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React, { useState } from "react";
import { useQuery } from "urql";

import { DonationQueryRes } from "../types";
import { LeaderBoardItem } from "./LeaderBoardItem";

const DonationQuery = `
    query Query($orderBy: OrderByParams) {
        donations(orderBy: $orderBy) {
        id
        count
        displayName
        team
        message
        createdAt
        }
    }
`;

export const LeaderBoard = () => {
  const [field, setField] = useState("createdAt");

  const [{ data, fetching, error }] = useQuery<DonationQueryRes>({
    query: DonationQuery,
    variables: {
      orderBy: {
        field,
        direction: "desc",
      },
    },
  });

  return (
    <Box w="100%">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          LeaderBoard
        </Heading>

        <RadioGroup onChange={setField} value={field}>
          <Stack direction="row">
            <Radio value="createdAt">Most Recent</Radio>
            <Radio value="count">Most Trees</Radio>
          </Stack>
        </RadioGroup>
        {error && <Text>Oh no ... {error.message}</Text>}
        {fetching ? (
          <Text>Loading ... </Text>
        ) : (
          data?.donations.map((donation, i) => (
            <LeaderBoardItem key={donation.id} donation={donation} />
          ))
        )}
      </VStack>
    </Box>
  );
};
