import Provider from "./Provider";

export default function Level({ children }) {
  const products = [
    { name: "shirt", price: 34, img: "./img//products/f1.jpg" },
    { name: "shirt", price: 34, img: "./img//products/f2.jpg" },
    { name: "shirt", price: 34, img: "./img//products/f3.jpg" },
    { name: "shirt", price: 34, img: "./img//products/f4.jpg" },
    { name: "shirt", price: 34, img: "./img//products/f5.jpg" },
    { name: "shirt", price: 34, img: "./img//products/f6.jpg" },
    { name: "trouser", price: 34, img: "./img//products/f7.jpg" },
    { name: "shirt", price: 34, img: "./img//products/f8.jpg" },
    { name: "shirt", price: 34, img: "./img//products/n1.jpg" },
    { name: "shirt", price: 34, img: "./img//products/n2.jpg" },
    { name: "shirt", price: 34, img: "./img//products/n3.jpg" },
    { name: "shirt", price: 34, img: "./img//products/n4.jpg" },
    { name: "short", price: 34, img: "./img//products/n6.jpg" },
    { name: "shirt", price: 34, img: "./img//products/n7.jpg" },
    { name: "shirt", price: 34, img: "./img//products/n8.jpg" },
  ];
  return <Provider.Provider value={{ products }}>{children}</Provider.Provider>;
}
