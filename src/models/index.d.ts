import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum AssetType {
  VIVIENDA = "VIVIENDA",
  VEHICULO = "VEHICULO",
  VEHICULO_INDUSTRIAL = "VEHICULO_INDUSTRIAL",
  NAVAL = "NAVAL",
  EMPRESA = "EMPRESA",
  CONSUMO = "CONSUMO",
  HERRAMIENTA = "HERRAMIENTA",
  INFORMATICA_ELECTRONICA = "INFORMATICA_ELECTRONICA",
  MAQUINARIA = "MAQUINARIA",
  MATERIAL_OFICINA = "MATERIAL_OFICINA",
  BIEN_ESPECIAL = "BIEN_ESPECIAL"
}

export enum AssetState {
  DISPONIBLE = "DISPONIBLE",
  NO_DISPONIBLE = "NO_DISPONIBLE"
}

type AssetMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BidMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Asset {
  readonly id: string;
  readonly name: string;
  readonly type: AssetType | keyof typeof AssetType;
  readonly description: string;
  readonly additionalInfo?: string | null;
  readonly documentation?: string | null;
  readonly initialBid: number;
  readonly startDate: string;
  readonly endDate: string;
  readonly bids?: (Bid | null)[] | null;
  readonly author?: string | null;
  readonly estado?: AssetState | keyof typeof AssetState | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Asset, AssetMetaData>);
  static copyOf(source: Asset, mutator: (draft: MutableModel<Asset, AssetMetaData>) => MutableModel<Asset, AssetMetaData> | void): Asset;
}

export declare class Bid {
  readonly id: string;
  readonly amount: number;
  readonly date: string;
  readonly asset?: Asset | null;
  readonly author?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Bid, BidMetaData>);
  static copyOf(source: Bid, mutator: (draft: MutableModel<Bid, BidMetaData>) => MutableModel<Bid, BidMetaData> | void): Bid;
}