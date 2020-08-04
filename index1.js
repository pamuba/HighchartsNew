//init hc lib, nnes event

document.addEventListener("DOMContentLoaded", ()=>{
    Highcharts.chart('conatiner',{
        chart:{
            type:"areaspline",
            zoomType:"xy"
        },
        
        title:{
            text:'FRUITS CHART'
        },
        yAxis:{
            // alternateGridColor:'#b7cff7',
            title:{
                text:'Fruits Eaten'
            }
        },
        xAxis :{
            alternateGridColor:'#b7cff7',
            categories:['Apples', "Banans", 'Mangoes']
        },
        series:[
            {
                name:'Fruits Eaten',
                negativeColor:'red',
                data:[1,2,3,4,10,-20,2,50,100,200,2,40,30,100,1]
            }
        ]
    })
})