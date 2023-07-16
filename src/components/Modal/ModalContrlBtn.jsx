import { $modalState } from "./ModalState";

const ModalControlBtn = ({ text, currentID }) => {
  const { setOpen, setContentID } = $modalState;
  const btnAction = () => {
    setOpen(true);
    setContentID(currentID);
  };
  return (
    <>
      <button class="btn btn-primary" onclick={() => btnAction()}>
        {text}
      </button>
    </>
  );
};
export default ModalControlBtn;
