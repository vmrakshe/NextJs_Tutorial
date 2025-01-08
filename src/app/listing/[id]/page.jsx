import React from 'react'//dynamic rouring page

// src/app/listing/[id]/page.jsx
export async function generateStaticParams() {
  // Fetch user data
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch user data');
  const users = await res.json();

  // Predefine paths for the first 10 users
  return users.map((user) => ({
    id: user.id.toString()
  }));
}


// src/app/listing/[id]/page.jsx
export default async function UserDetail({ params }) {
  const { id } = await params;

  // Fetch user data for the specific ID
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error('Failed to fetch user data');
  const user = await res.json();

  return (
    <div className='bg-slate-300 p-5 border border-red-200'>
      <h1>User Details</h1>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company.name}</p>
    </div>
  );
}

export const dynamicParams = true; // Optional for handling undefined paths


