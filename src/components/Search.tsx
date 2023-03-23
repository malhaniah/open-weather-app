import { geocoding, SearchProps, weather } from "../utils";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { MutableRefObject, useRef, useState } from "react";

export default function Search() {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [input, setInput] = useState<string | null>(null);

  const handelEvent = (e: any) => {
    if (e.key === "Etner") {
      setInput(inputRef.current.value);
    }

    weather(input);
  };

  return (
    <Container>
      <Input ref={inputRef} />
      <Button onKeyPress={handelEvent}>
        <FiSearch style={{ color: "#fff", fontSize: "18px" }} />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 750px;
  height: 34px;
  display: flex;
  border-radius: 5px;
  margin: 20px;
  position: fixed;
`;
const Input = styled.input`
  flex: 4;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: none;
  outline: none;
  padding: 10px 15px;
  transition: all 0.2s ease;
  &:focus {
    outline: 4px solid #00b4d8;
  }
  z-index: 99;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  outline: none;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  background: #0077b6;
  cursor: pointer;
`;
