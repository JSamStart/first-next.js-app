"use client";
import React from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
    return (
        <>
            <div>This is an unexpected error: {error.message}</div>
            <button className="btn" onClick={() => reset()}>
                Retry
            </button>
        </>
    );
};

export default ErrorPage;
