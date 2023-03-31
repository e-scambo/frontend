import React from 'react';
import {useState} from 'react';
import './styles.css';
import 'assets/Tipografia.css';

import peopleTalking from 'assets/img/peopleTalking.gif';
import peopleAnalysing from 'assets/img/peopleAnalysing.gif';
import womanAtNotebook from 'assets/img/womanAtNotebook.gif';


export default function Carousel() {
  const [page, setPage] = useState(0);

  const data = [
    {
      'image': peopleTalking,
      'title': 'LOREM IPSUM DOL SET AMEM',
      'text': 'Lorem ipsum dolor sit amet Nam voluptatem dolorem.',
    },
    {
      'image': peopleAnalysing,
      'title': 'LOREM IPSUM DOL SET AMEM',
      'text': 'Lorem ipsum dolor sit amet Nam voluptatem dolorem.',
    },
    {
      'image': womanAtNotebook,
      'title': 'LOREM IPSUM DOL SET AMEM',
      'text': 'Lorem ipsum dolor sit amet Nam voluptatem dolorem.',
    },
  ];

  function HandleClick() {
    if (page+1 === data.length) {
      setPage(0);
    } else {
      setPage(page + 1);
    };
  };


  return (
    <figure onMouseDown={HandleClick}>
      <img src={data[page].image} />
      <h1 className="H1 branco">{data[page].title}</h1>
      <p className="branco">{data[page].text}</p>
      <p className="action laranja">{page + 1} / {data.length}</p>
    </figure>
  );
};
