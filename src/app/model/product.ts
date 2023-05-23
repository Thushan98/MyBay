export interface Product {
  id: number;
  price: number;
  description: string;
  rating: number;
  title: string;
  discount: number;
  image: string;
  quantity: number;
  category: number;
}

export const productDetail=[
  {
    id: 1,
    title: "Rolex Watch",
    description: "test description",
    rating: 5,
    discount: 0.05,
    image: "../../../assets/images/pngegg.png",
    quantity: 6,
    price: 5000,
    category: 1
  },
  {
    id:2,
    title: 'Men Belt GG',
    price: 850,
    quantity: 50,
    category: 2,
    description:"",
    image: "../../../assets/images/pngegg.png",
    discount: .20,
    rating: 4
},
{
    id:3,
    title: 'Ladies Shoe Heels',
    price: 2550,
    quantity: 20,
    category: 3,
    description:"",
    image: "../../../assets/images/pngegg.png",
    discount: .20,
    rating: 4
},
{
    id:4,
    title: 'Bagpack Kids',
    price: 2150,
    quantity: 5,
    category: 4,
    description:"",
    image: "../../../assets/images/pngegg.png",
    discount: .20,
    rating: 4
},
{
    id:5,
    title: 'Boy Sneakers Black',
    price: 2550,
    quantity: 15,
    category: 2,
    description:"",
    image: "../../../assets/images/pngegg.png",
    discount: .20,
    rating: 4
},
{
    id:6,
    title: 'Ladies Sneaker',
    price: 6150,
    quantity: 5,
    category: 2,
    description:"",
    image: "../../../assets/images/pngegg.png",
    discount: .30,
    rating: 4
},
{
    id:7,
    title: 'Rolex Watch C50',
    price: 8150,
    quantity: 15,
    category: 1,
    description:"",
    image: "../../../assets/images/pngegg.png",
    discount: .20,
    rating: 4
},
{
    id:8,
    title: 'Ladies Hand Bag-Red',
    price: 3150,
    quantity: 10,
    category: 3,
    description:"",
    image: "../../../assets/images/pngegg.png",
    discount: .20,
    rating: 4
},
{
    id:9,
    title: 'Ladies Hand Bag Blue',
    price: 4150,
    quantity: 5,
    category: 3,
    description:"",
    image: "../../../assets/images/pngegg.png",
    discount: .20,
    rating: 4
}
];
