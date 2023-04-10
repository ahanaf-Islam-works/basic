'use client'
import { useContext } from 'react';
import { DataContext } from './store/dataContext';

export default function Home() {
  const { data } = useContext(DataContext);
  return (
    <main>
      <h1>Basic Crud Application</h1>
      <div>
        <h2>All Data</h2>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id} - {item.name}
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
