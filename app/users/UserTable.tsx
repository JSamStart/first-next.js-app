import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";
interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({ sortOrder }: Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" });
    const users: User[] = await res.json();

    const sortedUsers = sort(users).asc(sortOrder === "email" ? (user) => user.email : (user) => user.name);

    console.log("sortOrder ", sortOrder);

    return (
        <table className="table table-zebra ">
            <thead>
                <tr>
                    <th>
                        <Link href="users?sortOrder=name">name</Link>
                    </th>
                    <th>
                        <Link href="users?sortOrder=email">email</Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedUsers.map((user) => (
                    <tr key={user.id}>
                        <th>{user.name}</th> <th>{user.email}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
