import { toast, ToastOptions } from "react-toastify";

const positionCenter: ToastOptions = {
    position: "bottom-left",
};

const notifySendMail = () =>
  toast.success("Email Sent Successfully", positionCenter);

const notifyError = () => toast.error("Something went wrong", positionCenter);

export { notifySendMail, notifyError };