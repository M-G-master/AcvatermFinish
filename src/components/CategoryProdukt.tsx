import React from 'react';

type CategoriesProduktProps = {
  value: number;
  onChangeCategory: (index: number) => void;
};

export const CategoryProdukt: React.FC<CategoriesProduktProps> = ({ value, onChangeCategory }) => {
  const categories = ['Усі', 'Душеві кабіни', 'Ванни', 'Водопостачання', 'Інструмент', 'Пепперони'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onChangeCategory(index)}
            className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
