/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/
// 以下两个函数用于随机模拟生成测试数据
var me = document.getElementsByClassName("me")[0];
var times = document.getElementById("form-gra-time");
var citys = document.getElementById("city-select");
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = ''
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}
/* 数据 */
var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {
};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity: -1,
  nowGraTime: "day"
}
// 暂时保存城市
var day = [];
// 保存选择的城市的数据，在经过time函数处理天数
var timeData = [];
/* 按城市处理数据 */
function myday(){
    for(var i in aqiSourceData){
        day.push(i);
    }
    var num = pageState.nowSelectCity;
    for(var i=0;i<day.length;i++){
        if(num == i){
            timeData = aqiSourceData[day[i]];
            console.log(timeData);
        }
    }
    renderChart(timeData);
}
/**
 * 渲染图表
 */
function renderChart(data) {
    me.innerHTML = '';
    for(var day in data){
        me.innerHTML 
            += "<div class='days' style='height:"+data[day] +"px;' title="+day+":"+ data[day] +"></div>";
    }
}
/**
 *   按日期处理数据
 *   判断时间，按天算全部输出，按周取七天平均值，按月取30天平均值
 */
function time(){
    var num = [];
    for(var day in timeData){
        num.push(timeData[day]);
    }
    console.log(num);
    var mytime = pageState.nowGraTime;
    console.log(mytime);
    switch(mytime){
        case "day":
            charData = timeData;
            return charData;
        break;
        case "week":
            for(var i=0;i<num.length;i++){
                if(i%7 == 0){
                    
                }
            }
        break;
    }
}
/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange(data) {
  // 确定是否选项发生了变化 
    /*if(times.event.target.value!=pageState.nowGraTime){
        pageState.nowGraTime = event.target.value;
    }*/
    if(data === pageState.nowGraTime){
        return false;
    }
    pageState.nowGraTime = data;
}
/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    times.addEventListener("click",function(e){
        if(e.target && e.target.nodeName === "INPUT"){
            graTimeChange(e.target.value);
        }
    },false)
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    citys.addEventListener("change",function(e){
           citySelectChange(citys.selectedIndex);
    })
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
}
function citySelectChange(data) {
  // 确定是否选项发生了变化 
    if(data === pageState.nowSelectCity){
        return false;
    }
    pageState.nowSelectCity = data;
}

/**
 * select发生变化时的处理函数
 */
/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
}

/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();
