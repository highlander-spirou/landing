import { createSignal } from "solid-js";
import { writeClipboard } from "@solid-primitives/clipboard";

const CopyComponent = ({ indicator, content }) => {
  // Bao gồm Email & Phone, các component này khi clip sẽ đc copy vào clipboard
  const createNotification = (data) => {
    const noty = document.getElementById("notification");
    const notyInner = document.getElementById("notification-inner");

    notyInner.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg
      >
      <span>${data} copied to clipboard</span>
      `;

    noty.classList.remove("hidden");
    setTimeout(function () {
      noty.classList.add("hidden");
      notyInner.replaceChildren();
    }, 3000);
  };

  const copyToClipboard = (data) => {
    data === "email" ? writeClipboard("lenhan.123n@gmail.com") : writeClipboard("+84786309483");
    createNotification(data);
  };
  return (
    <>
      <div class="tooltip tooltip-bottom" data-tip="Copy to clipboard">
        <p onClick={() => copyToClipboard(indicator)} class="lowercase">
          {content}
        </p>
      </div>
    </>
  );
};

const FollowLinkComponent = ({ content, link }) => {
  return (
    <>
      <div class="tooltip tooltip-bottom" data-tip="Navigate to link">
        <a class="lowercase" href={link} target="_blank">
          {content}
        </a>
      </div>
    </>
  );
};

const Btn = ({ indicator, state, toggleSignalOn, children }) => {
  return (
    <>
      <div class="btn btn-ghost join-item cursor-default px-2">
        <div
          class={`${state()[indicator] ? "" : "tooltip"} tooltip-bottom`}
          data-tip="Expand"
        >
          <button onclick={() => toggleSignalOn(indicator)}>{children}</button>
        </div>
        {state()[indicator] &&
          (() => {
            switch (indicator) {
              case "email":
                return (
                  <CopyComponent
                    indicator="email"
                    content="lenhan.123n@gmail.com"
                  />
                );
              case "phone":
                return (
                  <CopyComponent indicator="phone" content="(+84)786 309 483" />
                );
              case "github":
                return (
                  <FollowLinkComponent
                    content="highlander-spirou"
                    link="https://github.com/highlander-spirou"
                  />
                );
              default:
                return null;
            }
          })()}
      </div>
    </>
  );
};

export default function SocialBtnGroup(props) {
  const [count, setCount] = createSignal({
    email: false,
    phone: false,
    github: false,
  });

  const toggleSignalOn = (event) => {
    const modifySignal = (e) => {
      let newObj = {};
      Object.keys(count()).forEach((key) => {
        key !== e ? (newObj[key] = false) : (newObj[key] = true);
      });
      return newObj;
    };
    setCount(modifySignal(event));
  };

  const evalStateOff = () => Object.values(count()).every((v) => v === false);

  const turnSignalOff = () => {
    setCount({
      email: false,
      phone: false,
      github: false,
    });
  };

  return (
    <>
      <div class="join border-2">
        <Btn indicator="github" state={count} toggleSignalOn={toggleSignalOn}>
          {props.github_svg}
        </Btn>
        <Btn indicator="email" state={count} toggleSignalOn={toggleSignalOn}>
          {props.mail_svg}
        </Btn>
        <Btn indicator="phone" state={count} toggleSignalOn={toggleSignalOn}>
          {props.phone_svg}
        </Btn>

        {evalStateOff() !== true && (
          <button
            class="btn btn-outline btn-error ml-1 px-2"
            onClick={() => turnSignalOff()}
          >
            {props.close_all}
          </button>
        )}
      </div>
    </>
  );
}
