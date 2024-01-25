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
  const originalText = props.children[0].props.text;
  const modifiedText = originalText.replace("** ", "   ");

  return (
    <div className={"red-text"}>
      {React.cloneElement(props.children[0], { text: modifiedText })}
    </div>
  );
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
  const originalText = props.children[0].props.text;
  const modifiedText = originalText.replace("* ", "  ");

  return (
    <div className={"bold"}>
      {React.cloneElement(props.children[0], { text: modifiedText })}
    </div>
  );
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
  const originalText = props.children[0].props.text;
  const modifiedText = originalText.replace("# ", "  ");

  return (
    <div className={"heading"}>
      {React.cloneElement(props.children[0], { text: modifiedText })}
    </div>
  );
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
  const originalText = props.children[0].props.text;
  const modifiedText = originalText.replace("*** ", "    ");

  return (
    <div className={"underline"}>
      {React.cloneElement(props.children[0], { text: modifiedText })}
    </div>
  );
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
