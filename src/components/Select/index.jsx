import { Select } from "@kobalte/core";
import "./Select.css";
import { $selectState } from "./SelectState";

const SelectMenu = () => {
  const { currentSelection, setCurrentSelection } = $selectState;
  return (
    <Select.Root
      value={currentSelection()}
      onChange={setCurrentSelection}
      options={["All", "Freelance", "Side project"]}
      itemComponent={(props) => (
        <Select.Item item={props.item} class="select__item text-base text-base-content rounded-sm flex items-center justify-between h-8 px-2 relative outline-none">
          <Select.ItemLabel>{props.item.rawValue}</Select.ItemLabel>
          <Select.ItemIndicator class="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </Select.ItemIndicator>
        </Select.Item>
      )}>
      <Select.Trigger class="select__trigger inline-flex items-center justify-between w-[200px] h-10 border-[1px] dark:border-white rounded-md px-3 py-2 outline-none" 
      aria-label="select__project">
        <Select.Value class="select__value">
          {(state) => state.selectedOption()}
        </Select.Value>
        <Select.Icon>
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
              d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content class="select__content bg-base-100 rounded-md border-[1px] z-10">
          <Select.Listbox class="overflow-y-hidden max-h-[360px] p-2" />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default SelectMenu;
