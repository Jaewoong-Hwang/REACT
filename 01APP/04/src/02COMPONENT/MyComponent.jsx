import {useState,useEffect} from "react";


const MyComponent = () => {
  // let count = 0;
  const [count, setCount] = useState(0); //useState라는 hook 을 씀
  const handleclick = async () => {
    //리액트는 디폴트가 비동기 처리라서 그 전의 값이 들어감

    setCount(count + 1);

    // console.log("Button Clicked", count);
  };

//useEffect 는 상태값이 변경됐을 때 사용하는 hook

//최초 1회 실행
useEffect(()=>
    {console.log('init setting');
        
    }, []);
//count state가 변경될 때마다 실행
useEffect(()=>
    {console.log('count state changed', count)

    }, [count]);


  return (
    <div>
      <h1>TITLE</h1>
      <h2>SUB_TITLE</h2>
      <hr />
      <button onClick={handleclick}>BUTTON COUNT : {count}</button>
    </div>
  );
};
export default MyComponent;
