// 设置页脚博主会动的心
$(document).ready(function(e){
    $('.copyright').html('©2022 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> 雲陽');
})
// 移除页脚样式
var app = document.getElementById('footer');
app.removeAttribute('id')

/*添加图片top*/
var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://wimg.588ku.com/gif620/20/07/13/c3d2ccdfdbf09fe4472a874be0ba5137.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML += top_up;
