import { useRef, useState } from "react";

const WordRelay = () => {
  const [word, setWord] = useState("검은머리");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  // 실시간으로 값을 바꿔주는걸로 아직까지 알고있는 Hook useRef
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    // preventDefault는 onClick Submit 과 같이 작동하는데
    // 전체 페이지 새로 고침을 방지하고 고유한 사용자 정의 코드로 제출을 처리할 수 있는 기능
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("정답");
      setWord(value);
    } else {
      setResult("땡");
    }
    setValue("");
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };


  return (
    <>
 
      <form onSubmit={onSubmitForm}>

      <div>{word}</div>
      <label id="label" htmlFor="wordInput">글자를 입력하세요.</label>
        <input id="wordInput" className="wordInput" ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력!</button>
      </form>

      <div>{result}</div>
    </>
  );
};

export default WordRelay;
