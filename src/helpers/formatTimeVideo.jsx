const formatTimeVideo = str => {
  if (!str.startsWith('PT')) {
    return null;
  }

  const time = str.substring(2);
  let duration = '';

  for (let i = 0; i < time.length; i++) {
    if (!Number(time[i])) {
      // 0이나 텍스트인 경우
      duration += ':';
      // 0 보다 크고 앞, 뒤가 텍스트인 경우
    } else if (i > 0 && !Number(time[i - 1]) && !Number(time[i + 1])) {
      duration += '0' + time[i];
    } else {
			// 원래 자신의 값
      duration += time[i];
    }
  }

  if (
    time.indexOf('H') !== -1 && // H가 있고
    time.indexOf('M') === -1 && // M이 없고
    time.endsWith('S') // 마지막이 "S"일 때
  ) {
    const [hour, min] = duration.slice(0, -1).split(':');
    return `${hour}:00:${min}`;
  } else if (time.endsWith('M')) {
    return duration + '00';
  } else if (duration.endsWith('::')) {
    return duration.slice(0, -2);
  } else {
    const result = duration.replace('::', ':');
    return result.slice(0, -1);
  }
};

export default formatTimeVideo;

/** 영상 길이 계산하는 format *
 * [PT6H10M13S] 라는 데이터가 출력되면 [6:01:13]으로 읽혀야하고,
 * [PT25M40S] 라는 데이터가 출려되면 25:04라는 시간으로 읽혀야 합니다.
 *
 * [PT6H10M13S] 를 예시로 위의 코드를 분석해보겠습니다.
 * 1. PT라는 영어 삭제합니다. (2 ~ 4) => [6H10M13S]
 * 2. if (!Number(time[i])) {} (8) => 다음 if문에서 6이란 숫자가 들어갑니다.
 *    (9) => 0이나 텍스트인 경우 ":"로 출력하지만 6은 숫자이니 다음 조건문을 검사합니다.
 *           여기서 걸리는건 H,M,S가 되겠습니다. [H,M,S = :]
 *           그리고 다음 1이 다음 조건을 검사하고나면 0은 여기서 걸려 총 [H,M,S,0이 :]으로 표시됩니다.
 *    (10) => 0보다 크고 앞과 뒤가 0아니면 텍스트면 1을 출력하도록 합니다.
 *            여기서 1이 0보다 크고 뒤에가 0이기 때문에 걸리게 됩니다.
 *            그래서 1 앞에 0을 붙이고 넘어갑니다. [6:01]
 *    (12) => 위의 검사를 다 통과하면 숫자들만 그대로 출력됩니다.[6,1,13]
 *
 *    그래서 for문인 (7 ~ 15)을 돌면 [6H10M13S]은 [6:01::13:]으로 표시되어 있습니다.
 *
 * 3. for문 다음인 if문에서 제대로 표시하기 위한 내용을 작성합니다.
 *    (17~20) => H가 있고 M없고 S가 있으면 [시:00:분]으로 표시합니다.
 *    (24) => M이 있으면 00으로 표시합니다.
 *    (26) => "::" 이렇게 클론이 2개면 삭제합니다.
 *    (29) => ":: , :" 이렇게 클론 2개면 하나만 표시하도록 합니다.
 */