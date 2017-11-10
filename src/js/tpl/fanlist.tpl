{{each data as v i}}
<li data-mid = "{{v.mid}}">
    <div class="left">
        <img class="avatar" src="{{v.headimgurl}}" />
        <div class="nickname">{{v.nickname}}</div>
        {{if v.is_vip == 1}}
        <img class="fanslevel" src="../img/page/fans_lv1.png" />
        {{else if v.is_vip == 2}}
        <img class="fanslevel" src="../img/page/fans_lv2.png" />
        {{else if v.is_vip == 3}}
        <img class="fanslevel" src="../img/page/fans_lv3.png" />
        {{/if}}
    </div>
    <div class="local">{{v.province}} {{v.city}}</div>
</li>
{{/each}}