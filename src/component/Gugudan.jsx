import React, { useRef, useState } from "react";

const Gugudan = () => {

  // this.state를 사용하지 않은 이유는 Hook을 사용해보기 위해 useState를 사용했습니다
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState();
  const [result, setResult] = useState();
  const [count, setCount] = useState(0);
  const [WinCount, setWinCount] = useState(0);
  const [LastAnswer, setLastAnswer] = useState();
  // useRef는 React Hook 이라고 한다 화면이 리랜더링될때 바뀌는거 같다
  const inputElement = useRef(null);
  
  const onSubmitForm = (e) => {

    console.log(e);
    // preventDefault는 onClick Submit 과 같이 작동하는데
    // 전체 페이지 새로 고침을 방지하고 고유한 사용자 정의 코드로 제출을 처리할 수 있는 기능
    e.preventDefault();
    setCount(count + 1);
    if (parseInt(value) === first * second) {
        setResult('정답');
        setLastAnswer(value);
        setWinCount(WinCount + 1);
    } else {
        setResult('땡');
        setLastAnswer(first * second);
    }        
    setFirst(Math.ceil(Math.random() * 9));
    setSecond(Math.ceil(Math.random() * 9));
    setValue('');
    // focus를 사용하면 커서가 다시 입력창으로 간다
    inputElement.current.focus();

  };

  return (
    <div>
      <div>
        {first} X {second} ={" "}
      </div>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputElement}
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>입력!</button>
      </form>
      <div id="result">[{result}] [{result === '땡' ? '정답은?' : ''} {LastAnswer}]</div><div>[정답률 : {Math.ceil(WinCount/count*100)}%][총게임수:{count}]</div>
    </div>
  );
};

export default Gugudan;
