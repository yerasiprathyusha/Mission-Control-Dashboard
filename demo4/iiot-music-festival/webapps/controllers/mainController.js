app.controller("mainController",function ($scope, $timeout, $location,) {
    
    Interval = 10000;

	temperature_forecast1 = new Chart('temperature_forecast',{
        type: 'line',
        data: {
            lineColor:"blue",
            labels:["17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30"],
            datasets: [
            {
                label: "crowd",
				fill:false,
				lineTension:0,
                backgroundColor : "rgba(102, 140, 255,0.6)",
                data: [79,77,75,73,69,65,69,64,60,59],
				pointRadius : 0,
				borderWidth:2,
                borderColor: "rgb(118, 160, 239)",
            },
        ]},
        options :{ 
            legend: {
                display: false,
                position: "top",
                labels: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontSize: 12
                }
            },
            scales:{
                xAxes:[{
					type:'time',
					ticks:{
						fontColor : 'black',
						fontSize : 10,
						backdropColor : 'black'
					},
                    time:{
                        parser: "HH:mm",
                        unit:"hour",
                        /* unitStepSize:0.5, */ 
                        displayFormats:{
                            'minute': 'h:mm',
                            'hour': 'HH:mm', 
                        }
                    },
                    gridLines:{
                        color:"grey",
						lineWidth:1,
						zeroLineColor : 'black'
                        /* drawOnChartArea: false */
                    }
                }],
                yAxes: [{
					type: 'linear',
					ticks:{
						fontColor : 'black',
						fontSize : 10,
						backdropColor : 'black'
					},
					scaleLabel: {
						display: true,
						labelString: 'Fahrenheit',
						fontColor : 'black',
						fontSize : 10
					},
					gridLines:{
						drawTicks : true,
						drawOnChartArea : false,
						lineWidth : 1,
						color : 'black'
					}
                }]
            }}
	}) 
	
	wind_status = new Chart('wind_status',{
		type: 'doughnut',
        data: {
            datasets: [{
                data: [97.5,4.5],
                backgroundColor:['rgb(118, 160, 239)','rgb(21, 78, 183)',],
                
            }],
            labels: [],
        },
        options:{
            cutoutPercentage: 75,
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
    UV_index = new Chart('UV_index',{
		type: 'doughnut',
        data: {
            datasets: [{
                data: [10,96],
                backgroundColor:['rgb(21, 78, 183)','rgb(118, 160, 239)'],
                
            }],
            labels: [],
        },
        options:{
			rotation: 1 * Math.PI,
        	circumference: 1 * Math.PI,
            cutoutPercentage: 85,
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


    $scope.current_time = moment().format('HH:mm');
    
    let minTemp = 37.5, maxTemp = 39, range = 1.5, change = 0.1;
	$scope.tempF = parseFloat((minTemp + Math.random() * range).toFixed(1));
    $scope.tempC = parseFloat(((($scope.tempF - 32) * 5)/9).toFixed(2));
    
    setInterval(function(){
		$scope.$apply(function() {
			if(Math.random() >= 0.5 && $scope.tempF < maxTemp) {
				$scope.tempF = parseFloat(($scope.tempF + change).toFixed(1));
			} else if($scope.tempF > minTemp){
				$scope.tempF = parseFloat(($scope.tempF - change).toFixed(1));
			}

			$scope.tempC = parseFloat(((($scope.tempF - 32) * 5)/9).toFixed(2));
		});
	}, 4000);
    
    $scope.viewsToLoad = [' ','merchCarts','food','merchTeam','paramedics','security'];
    
	$scope.loadScreens = function(view){
        
		if(view == ' '){
            $location.path('/');
        }
		if(view == 'merchCarts'){
            $location.path('/merchCarts');
        }
        if(view == 'food'){
            $location.path('/food');
        }
        if(view == 'merchTeam'){
            $location.path('/merchTeam');
        }
        if(view == 'paramedics'){
            $location.path('/paramedics');
        }
        if(view == 'security'){
            $scope.init();
            $location.path('/security');
        }
	}

   
    $scope.init = function(){
        $timeout($scope.loadScreens,0 * Interval,true,$scope.viewsToLoad[0]);
        $timeout($scope.loadScreens,1 * Interval,true,$scope.viewsToLoad[1]);
        $timeout($scope.loadScreens,2 * Interval,true,$scope.viewsToLoad[2]);
        $timeout($scope.loadScreens,3 * Interval,true,$scope.viewsToLoad[3]);
        $timeout($scope.loadScreens,4 * Interval,true,$scope.viewsToLoad[4]);
        $timeout($scope.loadScreens,5 * Interval,true,$scope.viewsToLoad[5]);
    } 
});
