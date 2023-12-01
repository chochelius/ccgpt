import "./Chat.css";
import { useState } from "react";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [botResponse, setBotResponse] = useState("Hello, how can I help you?");
  const [botHistory, setBotHistory] = useState([]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBotResponse(userInput);
    setUserInput("");
  };

  const generateReply = (trigger, reply, text) => {
    let item;
    let items;
    for (let x = 0; x < trigger.length; x++) {
      for (let y = 0; y < reply.length; y++) {
        if (text.includes(trigger[x][y])) {
          items = reply[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  };

  const matchReply = (userInput) => {
    const trigger = [
      ["hi", "hey", "hello"],
      ["how are you", "how are things", "how you doing"],
      ["what is going on", "what is up"],
      ["happy", "good", "amazing", "fantastic", "cool"],
      ["bad", "bored", "tired", "sad"],
      ["thanks", "thank you"],
      ["bye", "good bye", "goodbye"],
    ];

    const reply = [
      ["Hello", "Hi", "It's nice seeing you!"],
      [
        "I'm doing good... how are you?",
        "I feel kind of lonely, how are you?",
        "I feel happy, how are you?",
      ],
      ["Nothing much", "Exciting things!", "I'm happy to see you!"],
      ["Glad to hear it", "Yayyy!! That's the spirit!"],
      ["There is always a rainbow after the rain!"],
      ["You're welcome", "No problem", "It's my pleasure!"],
      ["Goodbye, it was a nice talk"],
    ];

    const alternative = [
      "Same",
      "Go on...",
      "Try again please?",
      "I'm listening...",
    ];

    let botMsg = generateReply(trigger, reply, userInput);

    if (!botMsg) {
      botMsg = alternative[Math.floor(Math.random() * alternative.length)];
    }

    setBotHistory([botMsg, ...botHistory]);
  };

  return (
    //     <div className="container py-5" style={{ height: "100vh" }}>
    //       <div className="chat-container my-3">
    //         <div className="chat-header">
    //           <h1>Chatbot</h1>
    //         </div>
    //         <div className="chat-body">
    //           <div
    //             className="chat-messages bg-secondary-subtle"
    //             style={{ height: "350px", border: "1px solid black" }}
    //           >
    //             <div className="chat-message container">
    //               <p className=" fixed-bottom">{botResponse}</p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="chat-footer">
    //           <form onSubmit={handleSubmit}>
    //             <input
    //               type="text"
    //               className="form-control"
    //               placeholder="Type your message here"
    //               value={userInput}
    //               onChange={handleUserInput}
    //             />
    //             <button className="btn btn-primary">Send</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };

    // export default Chat;

    // chat bot component from https://dev.to/kimmese/how-to-speak-robot-4pa0

    <div className="container py-5" style={{ height: "100vh" }}>
      <div className="chat-container my-3">
        <div className="chat-header">
          <h1>Chatbot</h1>
        </div>
        <div className="chat-body">
          <div
            className="chat-messages bg-secondary-subtle"
            style={{ height: "350px", border: "1px solid black" }}
          >
            <div
              className="chat-message container sticky-bottom"
              style={{ height: "100%" }}
            >
              <p className="sticky-bottom position-sticky">{botHistory}</p>
              <p className="sticky-bottom position-sticky px-auto">
                {botResponse}
              </p>
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Type your message here"
              value={userInput}
              onChange={handleUserInput}
            />
            <button
              className="btn btn-primary"
              onClick={() => matchReply(userInput)}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
