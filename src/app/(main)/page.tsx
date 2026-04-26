import React from 'react';

type NewsCategory = {
  category_id: string;
  category_name: string;
};

type ApiResponse = {
  status: boolean;
  data: {
    news_category: NewsCategory[];
  };
};

const GetAllCategories = async (): Promise<ApiResponse["data"]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data: ApiResponse = await res.json();
  return data.data;
};

const HomePage = async () => {
  const categories = await GetAllCategories();

  return (
    <div className='grid grid-cols-12 container gap-3 mx-auto'>

      <div className='col-span-3 bg-gray-400 p-2'>
        <p>All Categories</p>

        <ul className=' flex flex-col gap-3'>
          {categories.news_category.map((category) => (
            <li className=' bg-slate-100 p-2 rounded-md font-bold text-center' key={category.category_id}>
              {category.category_name}
            </li>
          ))}
        </ul>

      </div>

      <div className='col-span-6 bg-red-300'>
        all news
      </div>

      <div className='col-span-3 bg-amber-300'>
        social icon
      </div>

    </div>
  );
};

export default HomePage;
