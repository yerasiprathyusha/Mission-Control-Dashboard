

app.controller("restRoomCtrl", function () {
	
	capacity1 = new Chart('capacity1',{
		type: 'doughnut',
        data: {
            datasets: [{
                data: [97.5,10],
                backgroundColor:['rgb(118, 160, 239)','rgb(21, 78, 183)',],
                
            }],
            labels: [],
        },
        options:{
            cutoutPercentage: 40,
            tooltips: {
                enabled : false,
                callbacks: {
                    label: function(tooltipItem, data) {
                    console.log(data);
                    let label = data.labels[tooltipItem.index];
                    let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    console.log(label);
                    console.log(value);
                    return [label + ' : ' +  value + '%'];
                    }
                }
            },
            legend:{
                display:true,
                position:'right',
			},
		}
	})
	capacity2 = new Chart('capacity2',{
		type: 'doughnut',
        data: {
            datasets: [{
                data: [97.5,35],
                backgroundColor:['rgb(118, 160, 239)','rgb(21, 78, 183)',],
                
            }],
            labels: [],
        },
        options:{
            cutoutPercentage: 40,
            tooltips: {
                enabled : false,
                callbacks: {
                    label: function(tooltipItem, data) {
                    console.log(data);
                    let label = data.labels[tooltipItem.index];
                    let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    console.log(label);
                    console.log(value);
                    return [label + ' : ' +  value + '%'];
                    }
                }
            },
            legend:{
                display:true,
                position:'right',
			},
		}
	})
	capacity3 = new Chart('capacity3',{
		type: 'doughnut',
        data: {
            datasets: [{
                data: [97.5,56],
                backgroundColor:['rgb(118, 160, 239)','rgb(21, 78, 183)',],
                
            }],
            labels: [],
        },
        options:{
            cutoutPercentage: 40,
            tooltips: {
                enabled : false,
                callbacks: {
                    label: function(tooltipItem, data) {
                    console.log(data);
                    let label = data.labels[tooltipItem.index];
                    let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    console.log(label);
                    console.log(value);
                    return [label + ' : ' +  value + '%'];
                    }
                }
            },
            legend:{
                display:true,
                position:'right',
			},
		}
	})
	capacity4 = new Chart('capacity4',{
		type: 'doughnut',
        data: {
            datasets: [{
                data: [97.5,97],
                backgroundColor:['rgb(118, 160, 239)','rgb(21, 78, 183)',],
                
            }],
            labels: [],
        },
        options:{
            cutoutPercentage: 40,
            tooltips: {
                enabled : false,
                callbacks: {
                    label: function(tooltipItem, data) {
                    console.log(data);
                    let label = data.labels[tooltipItem.index];
                    let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    console.log(label);
                    console.log(value);
                    return [label + ' : ' +  value + '%'];
                    }
                }
            },
            legend:{
                display:true,
                position:'right',
			},
		}
	})
	capacity5 = new Chart('capacity5',{
		type: 'doughnut',
        data: {
            datasets: [{
                data: [97.5,38],
                backgroundColor:['rgb(118, 160, 239)','rgb(21, 78, 183)',],
                
            }],
            labels: [],
        },
        options:{
            cutoutPercentage: 40,
            tooltips: {
                enabled : false,
                callbacks: {
                    label: function(tooltipItem, data) {
                    console.log(data);
                    let label = data.labels[tooltipItem.index];
                    let value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    console.log(label);
                    console.log(value);
                    return [label + ' : ' +  value + '%'];
                    }
                }
            },
            legend:{
                display:true,
                position:'right',
			},
		}
    })
});