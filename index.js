//init hc lib, nnes event

document.addEventListener("DOMContentLoaded", ()=>{
    Highcharts.chart('conatiner',{
        chart:{
            type:"areaspline",
            zoomType:"xy"
        },
        credits:{
            // enabled:false
            text:'Custom Credits',
            href:"https://google.com",
            position:{
                align:'left',
                x:20,
            },
            style:{
                fontSize:"15px",
                color:"red"
            }
        },
        tooltip:{
            // formatter(){
            //     return `<strong>X value</strong> - ${this.x} <em>Y value<em> - ${this.y}`
            // },
            formatter(){
                let t =  `<strong>X value:</strong> - ${this.x}`;
                this.points.forEach(function(point){
                    t += `<br>Y value:${point.y}`
                })
                return t;
            },
            animation:false,
            backgroundColor:"#333333",
            borderColor:'red',
            borderRadius:20,
            followPointer:true,
            style:{
                color:"#ffffff"
            },
            shared:true
        },
        title:{
            text:'FRUITS CHART'
        },
        colors:['#1c110a', '#e4d6a7', '#e9b44c', '#9b2915', '#50a2a7'],
        yAxis:{
            title:{
                text:'Fruits Eaten'
            }
        },
        xAxis :{
            categories:['Apples', "Banans", 'Mangoes']
        },
        series:[
        {
            name:'John',
            data:[1,100,3,2, 2,3,1,2,3]
        },
        {
            name:'Jane',
            data:[2,4,8, 150, 80, 50, 10, 5,1]
        },
        {
            name:'Jane',
            data:[2,4,8, 4, 80, 50, 80, 5,1]
        },
        {
            name:'Jane',
            data:[111,4,8, 15, 80, 50, 10, 5,1]
        },
        {
            name:'Jane',
            data:[2,4,130, 15, 80, 50, 10, 5,1]
        }
    ]
    })
})