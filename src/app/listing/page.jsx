//static routing data fetching

import React from "react";
import styles from "../styles/list.module.css";
import Link from "next/link";

// Fetch data (runs on the server side)
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await res.json();
  return data;
}

const Navbar = async () => {
  const users = await fetchUsers();

  return (
    <div>
      <h1>All User Listing</h1>
      {users.map((user) => (
        <Link href={"./listing/" + user.id} key={user.id}>
          <div className={styles.single}>
            <h2>{user.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
