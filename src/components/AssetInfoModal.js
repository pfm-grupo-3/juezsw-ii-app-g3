import * as React from "react";
import ReactModal from "react-modal";
import {
  Button,
  Card,
  Flex,
  Text,
  useTheme,
  View,
} from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Bid } from "../models";

const AssetInfoModal = ({ asset, isOpen, closeModal }) => {
  const [bids, setBids] = useState([]);

  const fetchBids = async (assetId) => {
    const bids = (await DataStore.query(Bid)).filter(
      b => b.asset === assetId
    );
    console.log("fetchedBids", bids);
    setBids(bids);
  };

  useEffect(() => {
    if (asset) fetchBids(asset.id);
  }, [asset]);

  return (
    <ReactModal
      contentElement={() => (
        <ModalContent
          asset={asset}
          bids={bids}
          closeModal={closeModal}
        ></ModalContent>
      )}
      isOpen={isOpen}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      style={{
        overlay: {
          backgroundColor: "rgba(22,7,42,0.66)",
          display: "grid",
          placeItems: "center",
        },
      }}
    ></ReactModal>
  );
};

const ModalContent = ({ asset, closeModal, bids }) => {
  const { tokens } = useTheme();
  return (
    <View>
      <Card
        backgroundColor={"#180d2a"}
        color={"white"}
        margin={"auto"}
        padding={tokens.space.large}
        variation={"elevated"}
        width={"80%"}
      >
        <Flex
          alignItems="flex-start"
          color={"white"}
          direction="column"
          gap={tokens.space.xs}
        >
          <Text color={"white"}>ID: {asset.id}</Text>
          <Text color={"white"}>Nombre: {asset.name}</Text>
          <Text color={"white"}>Tipo: {asset.type}</Text>
          <Text color={"white"}>Estado: {asset.state}</Text>
          <Text color={"white"}>Puja Inicial: {asset.initialBid} EUROS</Text>
          <Text aria-multiline={"true"} color={"white"}>
            Descripción: {asset.description}
          </Text>
          <Text color={"white"}>Número de pujas: {bids.length}</Text>
          <Text color={"white"}>Creador: {asset.author}</Text>
          <Button
            backgroundColor={"red.60"}
            color={"white"}
            onClick={() => closeModal()}
            variation={"primary"}
          >
            Cerrar
          </Button>
        </Flex>
      </Card>
    </View>
  );
};

export default AssetInfoModal;
