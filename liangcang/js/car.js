var bool=false;
if(localStorage.getItem('car')){
    if(JSON.parse(localStorage.getItem('car')).length){
        bool=true
    }else{
        bool=false
    }
}else{
    bool=false
}
if(bool){
    var listarr=JSON.parse(localStorage.getItem('car'))
    $.ajax({
        url: './js/data.json',
        type: 'get',
        cache: false,
        dataType: 'json',
        success(json){
            console.log(json)
            $.each(listarr,function(a,b){
                console.log(listarr)
                $('.car99').append(`
                <div class="car">
                <div><img src="${json[b-1].img}" alt=""></div>
                <p>${json[b-1].title}</p>
                <span>${json[b-1].price}</span>
            </div>
    `)    
            })
        }
    })
}else{
    $('.car99').append(`
    <a href="#">你的购物车没有商品...</a>
    `)
}