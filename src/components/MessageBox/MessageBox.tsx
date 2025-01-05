import { useContext, useEffect, useState } from "react";
import { ScreenContext } from "../../context/WindowContext/WindowContext";
import styles from "./MessageBox.module.css";
import { useInView } from "react-intersection-observer";
import FloatingAnimationWrapper from "../FloatingAnimationWrapper/FloatingAnimationWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { mailBody } from "../../types/api";
import { sendMail } from "../../apis/commonApi";
import { BeatLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { notifyError, notifySendMail } from "../../utility/commonFunctions";

const MessageBox = () => {
  const { setSection } = useContext(ScreenContext);
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (inView) {
      setSection("Contact Me");
    }
  }, [inView, setSection]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<mailBody>();

  const onSubmit: SubmitHandler<mailBody> = async (data) => {
    setLoading(true);
    try {
      const res = await sendMail(data);
      if (res.status === 200) {
        notifySendMail();
        setLoading(false);
        reset();
      } else {
        notifyError();
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      notifyError();
      setLoading(false);
    }
  };
  return (
    <div
      className="w-[60vw] h-[70vh] flex-container flex-col gap-4 mx-auto"
      id="contact"
      ref={ref}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="w-full h-full flex-container flex-col gap-4 mx-auto">
        <FloatingAnimationWrapper>
          <div className="title text-[2.5rem] tracking-widest p-12 text-5xl text-[#b9a1a2]">
            Hire Me
          </div>
        </FloatingAnimationWrapper>
        <div className="flex w-full gap-[10px]">
          <div className="w-full">
            <input
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
              type="text"
              placeholder="Your Name..."
              className={`border w-[100%] rounded-lg p-2 border-[#b9a1a2] outline-[#b9a1a2] ${styles.textInput} transition-all duration-300`}
            />
            {errors.name && (
              <div className="mt-2 ms-2 text-red-700">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="w-full">
            <input
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
                  message: "Enter Valid Email",
                },
              })}
              type="email"
              placeholder="Your Email..."
              className={`border w-[100%] rounded-lg p-2 border-[#b9a1a2] outline-[#b9a1a2] ${styles.textInput} transition-all duration-300`}
            />
            {errors.email && (
              <div className="mt-2 ms-2 text-red-700">
                {errors.email.message}
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <input
            {...register("purpose", {
              required: { value: true, message: "Purpose Required" },
              minLength: { value: 10, message: "Min 10 characters" },
              maxLength: { value: 200, message: "Max 200 characters" },
            })}
            type="text"
            placeholder="Write Purpose..."
            className={`border w-[100%] rounded-lg p-2 border-[#b9a1a2] outline-[#b9a1a2] ${styles.textInput} transition-all duration-300`}
          />
          {errors.purpose && (
            <div className="mt-2 ms-2 text-red-700">
              {errors.purpose.message}
            </div>
          )}
        </div>
        <div className="w-full">
          <textarea
            {...register("message", {
              required: { value: true, message: "Message is required" },
              minLength: { value: 20, message: "Min 20 characters" },
              maxLength: { value: 2000, message: "Max 2000 characters" },
            })}
            className={`${styles.textArea} border w-[100%] outline-[#b9a1a2] h-[100px] ${styles.textInput}`}
            placeholder="Write Your Message here..."></textarea>
          {errors.message && (
            <div className="mt-2 ms-2 text-red-700">
              {errors.message.message}
            </div>
          )}
        </div>
        {loading ? (
          <BeatLoader size={12} />
        ) : (
          <button
            type="submit"
            className="bg-[#b9a1a2] hover:bg-[#c8aeaf] py-2 px-12 text-white rounded-sm transition-all duration-300">
            Connect
          </button>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default MessageBox;
