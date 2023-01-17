function MainPage() {
  //과제1
  function solution1(message: string) {
    var answer = 0;
    var arr = [...message];
    answer = arr.length * 2;
    return answer;
  }

  //과제2 먼저 생각난 풀이법
  function solution2_1(strlist: string[]) {
    var answer = [];
    for (var i = 0; i < strlist.length; i++) {
      answer[i] = strlist[i].length;
    }
    return answer.toString();
  }

  //과제3 자바스크립트 내장 메서드 map 활용
  function solution2_2(strlist: string[]) {
    return strlist.map((str) => str.length).toString();
  }

  return (
    <div>
      <div>과제1</div>
      <table>
        <thead>
          <tr>
            <td>message</td>
            <td>result</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"happy birthday!" </td>
            <td>{solution1('happy birthday!')}</td>
          </tr>
          <tr>
            <td>"I love you~"</td>
            <td>{solution1('I love you~')}</td>
          </tr>
        </tbody>
      </table>
      <div> </div>

      <hr></hr>
      <div>과제2</div>
      <table>
        <thead>
          <tr>
            <td>strlist</td>
            <td>result</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>'["We", "are", "the", "world!"]'</td>
            <td>[{solution2_1(['We', 'are', 'the', 'world!'])}]</td>
          </tr>
          <tr>
            <td>'["I", "Love", "Programmers."]'</td>
            <td>[{solution2_2(['I', 'Love', 'Programmers.'])}]</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MainPage;
