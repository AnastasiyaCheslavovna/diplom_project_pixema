import { TrendsList } from "components";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { IOption } from "types";
import { Container, selectStyles } from "./styles";

const options: IOption[] = [
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
];

export const TrendsPage = () => {
  const [value, setValue] = useState("2023");

  const getValue = () => {
    return value ? options.find((option) => option.value === value) : options[0];
  };

  const handleValue = (option: SingleValue<IOption>): void => {
    if (option) setValue(option.value);
  };

  return (
    <>
      <>
        <Container>
          <Select
            options={options}
            isMulti={false}
            isSearchable={false}
            styles={selectStyles}
            value={getValue()}
            onChange={handleValue}
          />
        </Container>
        <TrendsList value={value} />
      </>
    </>
  );
};
