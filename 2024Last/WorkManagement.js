const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_submit')[0];
const taskList = document.getElementsByClassName('task_list')[0];

// 追加ボタンを作成
const addTasks = (task) => {

    // 入力したタスクを追加・表示
    const deleteButton = document.createElement('button');
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);

    showItem.innerHTML = task;
    deleteButton.innerHTML = '完了';
    listItem.appendChild(deleteButton);

    // タスクに削除ボタンを付与
    //const deleteButton = document.createElement('button');
    //deleteButton.innerHTML = '☐';
    //listItem.appendChild(deleteButton);

    // 削除ボタンをクリックし、イベントを発動（タスクが削除）
    deleteButton.addEventListener('click', evt => {
        evt.preventDefault();
        deleteTasks(deleteButton);
    });
};

// 削除ボタンにタスクを消す機能を付与
const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
};

// 追加ボタンをクリックし、イベントを発動（タスクが追加）
taskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = '';
});

function startCountdown() {
    // 入力された分数を取得
    const inputMinutes = document.getElementById('countdown-input').value;

    // 入力値が数値かどうかチェック
    if (!isNaN(inputMinutes)) {
        const endTime = Date.now() + inputMinutes * 60 * 1000; // 終了時刻をミリ秒で計算（分を秒、秒をミリ秒に変換）
        const countdownElement = document.getElementById('countdown-display');

        const intervalId = setInterval(() => {
            const currentTime = Date.now();
            const remainingTime = endTime - currentTime;
            const seconds = Math.floor(remainingTime / 1000);
            const minutes = Math.floor(seconds / 60);

            if (minutes >= 0) {
                countdownElement.textContent = `残り ${minutes} 分`;
            } else {
                clearInterval(intervalId);
                countdownElement.textContent = "カウントダウン終了！";
            }
        }, 1000);
    } else {
        alert("数値を入力してください");
    }
}

const jikanwari=[

    {
        "class1": null,
        "name1": null,
        "place1": null,
        "time1": "月曜１限",
        "class2": null,
        "name2": null,
        "place2": null,
        "time2": "月曜２限",
        "class3": "アカデミックスキルズⅡ",
        "name3": "佐藤宏樹",
        "place3": "講Ａ３０１",
        "time3": "月曜３限",
        "class4": "グローバルメディア論",
        "name4": "飯沼瑞穂",
        "place4": "研Ａ３０３",
        "time4": "月曜４限",
        "class5": null,
        "name5": null,
        "place5": null,
        "time5": "月曜５限"
    },

    {
        "class1": "Integrated EnglishⅡ",
        "name1": "大内田優子",
        "place1": "講Ａ３０１",
        "time1": "火曜１限",
        "class2": "スポーツ実技Ⅳ",
        "name2": "後藤肇",
        "place2": "体育館",
        "time2": "火曜２限",
        "class3": "メディア特別講義Ⅱ",
        "name3": "吉岡英樹",
        "place3": "メディアホール",
        "time3": "火曜３限",
        "class4": "インタラクティブアート論",
        "name4": "伊藤彰教",
        "place4": "研Ａ４０３",
        "time4": "火曜４限",
        "class5": "統計データ分析",
        "name5": "小林克正",
        "place5": "講実４０１",
        "time5": "火曜５限"
    },

    {
        "class1": "データ処理と人工知能",
        "name1": "藤澤公也",
        "place1": "研Ａ３０３",
        "time1": "水曜１限",
        "class2": "ゲームデザイン論",
        "name2": "安原広和",
        "place2": "メディアホール",
        "time2": "水曜２限",
        "class3": null,
        "name3": null,
        "place3": null,
        "time3": "水曜３限",
        "class4": null,
        "name4": null,
        "place4": null,
        "time4": "水曜４限",
        "class5": "実践的ＷＥＢ開発",
        "name5": "羽田久一",
        "place5": "講実２０３",
        "time5": "水曜５限"
    },

    {
        "class1": null,
        "name1": null,
        "place1": null,
        "time1": "木曜１限",
        "class2": "欧米社会文化論",
        "name2": "橘由布季",
        "place2": "研Ａ３０３",
        "time2": "木曜２限",
        "class3": "ニュースメディア論",
        "name3": "野島卓",
        "place3": "研Ａ３０３",
        "time3": "木曜３限",
        "class4": "情報法",
        "name4": "中村伊知郎",
        "place4": "研Ａ３０３",
        "time4": "木曜４限",
        "class5": null,
        "name5": null,
        "place5": null,
        "time5": "木曜５限"
    },

    {
        "class1": "リアルタイム3DCGプログラミング",
        "name1": "渡辺大地",
        "place1": "研Ａ３０３",
        "time1": "金曜１限",
        "class2": "リアルタイム3DCGプログラミング",
        "name2": "渡辺大地",
        "place2": "研Ａ３０３",
        "time2": "金曜２限",
        "class3": null,
        "name3": null,
        "place3": null,
        "time3": "金曜３限",
        "class4": null,
        "name4": null,
        "place4": null,
        "time4": "金曜４限",
        "class5": null,
        "name5": null,
        "place5": null,
        "time5": "金曜５限"
    }
];

const today = new Date();
const dayOfWeek = today.getDay(); // 曜日の数値 (0: 日, 1: 月, ...)

const scheduleElement = document.getElementById('schedule'); // ID で要素を取得

// 曜日名を取得する関数
function getDayOfWeekName(dayOfWeek) {
    const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
    return daysOfWeek[dayOfWeek];
}

// 時間割データをHTMLのテーブル形式に変換する関数
function createScheduleTable(data) {
    const table = document.createElement('table');
    const thead = table.createTHead();
    const tbody = table.createTBody();

    // ヘッダー行を作成
    const headerRow = thead.insertRow();
    headerRow.insertCell().textContent = '時間';
    headerRow.insertCell().textContent = '授業名';
    headerRow.insertCell().textContent = '担当者';
    headerRow.insertCell().textContent = '場所';

    // データ行を作成
    for (let i = 1; i <= 5; i++) {
        const row = tbody.insertRow();
        row.insertCell().textContent = `第${i}限　 `;
        row.insertCell().textContent = data[`class${i}`] || '-';
        row.insertCell().textContent = data[`name${i}`] || '-';
        row.insertCell().textContent = data[`place${i}`] || '-';
    }

    return table;
}

// 今日の時間割を表示
const scheduleData = jikanwari[dayOfWeek];
const scheduleTable = createScheduleTable(scheduleData);
scheduleElement.textContent = ''; // 既存の内容をクリア
scheduleElement.appendChild(scheduleTable);

// 曜日名を表示
const dayOfWeekName = getDayOfWeekName(dayOfWeek);
const dayOfWeekElement = document.getElementById('dayOfWeek'); // 曜日名を表示する要素のID
dayOfWeekElement.textContent = `${dayOfWeekName}曜の時間割`;