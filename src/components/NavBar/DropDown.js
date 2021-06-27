import { useState } from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categorias = [
    {
      id: "planetas",
      title: "Planetas",
    },
    {
      id: "flores",
      title: "Flores",
    },
  ];

  return (
    <div className="dropdown">
      <a onClick={() => setIsOpen(!isOpen)}>Categorías</a>
      {isOpen ? (
        <ul class="dropdown-content">
          {categorias.map((category) => (
            <Link to={`/category/${category.id}`} >{category.title}</Link>
            ))}
        </ul>
      ):null}
    </div>
  );
};

export default DropDown;