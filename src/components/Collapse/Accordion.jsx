import { For } from "solid-js";
import Collapse from "./Collapse";

const accordionContent = [
  {
    title: "Programming Languages",
    content: [
      `The programming languages that I've learnt are Python, Javascript and SQL. 
    However, I am also comfortable of writing VBA (it is actually my first programming language)`,
    ],
  },
  {
    title: "Data structure and algorithm",
    content: ["I've learnt data structure and algorihtm from leetcode"],
  },
  {
    title: "Backend technologies",
    content: [
      `I've been developing APIs and websites with Python and Javascript frameworks, 
    specifically with Flask, Django, FastAPI (Python) and Express (JS).`,
    'I am also able to implement some commons API requirements, including CRUD tasks, Organizing files, Authentication and authorization, Deployment'
    ],
  },
  {
    title: "Data structure and algorithm",
    content: ["I've learnt data structure and algorihtm from leetcode"],
  },
];

const Accordion = () => {
  return (
    <>
      <For each={accordionContent}>
        {(x) => <Collapse title={x.title} content={x.content} />}
      </For>
    </>
  );
};

<Accordion.Root class="accordion" defaultValue={["item-1"]}>
<Accordion.Item class="accordion__item" value="item-1">
  <Accordion.Header class="accordion__item-header">
    <Accordion.Trigger class="accordion__item-trigger">
      <span>Is it accessible?</span>
      <ChevronDownIcon class="accordion__item-trigger-icon" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
  <Accordion.Content class="accordion__item-content">
    <p class="accordion__item-content-text">
      Yes. It adheres to the WAI-ARIA design pattern.
    </p>
  </Accordion.Content>
</Accordion.Item>
<Accordion.Item class="accordion__item" value="item-2">
  <Accordion.Header class="accordion__item-header">
    <Accordion.Trigger class="accordion__item-trigger">
      <span>Is it unstyled?</span>
      <ChevronDownIcon class="accordion__item-trigger-icon" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
  <Accordion.Content class="accordion__item-content">
    <p class="accordion__item-content-text">
      Yes. It's unstyled by default, giving you freedom over the look and feel.
    </p>
  </Accordion.Content>
</Accordion.Item>
<Accordion.Item class="accordion__item" value="item-3">
  <Accordion.Header class="accordion__item-header">
    <Accordion.Trigger class="accordion__item-trigger">
      <span>Can it be animated?</span>
      <ChevronDownIcon class="accordion__item-trigger-icon" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
  <Accordion.Content class="accordion__item-content">
    <p class="accordion__item-content-text">
      Yes! You can animate the Accordion with CSS or JavaScript.
    </p>
  </Accordion.Content>
</Accordion.Item>
</Accordion.Root>

export default Accordion;
