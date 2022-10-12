import React from "react";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  Authenticator,
  Heading,
  defaultDarkModeOverride,
  ThemeProvider,
  Flex,
  Text,
  Button,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { DocumentsTable } from "./components/DocumentsTable";
Amplify.configure(awsconfig);

function App() {
  const [colorMode] = React.useState("system");
  const theme = {
    name: "my-theme",
    overrides: [defaultDarkModeOverride],
  };
  return (
    <ThemeProvider theme={theme} colorMode={colorMode}>
      <Authenticator>
        {({ signOut, user }) => (
          <Flex direction={"column"} maxWidth={"50%"} margin={"auto"}>
            <Heading level={3}>Documentos</Heading>
            <DocumentsTable variation={"striped"} highlightOnHover={true}>
              {" "}
            </DocumentsTable>
            <Text>
              <Text as={"span"} fontWeight={800}>
                Usuario:
              </Text>
              {" " + user.attributes.email}
            </Text>

            <Button
              onClick={() => signOut()}
              variation={"primary"}
              backgroundColor={"red.60"}
              color={"white"}
            >
              Sign out
            </Button>
          </Flex>
        )}
      </Authenticator>
    </ThemeProvider>
  );
}

export default App;
