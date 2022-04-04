import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AsideWidget from "../../containers/asidewidget";
import Feedback from "../../containers/feedback/Feedback";
import Widget from "../../containers/widget";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import feedbackApp from "../../api/feedbackApp";

const Home = ({ setPostId }) => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("least comments");
  const [filter, setFilter] = useState("All");
  const [reload, setReload] = useState(false);
  const [postFeeds, setPostFeeds] = useState([]);
  const handleGetPosts = async (filter, sort) => {
    try {
      const response = await feedbackApp.get(`/${filter}/${sort}`);
      setPostFeeds(response?.data?.sortedPosts);
      // console.log(response);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    handleGetPosts(filter.toLowerCase(), sort.toLowerCase());
  }, [filter, sort, reload]);

  return (
    <HomeWrapper>
      <div>
        <AsideWidget filter={filter} setFilter={setFilter} />
      </div>
      <div>
        <Widget sort={sort} setSort={setSort} />
        <div className="feedContainer">
          {[...postFeeds].map((el) => {
            return (
              <Feedback
                key={Math.random()}
                post={el}
                setReload={setReload}
                reload={reload}
                setPostId={setPostId}
              />
            );
          })}
        </div>
      </div>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 5rem auto 0 auto;
  gap: 2rem;
  padding-bottom: 2rem;

  @media (max-width: 939px) {
    flex-direction: column;
    margin: auto;
    width: 100%;
  }
  @media screen and (max-width: 770px) {
    gap: 0;
  }

  .feedContainer {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & > div {
    &:first-of-type {
      @media screen and (max-width: 939px) and (min-width: 771px) {
        //  border:1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
      }
    }
  }
`;
