import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound () {
  return (
    <div className="">
      <h3 className="">
       <span>404</span> - Страница не найдена
      </h3>
      <p className="">
       Ой, здесь ничего нет
      </p>
      <Link className="button button_type_to-main" to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;