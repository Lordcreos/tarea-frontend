import { Box, Label, Option, Select } from '@twilio-paste/core';

export const TipSelect = ({ tipPercentage, updateTip = () => {} }) => {
  return (
    <Box marginY="space80">
      <Label htmlFor="tip-amount">Cantidad de propina</Label>
      <Select
        id="tip-amount"
        value={tipPercentage}
        onChange={(event) => updateTip(event.target.value)}
      >
        <Option value="15">15%</Option>
        <Option value="20">20%</Option>
        <Option value="25">25%</Option>
      </Select>
    </Box>
  );
};

export default TipSelect;
