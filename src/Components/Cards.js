import React from 'react'
import data from './data'
import Card from './Card';

const Cards = () => {
    const getCard = data.map(function (datum) {
        return <Card {...datum} />;
      });
  return (
    <div>
        <div className="w-full bg-white py-[10rem] px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            {getCard}
          </div>
        </div>
    </div>
  )
}

export default Cards