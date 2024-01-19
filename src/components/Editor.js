import React, { useState, useEffect, useRef } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import Button from "./Button";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() => {
    const savedContent = localStorage.getItem("editorContent");
    return savedContent
      ? EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent)))
      : EditorState.createEmpty();
  });

  const contentJsonObj = useRef();

  useEffect(() => {
    // Save content to local storage whenever editorState changes
    const contentState = editorState.getCurrentContent();
    contentJsonObj.current = JSON.stringify(convertToRaw(contentState));
  }, [editorState]);

  const handleInputChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <>
      <Button contentJson={contentJsonObj.current}/>
      <div className="editor">
        <Editor
          editorState={editorState}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default MyEditor;
