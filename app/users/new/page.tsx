"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUser = () => {
    const { push } = useRouter();
    return (
        <div>
            <h1>NewUser</h1>
            <button className="btn" onClick={() => push("/users")}>
                Create
            </button>
        </div>
    );
};

export default NewUser;
