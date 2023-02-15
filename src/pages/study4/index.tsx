export default function Stydy4() {
  function solution(n: number, words: string | any[]) {
    var answer = [0, 0];
    var dup = [];

    // 각각의 사람 수 만큼 순서를 만들자
    const gamers = new Map();

    for (let i = 1; i <= n; i++) {
      gamers.set(i + '', []);
    }

    let k = 1;
    for (let j = 0; j < words.length; j++) {
      if (j % n === 0) {
        k = 1;
      }
      gamers.set(k + '', [...gamers.get(k + ''), words[j]]);
      k = k + 1;
    }

    let str = '';
    for (let i = 0; i < words.length / n; i++) {
      for (const [key, value] of gamers.entries()) {
        if (i === 0 && key === '1') {
          str = value[i] + '';
          dup.push(str);
          continue;
        }
        //앞에 나왔던 글자비교
        const temp = value[i] + '';
        if (dup.includes(temp) && value[i] !== undefined) {
          answer[0] = Number(key);
          answer[1] = i + 1;
          return answer;
        }
        //마지막글자와 첫글자 비교
        const last = temp.charAt(0);
        if (str.slice(-1) !== last && value[i] !== undefined) {
          answer[0] = Number(key);
          answer[1] = i + 1;
          return answer;
        }
        str = value[i] + '';
        dup.push(str);
      }
    }

    return answer;
  }

  function solution2(n: number, words: any[]) {
    //n명이 끝말잇기를 words에 들어온 단어 배열로 하나씩 돌아가며 진행
    //1. 만약 나왔던 단어라면 걸린 사람과 순번 리턴(중복)
    //2. 만약 끝말잇기를 제대로 못한 사람과 순번 리턴(틀림)
    //3. 만약 모두 통과시 0,0 리턴

    var answer = [0, 0]; //3번 완료
    let prevStr = words[0];

    for (let i = 1; i < words.length; i++) {
      const newWords = words.slice(0, i).filter((word) => word === words[i]);
      if (newWords.length > 0) {
        console.log('중복 찾았다!');
        answer[0] = (i % n) + 1;
        answer[1] = parseInt(i / n + '') + 1;
        return answer;
      } else {
        console.log(prevStr.slice(-1), words[i].charAt(0), (i % n) + 1);
        if (prevStr.slice(-1) !== words[i].charAt(0)) {
          console.log('틀린점 찾았다!');
          answer[0] = (i % n) + 1;
          answer[1] = parseInt(i / n + '') + 1;
          return answer;
        }
      }
      prevStr = words[i];
    }

    return answer;
  }

  return (
    <div>
      <div>영어 끝말잇기</div>
      <table>
        <thead>
          <tr>
            <td>n</td>
            <td>words</td>
            <td>result</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>
              ["tank", "kick", "know", "wheel", "land", "dream", "mother",
              "robot", "tank"]
            </td>
            <td>
              [
              {solution(3, [
                'tank',
                'kick',
                'know',
                'wheel',
                'land',
                'dream',
                'mother',
                'robot',
                'tank',
              ]).toString()}
              ]
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              ["hello", "observe", "effect", "take", "either", "recognize",
              "encourage", "ensure", "establish", "hang", "gather", "refer",
              "reference", "estimate", "executive"]
            </td>
            <td>
              [
              {solution2(5, [
                'hello',
                'observe',
                'effect',
                'take',
                'either',
                'recognize',
                'encourage',
                'ensure',
                'establish',
                'hang',
                'gather',
                'refer',
                'reference',
                'estimate',
                'executive',
              ]).toString()}
              ]
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>["hello", "one", "even", "never", "now", "world", "draw"]</td>
            <td>
              [
              {solution2(2, [
                'hello',
                'one',
                'even',
                'never',
                'now',
                'world',
                'draw',
              ]).toString()}
              ]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
