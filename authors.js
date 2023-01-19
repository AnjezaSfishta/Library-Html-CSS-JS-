$(()=>{
    $("p#par1").hide()
    $("input#btn1").on('click',()=>{
        $('p#par1').show(500);
    })
})