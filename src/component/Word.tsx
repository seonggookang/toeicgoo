import { useState } from "react";

interface IProps {
  word: IWord;
}

export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

const Word = ({ word: w }: IProps) => {
  const [word, setWord] = useState(w);
  console.log("word>> ", word);
  console.log("w>> ", w);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const toggleDone = () => {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      console.log("res>>", res);
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const del = () => {
    if (window.confirm("정말 삭제?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ ...word, id: 0 });
        }
      });
    }
  };

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? "숨기기" : "뜻 보기"}</button>
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default Word;
