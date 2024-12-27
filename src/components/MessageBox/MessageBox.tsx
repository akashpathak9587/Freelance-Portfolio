import styles from "./MessageBox.module.css"

const MessageBox = () => {
  return (
    <div className="w-[60vw] h-[60vh] flex-container flex-col gap-4 mx-auto" id="contact">
      <div className="title text-[2.5rem] tracking-widest p-12 text-5xl text-[#b9a1a2]">Hire Me</div>
      <input
        type="text"
        placeholder="Write Purpose..."
        className={`border w-[100%] rounded-lg p-2 border-[#b9a1a2] outline-[#b9a1a2] ${styles.textInput} transition-all duration-300`}
      />
          <textarea className={`${styles.textArea} border w-[100%] outline-[#b9a1a2] h-[100px] ${styles.textInput}`} placeholder="Write Your Message here..."></textarea>
          <button className="bg-[#b9a1a2] hover:bg-[#c8aeaf] py-2 px-12 text-white rounded-sm transition-all duration-300">Connect</button>
    </div>
  );
};

export default MessageBox;
