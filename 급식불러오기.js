<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    body{
    background-color: beige; 
}
    </style>
</head>
<body>
    <button id="beforeDay" onclick="beforeDay()">이전날</button>
    <button id="nextDay" onclick="nextDay()">다음날</button>
    <img src="/static/media/night.6f60e7b5.svg" alt="img" class="ImageIcon" style="width: 38px; height: 30px; margin: 0px 0px 5px;">
    <p id="menuPan1"></p>
    <img src="/static/media/afternoon.9f5bc292.svg" alt="img" class="ImageIcon" style="width: 38px; height: 30px; margin: 0px 0px 5px;">
    <p id="menuPan2"></p>
    <img src="/static/media/night.6f60e7b5.svg" alt="img" class="ImageIcon" style="width: 38px; height: 30px; margin: 0px 0px 5px;">
    <p id="menuPan3"></p>
    <script>

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
            mealDay = `${year}` + `0${month}` + `${StringDate}`;
            console.log(mealDay);
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
       
        async function getMeal(){
            const response = await fetch(
            `https://open.neis.go.kr/hub/mealServiceDietInfo?Type=json&ATPT_OFCDC_SC_CODE=D10&SD_SCHUL_CODE=7240454&MLSV_YMD='${mealDay}'`
            )
            console.log(response);
            return await response.json();
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
    </script>
</body>
</html>
