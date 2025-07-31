import Bookmark from "../Bookmark/bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className='w-1/3 bg-gray-100 p-4 m-2'>
            <h2 className='text-2xl font-bold'>My Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;