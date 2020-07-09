var mySpace = function() {
    var search_lable = document.querySelector('#search_lable');
    search_lable.addEventListener('click', function() {
            search_lable.value = '';
        })
        // 分类栏的动画
    var classify_li = document.getElementsByClassName('classify_li');
    for (var i = 0; i < classify_li.length; i++) {
        classify_li[i].onmousemove = function() {

            for (var i = 0; i < classify_li.length; i++) {
                var li_ems = classify_li[i].querySelector('em');
                // console.log(li_ems);
                li_ems.style.background = '';
            }
            var li_em = this.querySelector('em')
                // console.log(this);
            li_em.style.background = '#9B0909'
        }
    };
    // 轮播图
    var items = document.getElementsByClassName('items');
    var up = document.getElementById('up');
    var down = document.getElementById('down');
    var index = 0;
    var point = document.getElementsByClassName('point');
    var player_con = document.getElementsByClassName('player-con');
    // var uls = document.querySelector('items_ul');
    console.log(player_con);
    // console.log(items);






    // 显示图片
    var goIndex = function() {
            for (var i = 0; i < items.length; i++) {
                items[i].className = 'items';
                point[i].className = 'point'
            }
            items[index].className = 'items active';
            point[index].className = 'point active';
        }
        // 按钮下一张图片
    down.addEventListener('click', function() {
        index < items.length - 1 ? index++ : index = 0;
        goIndex();
    });
    // 按钮上一张图片
    up.addEventListener('click', function() {
        index > 0 ? index-- : index = items.length - 1;
        goIndex();
    });
    // 按钮的切换图片
    for (var i = 0; i < point.length; i++) {
        point[i].addEventListener('click', function() {
            var pointIndex = this.getAttribute('data-index');
            // console.log(pointIndex);
            index = pointIndex;
            goIndex();
        })
    };

    var time = setInterval(function() {
        for (var i = 0; i < items.length; i++) {
            items[i].className = 'items';
            point[i].className = 'point'
        }
        index < items.length - 1 ? index++ : index = 0;

        items[index].className = 'items active';
        point[index].className = 'point active';

    }, 2000);
    var time3;
    for (i = 0; i < items.length; i++) {
        items[i].addEventListener('mousemove', function() {
            clearInterval(time);
            // console.log(time);
            // console.log(time3);
            clearInterval(time3);



        });
        items[i].addEventListener('mouseout', function() {
            clearInterval(time1);
            var time1 = setInterval(function() {
                for (var i = 0; i < items.length; i++) {
                    items[i].className = 'items';
                    point[i].className = 'point'
                }
                index < items.length - 1 ? index++ : index = 0;

                items[index].className = 'items active';
                point[index].className = 'point active';

            }, 2000);
            time3 = time1;

        });
    }
}



mySpace();