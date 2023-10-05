import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 border">
        <div className="p-1 col-span-3">news</div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};

export default News;
