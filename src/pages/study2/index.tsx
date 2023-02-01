function Stydy2() {
  function solution(id_list: Array<String>, report: Array<String>, k: number) {
    var answer = [];
    const map = new Map();
    const suspendedId = [];

    //map에 key로 id 셋팅
    for (const id of id_list) {
      map.set(id, []);
    }

    //유저가 신고한 ID의 중복제거 및 추출, 정지된id 추가
    for (const report_item of report) {
      const arr = report_item.split(' ');
      map.set(arr[0], [...map.get(arr[0]), arr[1]]);
      suspendedId.push(arr[1]);
    }

    //정지된id 카운팅
    let result: { [key: string]: number } = {};
    for (const id of suspendedId) {
      result[id] = (result[id] || 0) + 1;
    }

    //카운팅된 정지된id 중 K보다 작은 경우 제외
    for (const id in result) {
      if (result[id] < k) {
        for (const [key, value] of map.entries()) {
          map.set(
            key,
            value.filter((val: string) => val !== id)
          );
        }
      }
    }

    //결과리턴
    for (const [key, value] of map.entries()) {
      answer.push(value.length);
    }

    return answer;
  }

  return (
    <div>
      <div>과제</div>
      <table>
        <thead>
          <tr>
            <td>id_list</td>
            <td>report</td>
            <td>k</td>
            <td>result</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>["muzi", "frodo", "apeach", "neo"]</td>
            <td>
              ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
            </td>
            <td>2</td>
            <td>
              [
              {solution(
                ['muzi', 'frodo', 'apeach', 'neo'],
                [
                  'muzi frodo',
                  'apeach frodo',
                  'frodo neo',
                  'muzi neo',
                  'apeach muzi',
                ],
                2
              )}
              ]
            </td>
          </tr>
          <tr>
            <td>["con", "ryan"]</td>
            <td>["ryan con", "ryan con", "ryan con", "ryan con"]</td>
            <td>3</td>
            <td>
              [
              {solution(
                ['con', 'ryan'],
                ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
                3
              )}
              ]
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Stydy2;
