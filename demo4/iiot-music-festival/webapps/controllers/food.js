app.controller("foodCtrl", function () {
    var food1 = new Chart('food1', {
        type: 'bar',
        data:{
            datasets:[{
                data:[35,45,60],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Pretzels','Nachos','Popcorn']
        },
        options: {
            legend:{
                display:false
            },
            scales:{
                xAxes:[{
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                    gridLines: {
                        display:false,
                        drawBorder: false,
                    }
                }],
                yAxes:[{
                    display:false,
                    gridLines:{
                        display:false
                    }
                }]
            }
        }
    });

    var food2 = new Chart('food2', {
        type: 'bar',
        data:{
            datasets:[{
                data:[45,43,55],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Hot Dogs','Candy','Ice Cream']
        },
        options: {
            legend:{
                display:false
            },
            scales:{
                xAxes:[{
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                    gridLines: {
                        display:false,
                        drawBorder: false,
                    }
                }],
                yAxes:[{
                    display:false,
                    gridLines:{
                        display:false
                    }
                }]
            }
        }
    });

    var food3 = new Chart('food3', {
        type: 'bar',
        data:{
            datasets:[{
                data:[45,68,47],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Pretzels','Nachos','Popcorn']
        },
        options: {
            legend:{
                display:false
            },
            scales:{
                xAxes:[{
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                    gridLines: {
                        display:false,
                        drawBorder: false,
                    }
                }],
                yAxes:[{
                    display:false,
                    gridLines:{
                        display:false
                    }
                }]
            }
        }
    });

    var food4 = new Chart('food4', {
        type: 'bar',
        data:{
            datasets:[{
                data:[35,40,59],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Hot Dogs','Candy','Ice Cream']
        },
        options: {
            legend:{
                display:false
            },
            scales:{
                xAxes:[{
                    barPercentage: 0.5,
                    categoryPercentage: 0.5,
                    gridLines: {
                        display:false,
                        drawBorder: false,
                    }
                }],
                yAxes:[{
                    display:false,
                    gridLines:{
                        display:false
                    }
                }]
            }
        }
    });
});