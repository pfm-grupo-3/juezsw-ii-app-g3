import * as React from "react";
import { Button, Flex, Text } from "@aws-amplify/ui-react";

export const UserBar = ({ username, signOut }) => {
  return (
    <Flex direction={"row"} justifyContent={"flex-end"} marginTop={"2rem"}>
      <Flex>
        <Text

          as={"p"}
          fontSize="1em"
          fontStyle="normal"
          fontWeight={800}
          lineHeight="3em"

          variation="primary"
          width="auto"
        >
          {username}
        </Text>

        <Button
          backgroundColor={"red.60"}
          color={"white"}
          onClick={() => signOut()}
          variation={"primary"}
        >
          Salir
        </Button>
      </Flex>
    </Flex>
  );
};
