import { Toast, toaster } from "@kobalte/core";
import "./Notification.css";

export const showToast = (content) => {
    return toaster.show((props) => (
      <Toast.Root toastId={props.toastId} class="user__toast">
        <Toast.Description class="flex items-center gap-3">
          <span class="w-5 h-5 text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </span>
          {content}
        </Toast.Description>
        <Toast.CloseButton class="toast__close-button">✕</Toast.CloseButton>
      </Toast.Root>
    ));
  };

const Notification = () => {
  return (
    <>
      {/* <button onClick={() => showToast()}>
        Show toast
      </button> */}
      <Portal>
        <Toast.Region duration={3000} pauseOnInteraction={false} limit={1}>
          <Toast.List class="toast__list" />
        </Toast.Region>
      </Portal>
    </>
  );
};

export default Notification;
