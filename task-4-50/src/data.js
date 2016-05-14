// 吧数据存储到sessen里，然后再使用JSON.parse转换成对象。
if(!window.localStorage.yiiuWenjuanData){
    var data = [];
    function add(obj){
        data.push({
            "title":obj.title,
            "timeStart":obj.timeStart,
            "timeEnd":obj.timeEnd,
            "state":obj.state
        })
    }
    add({
        title:"你好",
        timeStart:"2015-1-1",
        timeEnd:"2015-2-2",
        state:true
    })
    add({
        title:"你好1",
        timeStart:"2015-1-1",
        timeEnd:"2015-2-2",
        state:false
    })
    // 将数据以JSON字符串的方式添加到sessen里
    localStorage.setItem('yiiuWenjuanData', JSON.stringify(data));
}
// 再吧sessen里的数据转换成对象。
let a = JSON.parse(localStorage.getItem('yiiuWenjuanData'));
export default{
    out(){
        return{
            //读取数据
            read:a,
            // 添加数据
            add(){
                data.push({
                    "title":obj.title,
                    "timeStart":obj.timeStart,
                    "timeEnd":obj.timeEnd,
                    "state":obj.state
                })
            }
        }
    }
}