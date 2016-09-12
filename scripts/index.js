/**
 * Created by huyansheng on 2016/9/12.
 */


laydate.skin('dahong');
laydate({
    elem: '#calendar',
    event: 'focus',
    fixed: true,
    choose: function(dates){
        var data = [
            {payment_date:2016-09-12,discount_percent:1.207,discount_amount:552.65},
            {payment_date:2016-09-11,discount_percent:1.320,discount_amount:622.35},
            {payment_date:2016-09-10,discount_percent:1.527,discount_amount:782.05},
            {payment_date:2016-09-09,discount_percent:1.637,discount_amount:922.85},
        ];
        var payment_date = document.getElementById('payment_date');
        var discount_percent = document.getElementById('discount_percent');
        var discount_amount = document.getElementById('discount_amount');
        payment_date.innerText = dates;

        discount_amount.innerText = '$'+data[(Math.random()*4).floor()].discount_amount;
        discount_percent.innerText = data[(Math.random()*4).floor()].discount_percent+'%';

    }
});
