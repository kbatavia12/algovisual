import React, { useEffect, useState } from "react";
import ArrayBox from "./ArrayBox";

const LinearSearch:React.FC = () => {
  let [i, setI] = useState<number>(0);
  const [value, setValue] = useState<number>(0);
  const [displayValue, setDisplayValue] = useState<number>(0);
  const [arrayLength, setArrayLength] = useState<number>(0);
  const [searchArray, setSearchArray] = useState<number[]>(
    Array.from(Array(arrayLength === null ? 0 : arrayLength).keys())
  );

  useEffect(() => {
    const searchTimeout = setInterval(() => {
      setI((i) => i + 1);
    }, 1000);
    if (i == value) {
      setDisplayValue(i);
      clearInterval(searchTimeout);
    }

    return () => clearInterval(searchTimeout);
  }, [i, value]);

  return (
    <div>
      <form>
        <div>
          <label>Enter length of the array</label>
          <input
            value={arrayLength}
            type="number"
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setArrayLength(parseInt(e.currentTarget.value));
              setSearchArray(
                Array.from(Array(arrayLength === null ? 0 : arrayLength).keys())
              );
            }}
          />
        </div>
        <div>
          <label>Enter the element you want to search</label>
          <input
            value={value}
            type="number"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setValue(parseInt(e.currentTarget.value))
            }
          />
        </div>
      </form>

      <div style={{ display: "flex", flex: 1, flexWrap: "wrap" }}>
        {searchArray.map((item) => (
          <ArrayBox value={item} color={item == i ? "blue" : "grey"} />
        ))}
      </div>

      <div>
        <h1>{displayValue}</h1>
      </div>
    </div>
  );
};

export default LinearSearch;
