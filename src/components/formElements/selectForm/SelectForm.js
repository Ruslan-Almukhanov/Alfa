import React from "react";

const SelectForm = ({ label, handleChange, }) => {
  return (
    <>
      <InputLabel htmlFor="outlined-age-native-simple">Валюта</InputLabel>
      <Select
        onChange={handleChange}
        native
        label="Валюта"
        value={clients.currency}
      >
        <option aria-label="None" value="" />
        {currencies.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
        <option value={"all"}>Все</option>
      </Select>
    </>
  );
};

export default SelectForm;
