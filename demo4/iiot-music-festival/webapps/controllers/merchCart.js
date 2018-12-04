app.controller("merchCartCtrl", function () {
    var merch1 = new Chart('merch1', {
        type: 'bar',
        data:{
            datasets:[{
                data:[35,45,60],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Beer','Koozies','Openers']
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

    var merch2 = new Chart('merch2', {
        type: 'bar',
        data:{
            datasets:[{
                data:[45,43,55],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Beer','Koozies','Openers']
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

    var merch3 = new Chart('merch3', {
        type: 'bar',
        data:{
            datasets:[{
                data:[45,68,47],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Beer','Koozies','Openers']
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

    var merch4 = new Chart('merch4', {
        type: 'bar',
        data:{
            datasets:[{
                data:[35,40,59],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Beer','Koozies','Openers']
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