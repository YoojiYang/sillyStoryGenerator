// HTMLの要素を取得
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// 配列の中からランダムな値を取得
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// テキストファイルの設定
// ベースの文章
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

// ランダムで変化する文章の配列
const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

// クリックする度に文章をランダムで変化させる
randomize.addEventListener('click', result);

function result() {

  // 文章をランダムで置換する処理
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  // 文章中の名前を任意の名称に設定する
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  };

  // UKにチェックがある場合、気温と重さの数値を変更する。
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14);
    const temperature =  Math.round((94 - 32) * 5 / 9);

    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  // story要素にランダムな文章を反映させる
  story.textContent = newStory;
  
  // ページ読み込み時に文章が表示されないようにする
  story.style.visibility = 'visible';
}