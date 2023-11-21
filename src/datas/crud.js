import { useState } from "react";
import { dataDummy } from "./dummy";

const CrudArray = () => {
  const [myArray, setMyArray] = useState(dataDummy);

  //delete
  const deleteItem = (id) => {
    const index = myArray.findIndex((item) => item.id === id);
    console.log("delet id", id);
    if (index !== -1) {
      const newArray = [
        ...myArray.slice(0, index),
        ...myArray.slice(index + 1),
      ];

      setMyArray(newArray);
    }
  };

  //update
  const updateItem = (id, nama, sku, brand, desc, namaV, skuV, harga) => {
    const index = myArray.findIndex((item) => item.id === id);

    if (index !== -1) {
      const updatedData = [...myArray];
      updatedData[index] = {
        ...updatedData[index],
        id: id,
        nama: nama,
        sku: sku,
        brand: brand,
        desc: desc,
        Variasi: {
          nama: namaV,
          sku: skuV,
          harga: harga,
        },
      };
      setMyArray(updatedData);
    }
  };

  // add data

  const addData = (newData) => {
    const newArray = [...myArray, newData];

    setMyArray(newArray);
  };

  return {
    myArray,
    deleteItem,
    updateItem,
    addData,
  };
};

export default CrudArray;
