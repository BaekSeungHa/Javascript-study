const today = new Date(); 
let mealDay = 0;
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜 

function beforeDay() { //이전날 함수
    let StringDate = 0;
    if(date > 1) {
        date -= 1; //날짜 1식 마이너스
        StringDate = date < 10 ? `0${date}` : date;
    } else {
        month -= 1; 
        date = 31;  
        date -= 1;
        StringDate = date < 10 ? `0${date}` : date;
    }
    mealDay = `${year}` + `0${month}` + `${StringDate}`; //meaday 는 급식 불러올 날짜
    console.log(mealDay); //console.log(불러올 날짜)
    printMeal();
}

function nextDay() { //다음날 함수
    let StringDate = 0;
    if(date < 31) {
        date += 1; //31보다 작으면 날짜 1식 추가
        StringDate = date < 10 ? `0${date}` : date;
    } else {
        month += 1;
        date = 0;
        date += 1;
        StringDate = date < 10 ? `0${date}` : date;
    }
    mealDay = `${year}` + `0${month}` + `${StringDate}`;
    console.log(mealDay);
    printMeal();
}

try{
     meal = data?.mealServiceDietInfo[1]?.row;
    }catch(e){
        meal = [];
    }

async function getMeal(){
    const response = await fetch(
    `https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240454&MLSV_YMD='${mealDay}'`
    )
    console.log(response); //오늘의 급식 정보 
    return await response.json(); //json 형태로 바꾸기
}

async function printMeal(){
    const data = await getMeal();
    console.log(data);
    const schoolMeal = data.mealServiceDietInfo[1].row;
    console.log(schoolMeal);
   
    const breakfast = schoolMeal[0].DDISH_NM;
    document.getElementById("menuPan1").innerHTML = `아침<br>${breakfast}`;
    const lunch = schoolMeal[1].DDISH_NM;
    document.getElementById("menuPan2").innerHTML = `점심<br>${lunch}`;
    const dinner = schoolMeal[2].DDISH_NM;
    document.getElementById("menuPan3").innerHTML = `저녁<br>${dinner}`;
    console.log(breakfast,lunch);
  
}
printMeal();