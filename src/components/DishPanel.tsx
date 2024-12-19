'use client';

import { Dish } from '@/models';
import Link from 'next/link';


interface Props {
  dishes: Dish[];
}

export default function DishPanel({ dishes }: Props) {
  return (
    <ul className="flex justify-start items-center">
      {dishes.map((d: Dish) => (
        <li key={d.id}>
          <Link href={`/${d.id}`} className="dish-card">
            {d.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
