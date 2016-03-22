/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var tr = document.getElementsByTagName("tr");
var bnt = document.getElementById("add-btn");
var table = document.getElementById("aqi-table");
var del = document.getElementsByClassName("del");

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
window.onload = function(){
}
function addAqiData() {
    var city = document.getElementById("aqi-city-input").value;
    var num = document.getElementById("aqi-value-input").value;
    if(!/^[\u4e00-\u9fa5]+$/.test(city)){
        alert("请输入正确的城市名字！");
        return;
    }
    if(/[^0-9]+/.test(num)){
        alert("请输入正确的空气质量指数！");
        return;
    }
    if(city in aqiData){
        alert("重复的城市");
        return;
    }
    aqiData[city]=num;
    return city;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById("aqi-table");
    table.innerHTML ="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        table.innerHTML
            +=  "<tr><td>"+city+"：</td><td>空气质量为"+ aqiData[city] +"。</td><td><button class=del id="+ city +" >删除</button></td></tr>";
    }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}
/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city){
  // do sth.
    delete aqiData[city];
    console.log(aqiData)
    renderAqiList();
}

function init() {
  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    
    bnt.addEventListener("click",function(){
        addBtnHandle();
    },false);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数·
  // 本想用for循环吧所有的button全部加上时间，然后发现并不能行得通，然后发现了时间委托这么一个神奇的东东
    table.addEventListener("click",function(e){
        if(e.target || e.target.nodeName == "button" ){
            var id = e.target.id;
            delBtnHandle(id);
        }
    })
}
init();
