export default function Stydy3() {
  function solution1(
    today: string | number | Date,
    terms: any,
    privacies: string | any[]
  ) {
    var answer = [];
    today = new Date(today);

    for (let i = 0; i < privacies.length; i++) {
      const privacy = privacies[i];
      const [privacyDate, privacyType] = privacy.split(' ');
      for (const term of terms) {
        const [termType, termMonth] = term.split(' ');
        if (termType === privacyType) {
          const date = new Date(privacyDate);
          const month_diff =
            (today.getFullYear() - date.getFullYear()) * 12 +
            (today.getMonth() - date.getMonth());
          const date_diff = today.getDate() - date.getDate();

          if (Number(termMonth) < month_diff) {
            answer.push(i + 1);
          } else if (Number(termMonth) === month_diff) {
            if (date_diff >= 0) {
              answer.push(i + 1);
            }
          }
        }
      }
    }

    return answer;
  }
  function solution2(n: number) {
    for (let i = 1; i < n; i++) {
      if (n % i === 1) {
        return i;
      }
    }
  }

  return (
    <div>
      <div>과제1</div>
      <table>
        <thead>
          <tr>
            <td>today</td>
            <td>terms</td>
            <td>privacies</td>
            <td>result</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"2022.05.19"</td>
            <td>["A 6", "B 12", "C 3"]</td>
            <td>
              ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
            </td>
            <td>
              [
              {solution1(
                '2022.05.19',
                ['A 6', 'B 12', 'C 3'],
                ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
              ).toString()}
              ]
            </td>
          </tr>
          <tr>
            <td>"2020.01.01"</td>
            <td>["Z 3", "D 5"]</td>
            <td>
              ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D",
              "2018.12.28 Z"]
            </td>
            <td>
              [
              {solution1(
                '2020.01.01',
                ['Z 3', 'D 5'],
                [
                  '2019.01.01 D',
                  '2019.11.15 Z',
                  '2019.08.02 D',
                  '2019.07.01 D',
                  '2018.12.28 Z',
                ]
              ).toString()}
              ]
            </td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <hr></hr>
      <div>과제2</div>
      <table>
        <thead>
          <tr>
            <td>n</td>
            <td>result</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10</td>
            <td>{solution2(10)}</td>
          </tr>
          <tr>
            <td>12</td>
            <td>{solution2(12)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
