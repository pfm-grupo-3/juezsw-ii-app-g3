import * as React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Heading,
  Button,
  ButtonGroup,
} from "@aws-amplify/ui-react";
import { FaEyeSlash, FaEye, FaInfoCircle, FaTrash } from "react-icons/fa";
import { Asset, AssetState } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { useEffect, useState } from "react";

const formatDate = (d) => {
  if (!(d instanceof String)) return d;
  let date = new Date(d);
  return date.toISOString();
};

export const AssetTable = ({
  caption,
  highlightOnHover,
  size,
  variation,
  selectAsset,
}) => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchAssets();
    const subscription = DataStore.observe(Asset).subscribe(() =>
      fetchAssets()
    );
    return () => subscription.unsubscribe();
  }, []);

  const fetchAssets = async () => {
    const assets = await DataStore.query(Asset);
    console.log("Fetched assets", assets);
    setAssets(assets);
  };

  const deleteAsset = async (assetId) => {
    let assetToDelete = await DataStore.query(Asset, assetId);
    await DataStore.delete(assetToDelete);
  };
  const updateAssetState = async (asset, state) => {
    await DataStore.save(
      Asset.copyOf(asset, (updated) => {
        updated.state = state;
      })
    );
  };

  return (
    <>
      <Heading level={3}>Subastas</Heading>
      {assets.length === 0 ? (
        <Heading level={6}>No hay subastas disponibles</Heading>
      ) : (
        <Table
          caption={caption}
          highlightOnHover={highlightOnHover}
          size={size}
          variation={variation}
        >
          <TableHead>
            <TableRow>
              <TableCell as="th">Nombre</TableCell>
              <TableCell as="th">Tipo</TableCell>
              <TableCell as="th">Puja inicial</TableCell>
              <TableCell as="th">Fecha Inicio</TableCell>
              <TableCell as="th">Fecha Fin</TableCell>
              <TableCell as="th">Estado</TableCell>
              <TableCell as="th">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((asset) => {
              return (
                <TableRow key={asset.id}>
                  <TableCell>{asset.name}</TableCell>
                  <TableCell>{asset.type}</TableCell>
                  <TableCell>{asset.initialBid}</TableCell>
                  <TableCell>{formatDate(asset.startDate)}</TableCell>
                  <TableCell>{formatDate(asset.endDate)}</TableCell>
                  <TableCell>{asset.state}</TableCell>
                  <TableCell>
                    <ButtonGroup variation={"primary"}>
                      {asset.state === AssetState.DISPONIBLE && (
                        <Button
                          onClick={() =>
                            updateAssetState(asset, AssetState.NO_DISPONIBLE)
                          }
                          size={"small"}
                        >
                          <FaEyeSlash></FaEyeSlash>
                        </Button>
                      )}
                      {asset.state === AssetState.NO_DISPONIBLE && (
                        <Button
                          onClick={() =>
                            updateAssetState(asset, AssetState.DISPONIBLE)
                          }
                          size={"small"}
                        >
                          <FaEye></FaEye>
                        </Button>
                      )}

                      <Button onClick={() => selectAsset(asset)} size={"small"}>
                        <FaInfoCircle></FaInfoCircle>
                      </Button>
                      <Button
                        onClick={() => deleteAsset(asset.id)}
                        size={"small"}
                      >
                        <FaTrash></FaTrash>
                      </Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      )}
    </>
  );
};
