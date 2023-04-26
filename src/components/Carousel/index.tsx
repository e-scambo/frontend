import React, {useState, useEffect, useRef} from 'react';
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

  const intervalRef = useRef<number | undefined>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPage((page) => (page + 1) % data.length);
    }, 10000) as unknown as number;

    return () => {
      clearInterval(intervalRef.current ?? undefined);
    };
  }, [data.length]);

  return (
    <figure>
      <img src={data[page].image} />
      <h1 className="H1 branco">{data[page].title}</h1>
      <p className="branco">{data[page].text}</p>
      <p className="action laranja">{page + 1} / 3</p>
    </figure>
  );
};
