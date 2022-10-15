import * as React from "react";
import "./App.css";
import { Amplify, AuthModeStrategyType } from "aws-amplify";
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
import { UserBar } from "./components/UserBar";
import { useState } from "react";
import AssetInfoModal from "./components/AssetInfoModal";
import ReactModal from "react-modal";

Amplify.configure({
  ...awsconfig,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
});

ReactModal.setAppElement("#root");

function App() {
  const [colorMode] = React.useState("dark");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState({});

  const selectAsset = (asset) => {
    setSelectedAsset(asset);
    if (!modalIsOpen) setModalIsOpen(true);
  };
  const resetModalInfo = () => {
    setModalIsOpen(false);
    setSelectedAsset({});
  };

  return (
    <ThemeProvider colorMode={colorMode} theme={theme}>
      <View>
        <Authenticator>
          {({ signOut, user }) => (
            <Flex direction={"column"} margin={"auto"} maxWidth={"80%"}>
              <UserBar
                signOut={signOut}
                username={
                  user.attributes.preferred_username || user.attributes.email
                }
              ></UserBar>

              <AssetTable
                highlightOnHover={true}
                selectAsset={asset => selectAsset(asset)}
                variation={"bordered"}
              ></AssetTable>
              <AssetForm author={user.username}></AssetForm>
              <AssetInfoModal
                asset={selectedAsset}
                closeModal={() => resetModalInfo()}
                isOpen={modalIsOpen}
              ></AssetInfoModal>
            </Flex>
          )}
        </Authenticator>
      </View>
    </ThemeProvider>
  );
}

export default App;
