import React, { useEffect, useState } from "react";

interface myProps {
  onSelectItem: (item: string) => void;
}

const ProductList = ({ onSelectItem }: myProps) => {
  const [prodList, setProdList] = useState<String[]>([]);
  let [tempItem, setTempItem] = useState("");

  useEffect(() => {
    // console.log(prodList);
    setProdList(["d=> ", "e=> ", "a=> ", "b=> ", "c=> "]);
  }, []);

  return (
    <>
      <select
        onChange={(eve) => {
          // console.log(eve.target.value);

          setTempItem(eve.target.value);
          onSelectItem(eve.target.value);
        }}
        value={tempItem}
      >
        {prodList.map((item) => (
          <option key={item.toString()} value={item.toString()}>
            {item}
          </option>
        ))}
      </select>

      <div>{prodList}</div>
    </>
  );
};

export default ProductList;
