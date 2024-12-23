import styles from "./MessageBox.module.css"

const MessageBox = () => {
  return (
    <div className="w-[60vw] h-[60vh] flex-container flex-col gap-4 mx-auto">
      <div className="title text-[2rem] tracking-widest p-4 text-5xl">Message Me Now</div>
      <input
        type="text"
        placeholder="Write Purpose..."
        className="border border-black w-[100%] rounded-lg p-2 outline-[#000]"
      />
          <textarea className={`${styles.textArea} border w-[100%] outline-[#000]`} placeholder="Write Your Message here ...."></textarea>
          <button className="bg-slate-700 py-2 px-4 text-white rounded-lg">Send</button>
    </div>
  );
};

export default MessageBox;
