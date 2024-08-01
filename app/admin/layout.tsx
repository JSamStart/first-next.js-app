import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
    return (
        <div className="flex">
            <aside className="p-1 mr-5 bg-lime-500"> admin sidebar</aside>
            <div>{children}</div>
        </div>
    );
};

export default AdminLayout;
