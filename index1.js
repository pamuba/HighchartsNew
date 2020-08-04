//init hc lib, nnes event

document.addEventListener("DOMContentLoaded", ()=>{
    Highcharts.chart('conatiner',{
        chart:{
            type:"line",
            zoomType:"xy"
        },
        
        title:{
            text:'FRUITS CHART'
        },
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
            name:'Fruits Eaten',
            // data:[["Jane", 10], ["Jack",10], ["John",7]]
            data:[{
                name:"Jack",
                y:10,
                color:'red',
                x:2
            },{
                name:"Jim",
                y:20,
                x:4
            }]
        }
        ]
    })
})