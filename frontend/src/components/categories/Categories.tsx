import CategoryItem from "./CategoryItem";

const CATEGORIES = [
  {
    id: 1,
    text: "Shop",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/698ba0cebe456aaf.jpg?q=100",
  },
  {
    id: 2,
    text: "Mobiles",
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/44e10b16e649b691.jpg?q=100",
  },
  {
    id: 3,
    text: "Fashion",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9d4e9c605fc1d2d3.jpg?q=100",
  },
  {
    id: 4,
    text: "Electronics",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/4da1d0d19350cc84.jpg?q=100",
  },
  {
    id: 5,
    text: "Home & Kitchen",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/5b813b64a3179898.jpg?q=100",
  },
  {
    id: 6,
    text: "Tvs & Appliances",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/717b5077a5e25324.jpg?q=100",
  },
  {
    id: 7,
    text: "Travel",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/57fe1ffe54569c41.jpg?q=100",
  },
  {
    id: 8,
    text: "Beauty, Toys & More",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/a5e656672d0548dd.jpg?q=100",
  },
  {
    id: 9,
    text: "Furniture",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/7a5e96c10ada8a56.jpg?q=100",
  },
  {
    id: 10,
    text: "Grocery",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/25f400c36bc3487d.jpg?q=100",
  },
];

const Categories = () => {
  return (
    <ul className="w-full bg-white flex items-center justify-normal space-x-6 lg:space-x-11 overflow-x-auto xl:overflow-x-hidden py-3 px-[6%]">
      {CATEGORIES.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </ul>
  );
};

export default Categories;
