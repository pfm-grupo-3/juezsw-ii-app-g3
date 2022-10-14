import * as React from "react"
import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import {
  Authenticator,
  ThemeProvider,
  Flex,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { AssetTable } from "./components/AssetTable";
import theme from "./theme";
import { AssetForm } from "./components/AssetForm";
import {UserBar} from "./components/UserBar";

Amplify.configure(awsconfig);

function App() {
  const [colorMode] = React.useState("dark");

  return (
    <ThemeProvider colorMode={colorMode} theme={theme}>
      <View>
        <Authenticator>
          {({ signOut, user }) => (
            <Flex direction={"column"} margin={"auto"} maxWidth={"80%"}>
              <UserBar signOut={signOut} username={user.attributes.preferred_username || user.attributes.email}></UserBar>

              <AssetTable
                highlightOnHover={true}
                variation={"striped"}
              ></AssetTable>
              <AssetForm author={user.username}></AssetForm>

            </Flex>
          )}
        </Authenticator>
      </View>
    </ThemeProvider>
  );
}

export default App;
