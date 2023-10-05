import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  console.log(news);
  const { title, author, image_url, details, _id } = news;
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            className=" h-10 w-10 rounded-full"
            src={author?.img}
            alt=""
          />
          <div>
            <p>{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className=" flex items-center gap-2 text-2xl">
          <CiBookmark></CiBookmark>
          <AiOutlineShareAlt></AiOutlineShareAlt>
        </div>
      </div>
      <h4 className="text-[#403F3F] text-xl font-semibold my-5">{title}</h4>
      <img
        src={image_url}
        alt=""
      />
      {details.length > 200 ? (
        <p>
          {details.slice(0, 200)}...
          <Link
            to={`/news/${_id}`}
            className="text-orange-500"
          >
            {" "}
            Read More
          </Link>
        </p>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
