import React from "react";
import { ItemWrapper } from "./Item.styles";
import imgUrl from "Request/imgUrl";
import { Card } from "styles/Card";
import { Truncate } from "styles/Trucate";
import { motion } from "framer-motion";
import ReactStars from "react-rating-stars-component";
import { convertAverage } from "utils/utils";
import { Button } from "styles/Button.styles";
import { CgRemoveR } from "react-icons/cg";
import { deleteMovie } from "Redux/actions/firestoreAction";
import { useSelector, useDispatch } from "react-redux";

const Item = ({ item, collection }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const movieID = item.id.toString();

  return (
    <ItemWrapper
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
    >
      <img src={imgUrl.small + item.poster_path} alt={item.title} />
      <Card>
        <Truncate>{item.title}</Truncate>
        <small>{item.release_date}</small>
        <ReactStars
          isHalf={true}
          value={convertAverage(item.vote_average)}
          count={5}
          size={24}
          activeColor="#fafafa"
          edit={false}
        />
        <Button
          onClick={() =>
            dispatch(deleteMovie(currentUser[0].localId, movieID, collection))
          }
        >
          <CgRemoveR />
          Remove
        </Button>
      </Card>
    </ItemWrapper>
  );
};

export default Item;
