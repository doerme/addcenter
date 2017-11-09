{{each data as v i}}
<li data-time="{{v.created_at}}" data-msg="{{v.content}}">
    <div class="msg-title 
    {{if v.type == '会员消息'}}
    member
    {{else if v.type == '系统消息'}}
    sys
    {{else}}
    pay
    {{/if}}
    ">{{v.type}}</div>
    <div class="msg-detail">{{v.content}}</div>
    <div class="msg-bottom">
        <span class="mb-time">{{v.created_at}}</span>
        <span class="mb-detail">查看详情</span>
    </div>
</li>
{{/each}}