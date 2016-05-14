// 储存的是一个数组
// state表示它的状态，
// on：表示发布中 end：表示结束  rel：表示未发布
// title是问卷的标题
// timeStart是问卷的起始时间
// timeEnd是问卷的结束时间
// sub表示题目

// 吧数据存储到sessen里，然后再使用JSON.parse转换成对象。
if(!window.localStorage.yiiuWenjuanData){
    var data = [];
    function add(obj){
        data.push({
            "title":obj.title,
            "timeStart":obj.timeStart,
            "timeEnd":obj.timeEnd,
            "state":obj.state,
            "sub":obj.sub
        })
    }
    add({
        title:"你好",
        timeStart:"2015-1-1",
        timeEnd:"2015-2-2",
        state:"on",
        sub:[
            {
                title: "什么鬼东西",
                option: [
                    "test"
                ],
            },
        ]
    })
    add({
        title:"你好1",
        timeStart:"2015-1-1",
        timeEnd:"2015-2-2",
        state:"end"
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