import React, { useState, memo } from "react";
import { MessageCircle, UserCircle2, Send } from "lucide-react";
import "aos/dist/aos.css";
import Image from "next/image";

const CommentSection = () => {
  const [comments, setComments] = useState<CommentType[]>([
    {
      id: "1",
      userName: "John Doe",
      content: "This is a comment",
      createdAt: "2021-01-01",
    },
    {
      id: "2",
      userName: "Jane Doe",
      content: "This is another comment",
      createdAt: "2021-01-02",
    },
    {
      id: "3",
      userName: "Bob Smith",
      content: "This is a third comment",
      createdAt: "2021-01-03",
    },
  ]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  const handleCommentSubmit = () => {
    setComments((prev) => [
      {
        id: Date.now().toString(),
        userName,
        content: newComment,
        createdAt: new Date().toLocaleString(),
      },
      ...prev,
    ]);
  };

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl">
      <div className="w-full h-full bg-gradient-to-b from-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/20">
              <MessageCircle className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">
              Comments
              <span className="text-indigo-400">({comments.length})</span>
            </h3>
          </div>
        </div>
        <form
          onSubmit={handleCommentSubmit}
          className="flex flex-col gap-6 p-6"
        >
          <div>
            <label className="block text-sm font-medium text-white">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your message here..."
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none min-h-[120px]"
              required
            />
          </div>

          <button className="w-full flex items-center justify-center gap-2 relative h-12 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
            <Send className="size-6" />
            <span className="text-lg font-semibold">Post Comment</span>
          </button>
        </form>
        <div className="space-y-4 h-[300px] overflow-y-auto p-2">
          {comments.length === 0 ? (
            <p className="text-gray-400 text-center">
              No comments yet. Start the conversation!
            </p>
          ) : (
            comments.map((comment, index) => (
              <Comment key={comment.id} comment={comment} index={index} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;

type CommentType = {
  id: string;
  userName: string;
  profileImage?: string;
  content: string;
  createdAt: string;
};

export const Comment = memo(
  ({ comment }: { comment: CommentType; index: number }) => (
    <div className="px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5">
      <div className="flex items-start gap-3 ">
        {comment.profileImage ? (
          <Image
            width={40}
            height={40}
            src={comment.profileImage}
            alt={`${comment.userName}&apos;s profile`}
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30"
            loading="lazy"
          />
        ) : (
          <div className="p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
            <UserCircle2 className="w-5 h-5" />
          </div>
        )}
        <div className="flex-grow min-w-0">
          <div className="flex items-center justify-between gap-4 mb-2">
            <h4 className="font-medium text-white truncate">
              {comment.userName}
            </h4>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {comment.createdAt}
            </span>
          </div>
          <p className="text-gray-300 text-sm break-words leading-relaxed relative bottom-2">
            {comment.content}
          </p>
        </div>
      </div>
    </div>
  )
);

Comment.displayName = "Comment";
