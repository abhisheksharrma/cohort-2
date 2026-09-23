"use client"

type User = {
    id: number,
    name: string,
    email: string,
}

import { useState } from "react";

const FiilterUsers = ( { users } : { users: User[] } ) => {

    const [searchTerm, setSearchTerm] = useState("");

    const FilteredUsers = users.filter((User) => {
        return User.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    })

  return (
    <div>
        <input
            className="border rounded-lg border-amber-50 p-2 mb-4"
            type="text"
            placeholder="Search Users..."
            value={searchTerm}
            onChange={(event) => {setSearchTerm(event.target.value)}}
        />
        <ul>
            {
                FilteredUsers.map((user: User)=>(
                    <li key={user.id}>{user.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default FiilterUsers