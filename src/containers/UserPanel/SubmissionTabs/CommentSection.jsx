import React, { useState, useEffect } from "react";
import { Button, Card, Avatar, Comment, Input, Divider, message } from "antd";
import { GetApi, AuthPostApi } from "../../../api/callapi";
import { SubmissionDetailLink, CommentLink } from "../../../api/endpoints";
import RightArrow from "../../../images/arrow-right.svg";
import { toast } from "react-toastify";
import moment from "moment";

const CommentSection = props => {
  const [submissionDetail, setSubmissionDetail] = useState({
    report_comment: []
  });

  const [commentData, setCommentData] = useState({
    comment: "",
    report_id: props.cardId
  });

  const [posted, setPosted] = useState(false);

  const url = SubmissionDetailLink + props.cardId;

  useEffect(() => {
    init();
  }, [posted]);

  const init = async e => {
    const response = await GetApi(url);
    if (response.status === 200) {
      let responseData = response.data;
      setSubmissionDetail(responseData);
    } else {
      toast.error("Sorry couldn't load Program-details right now");
    }
  };

  const handleComment = e => {
    const { name, value } = e.target;
    const info = commentData;
    info[name] = value;
    setCommentData(info);
  };

  const postComment = async e => {
    const comment_response = await AuthPostApi(CommentLink, commentData);
    if (comment_response.status === 201) {
      let response_data = comment_response.data;
      setCommentData(null);
      message.success("Comment posted");
      setPosted(true);
    } else {
      message.error("Failed to post Comment");
    }
  };

  return (
    <>
      <div className="comment-section">
        <div className="header">Recent Comments</div>
        <Card className="comment-card">
          {submissionDetail && submissionDetail.report_comment.length === 0 ? (
            <div>
              <p className="instruction">
                {" "}
                No comments. Be the first one to post.
              </p>
            </div>
          ) : (
            <>
              {submissionDetail.report_comment.map(data => (
                <>
                  <Comment
                    className="each-comment"
                    // actions={actions}
                    author={
                      <a href="##" className="author">
                        {data && data.name}
                      </a>
                    }
                    avatar={<Avatar src={data && data.img} alt="user-pic" />}
                    content={<p>{data && data.comment}</p>}
                    datetime={moment(
                      submissionDetail && submissionDetail.created_at
                    ).format(" MMMM Do YYYY, h:mm:ss a")}
                  />
                  <Divider />
                </>
              ))}
            </>
          )}
        </Card>
        <Card className="comment-card">
          <Input
            type="text"
            name="comment"
            className="comment-input"
            placeholder="Write a comment"
            onChange={e => handleComment(e)}
          />
          <Button className="Purple-button" onClick={postComment}>
            <img src={RightArrow} alt="arrow-right" />
          </Button>
        </Card>
      </div>
    </>
  );
};
export default CommentSection;
