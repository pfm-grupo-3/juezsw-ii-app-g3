import * as React from "react";
import {
  SelectField,
  TextField,
  Heading,
  Flex,
  TextAreaField,
  Button,
} from "@aws-amplify/ui-react";
import { Asset, AssetState, AssetType } from "../models";
import { DataStore } from "@aws-amplify/datastore";
import { useState } from "react";

export const AssetForm = ({ author }) => {
  const [inputs, setInputs] = useState({});

  const createAsset = async (asset) => {
    await DataStore.save(asset);
  };
    const handleMultilineChange = (event) => {
      const name = event.currentTarget.name;
      const value = event.currentTarget.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };
  const handleForm = async (e) => {
    e.preventDefault();
    debugger

    const asset = new Asset({
      ...inputs,
      estado: AssetState.DISPONIBLE,
      initialBid: parseFloat(inputs.initialBid),
      author,
    });
    await createAsset(asset);
    setInputs({});
  };
  return (
    <>
      <Flex
        as={"form"}
        border="1px solid var(--amplify-colors-white)"
        borderRadius="6px"
        boxShadow="3px 3px 5px 6px var(--amplify-colors-neutral-60)"
        direction={"column"}
        gap={"1rem"}
        marginTop="100px"
        onSubmit={handleForm}
        padding="2rem"
      >
        <Heading level={3}>Crear bien a subastar</Heading>

        <TextField
          isRequired={true}
          label="Nombre"
          name={"name"}
          onChange={handleChange}
          value={inputs.name || ""}
        />

        <SelectField
          label="Tipo"
          name={"type"}
          onChange={handleChange}
          value={inputs.type || AssetType.CONSUMO}
        >
          {Object.entries(AssetType).map(([key, value]) => {
            return (
              <option key={key} value={key}>
                {value}
              </option>
            );
          })}
        </SelectField>
        <TextAreaField
          isRequired={true}
          label="Descripción"
          name={"description"}
          onChange={handleMultilineChange}
          rows={3}
          value={inputs.description || ""}
        />
        <TextField
          isRequired={true}
          label={"Fecha de inicio"}
          name={"startDate"}
          onChange={handleChange}
          type={"datetime-local"}
          value={inputs.startDate || ""}
        ></TextField>
        <TextField
          isRequired={true}
          label={"Fecha de fin"}
          name={"endDate"}
          onChange={handleChange}
          type={"datetime-local"}
          value={inputs.endDate || ""}
        ></TextField>
        <TextField
          isRequired={true}
          label={"Puja inicial"}
          name={"initialBid"}
          onChange={handleChange}
          type={"number"}
          value={inputs.initialBid || ""}
        ></TextField>
        <Button
          backgroundColor={"green.40"}
          color={"white"}
          type={"submit"}
          variation={"primary"}
        >
          Crear
        </Button>
      </Flex>
    </>
  );
};
