import Link from "next/link";
import UserTable from "./UserTable";

interface Props {
    searchParams: { sortOrder: string };
}
const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
    return (
        <>
            <h1>Users</h1>
            <Link className="btn btn-primary" href={"/users/new"}>
                New User
            </Link>

            <p>{new Date().toLocaleTimeString()}</p>
            <UserTable sortOrder={sortOrder} />
        </>
    );
};

export default UsersPage;
