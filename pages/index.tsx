// GLOBAL
import axios from "axios";

// LOCAL
import { Video } from "../types";
import NoResults from "../Components/NoResults";
import VideoCard from "../Components/VideoCard";


interface IProps {
  videos: Video[];
}

const Home = ({ videos }: IProps) => {
  return (
    <>
      <div className="flex flex-col gap-10 videos h-full">
        {videos.length ? (
          videos.map((video: Video) => (
            <VideoCard post={video} key={video._id} />
          ))
        ) : (
          <NoResults text={"No Videos Found"} />
        )}
      </div>
    </>
  );
};

// Fetch data
export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
