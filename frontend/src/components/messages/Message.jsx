import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="avatar.jpg" alt="bubble" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi, Whats up?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:41
      </div>
    </div>
  );
};

export default Message;

// STARTER CODE
// import React from "react";

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img src="avatar.jpg" alt="bubble" />
//         </div>
//       </div>
//       <div className="chat-bubble text-white bg-blue-500">Hi, Whats up?</div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
//         12:41
//       </div>
//     </div>
//   );
// };

// export default Message;
