import { CompositeDecorator } from "draft-js";
import React from "react";

const redTextDecoratorStrategy = (contentBlock, callback) => {
  const text = contentBlock.getText();
  let match;
  let start;

  const regex = /^\*\* (.+)$/gm;

  while ((match = regex.exec(text)) !== null) {
    start = match.index;
    const end = start + match[0].length;

    callback(start, end);
  }
};

const redTextDecoratorComponent = (props) => {
  return <div className={"red-text"}>{props.children}</div>;
};

const boldDecoratorStrategy = (contentBlock, callback) => {
  const text = contentBlock.getText();
  let match;
  let start;

  const boldRegex = /^\* (.+)$/gm;

  while ((match = boldRegex.exec(text)) !== null) {
    start = match.index;
    const end = start + match[0].length;

    callback(start, end);
  }
};

const boldDecoratorComponent = (props) => {
  const childrenArray = React.Children.toArray(props.children);

  // Extract the actual text content
  const text = childrenArray[0].props.text;
  console.log(text.substring(2, text.length));
  return <div className={"bold"} autoFocus>{text.substring(2, text.length)}</div>;
};

const headingDecoratorStrategy = (contentBlock, callback) => {
  const text = contentBlock.getText();
  let match;
  let start;

  const headingRegex = /^# (.+)$/gm;

  while ((match = headingRegex.exec(text)) !== null) {
    start = match.index;
    const end = start + match[0].length;

    callback(start, end);
  }
};

const headingDecoratorComponent = (props) => {
  return <div className={"heading"}>{props.children}</div>;
};

const underlineDecoratorStrategy = (contentBlock, callback) => {
  const text = contentBlock.getText();
  let match;
  let start;

  const underlineRegex = /^\*\*\* (.+)$/gm;

  while ((match = underlineRegex.exec(text)) !== null) {
    start = match.index;
    const end = start + match[0].length;

    callback(start, end);
  }
};

const underlineDecoratorComponent = (props) => {
  return <div className={"underline"}>{props.children}</div>;
};

export const customDecorator = new CompositeDecorator([
  {
    strategy: redTextDecoratorStrategy,
    component: redTextDecoratorComponent,
  },
  {
    strategy: boldDecoratorStrategy,
    component: boldDecoratorComponent,
  },
  {
    strategy: headingDecoratorStrategy,
    component: headingDecoratorComponent,
  },
  {
    strategy: underlineDecoratorStrategy,
    component: underlineDecoratorComponent,
  },
]);
