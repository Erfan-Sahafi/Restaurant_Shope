import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const CommentBox = (props) => {
  const [commentData, setCommentData] = useState({});
  const propsID = props.id;
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetch(`${API_URL}/comments/${propsID}?_expand=user`)
      .then((res) => res.json())
      .then((data) => {
        setCommentData(data);
      });
  }, []);

  return (
    <>
      {commentData?.body && (
        <div className="w-full sm:w-[60%] shadow-md rounded-md bg-blue-100 dark:bg-slate-900 p-5 mt-5">
          <div className="flex items-center dark:text-white justify-between">
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-2xl text-zinc-600" />
              <span className="text-base tracking-tighter">
                {
                    commentData?.user?.name
                }
              </span>
            </div>
            <span>{commentData?.date}</span>
          </div>
          <div className="flex items-center justify-between mt-6">
            <p className="text-zinc-500">{props.body}</p>
            <a
              href="#"
              className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Dana rounded-md text-sm p-2 sm:px-3 sm:py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              پاسخ
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentBox;
