app.controller("merchTeamCtrl", function () {
    var merchTeam1 = new Chart('merchTeam1', {
        type: 'bar',
        data:{
            datasets:[{
                data:[35,45,60],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Posters','Shirts','Stickers']
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

    var merchTeam2 = new Chart('merchTeam2', {
        type: 'bar',
        data:{
            datasets:[{
                data:[45,43,55],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Posters','Shirts','Stickers']
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

    var merchTeam3 = new Chart('merchTeam3', {
        type: 'bar',
        data:{
            datasets:[{
                data:[45,68,47],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Posters','Shirts','Stickers']
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

    var merchTeam4 = new Chart('merchTeam4', {
        type: 'bar',
        data:{
            datasets:[{
                data:[35,40,59],
                backgroundColor:['mediumaquamarine','rgb(33, 90, 255)','rgb(55,60,75)']
            }],
            labels:['Posters','Shirts','Stickers']
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