import NewArrivalContext from "./NewArrivalContext";

export default function NewArrivalProvider({ children }) {
  const newArrival = [
    {
      id: 101,
      img: "./img/products/f1.jpg",
      thumbnail: "./img/products/f1.jpg",
      price: 45,
      name: "Shirt",
    },
    {
      id: 102,
      img: "./img/products/n3.jpg",
      thumbnail: "./img/products/n3.jpg",
      price: 50,
      name: "Classic White Oxford",
    },
    {
      id: 103,
      img: "./img/products/f5.jpg",
      thumbnail: "./img/products/f5.jpg",
      price: 66,
      name: "Midnight Black Polo",
    },
    {
      id: 104,
      img: "./img/products/n1.jpg",
      thumbnail: "./img/products/n1.jpg",
      price: 43,
      name: "Sky Blue Denim Shirt",
    },
    {
      id: 105,
      img: "./img/products/n5.jpg",
      thumbnail: "./img/products/n5.jpg",
      price: 78,
      name: "Navy Blue Linen Shirt",
    },
    {
      id: 106,
      img: "./img/products/f6.jpg",
      thumbnail: "./img/products/f6.jpg",
      price: 34,
      name: "Sand Beige Half Sleeve",
    },
    {
      id: 107,
      img: "./img/products/n8.jpg",
      thumbnail: "./img/products/n8.jpg",
      price: 56,
      name: "Charcoal Grey Formal Shirt",
    },
    {
      id: 108,
      img: "./img/products/f7.jpg",
      thumbnail: "./img/products/f7.jpg",
      price: 23,
      name: "Midnight Black Polo",
    },
  ];
  return (
    <NewArrivalContext.Provider value={{ newArrival }}>
      {children}
    </NewArrivalContext.Provider>
  );
}
