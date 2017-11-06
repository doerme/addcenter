{{each data as v i}}
<li data-mid = "{{v.mid}}">
    <div class="left">
        <img class="avatar" src="{{v.headimgurl}}" />
        <div class="nickname">{{v.nickname}}</div>
    </div>
    <div class="local">{{v.province}} {{v.city}}</div>
</li>
{{/each}}