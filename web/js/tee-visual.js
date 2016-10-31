var DataBigScreen = function(options) {
        this.datetimeElement = options.datetimeElement;

        var self = this;
        $.get('/getstarttime', function(result) {
            if (result.status == 0) {
                //$('#coefficient').val(result.data.coefficient);


                self.starttime = result.data;
                self.runSystemTime();
            } else {
                alert(result.message)
            }
        })

    }
    //系统时间
DataBigScreen.prototype.runSystemTime = function() {
        var date, years, months, dates, hours, minutes, seconds, dateStr = '',
            timeStr = '';
        var self = this;
        // var daojishi = $('#daojishi').money2({
        //     count: 6,
        //     Separator: ':',
        //     Separatorbit: 2,
        //     yen: false
        // }).data('tee-money2');
        self.showstatus = true;

        function runTime() {
            date = new Date();
            years = date.getFullYear();
            months = date.getMonth() + 1;
            dates = date.getDate();
            hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
            minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
            seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

            dateStr = years + '年' + months + '月' + dates + '日';
            timeStr = hours + ':' + minutes + ':' + seconds;

            //dateElement.html(dateStr);
            self.datetimeElement.html(dateStr + ' ' + timeStr);

            //倒计时开场动画
            if ((new Date().getTime() / 1000) > (new Date(self.starttime).getTime() / 1000)) {
                    self.showstatus = false;
                    $('#daojishi').remove();
                    $('.back-img').css({
                        'top': '0px',
                        'transition': 'top 2s'
                    })
                    $('#can').css({
                        'bottom': '0px',
                        'transition': 'bottom 2s'
                    })
                    setTimeout(function() {
                        $('.panel-left').css({
                            'left': '20px',
                            'transition': 'left 2s'
                        })
                        $('.panel-right').css({
                            'right': '20px',
                            'transition': 'right 2s'
                        })
                        setTimeout(function() {
                            $('.content-body').css({
                                'opacity': 1,
                                'transition': 'opacity 2s ease-in'
                            });
                        }, 2000);
                    }, 2000);
                }

                if (self.showstatus) {
                    //daojishi.setData(hours.toString() + minutes.toString() + seconds.toString());
                    $('#daojishi').html(timeStr)
                }
                setTimeout(runTime, 1000);
            }

            runTime();
        }
