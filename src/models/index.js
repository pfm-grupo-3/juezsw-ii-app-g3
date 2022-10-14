// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AssetType = {
  "VIVIENDA": "VIVIENDA",
  "VEHICULO": "VEHICULO",
  "VEHICULO_INDUSTRIAL": "VEHICULO_INDUSTRIAL",
  "NAVAL": "NAVAL",
  "EMPRESA": "EMPRESA",
  "CONSUMO": "CONSUMO",
  "HERRAMIENTA": "HERRAMIENTA",
  "INFORMATICA_ELECTRONICA": "INFORMATICA_ELECTRONICA",
  "MAQUINARIA": "MAQUINARIA",
  "MATERIAL_OFICINA": "MATERIAL_OFICINA",
  "BIEN_ESPECIAL": "BIEN_ESPECIAL"
};

const AssetState = {
  "DISPONIBLE": "DISPONIBLE",
  "NO_DISPONIBLE": "NO_DISPONIBLE"
};

const { Asset, Bid } = initSchema(schema);

export {
  Asset,
  Bid,
  AssetType,
  AssetState
};