import { MdBookmarkAdd } from "react-icons/md";

const Blog = ({blog, handleBookmark}) => {

    const {title,cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="p-4 mb-4">
            <img src={cover} alt={title} />
            <div className="flex justify-between my-2">
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-full" src={author_img} alt={author} />
                    <div>
                        <h3>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleBookmark(blog)} className="cursor-pointer"><MdBookmarkAdd /></button>
                </div>
            </div>
            <h2>{title}</h2>
            <p>
                {
                    hashtags.map((tag, index) => (
                        <span key={index} className="bg-gray-200 px-2 py-1 rounded mr-2"><a href="">#{tag}</a></span>
                    ))
                }
            </p>
        </div>
    );
};

export default Blog;