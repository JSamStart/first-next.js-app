import React from "react";

interface Props {
    params: { id: number; photoId: number };
}
const PhotoPage = ({ params: { id, photoId } }: Props) => {
    return (
        <div>
            User {id} PhotoDetails {photoId}
        </div>
    );
};

export default PhotoPage;
