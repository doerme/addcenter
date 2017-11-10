{{each data as v i}}
<li data-id="{{v.id}}">
    <div class="left">
        <p>{{v.content}}</p>
        <p>{{v.date}}</p>
    </div>
    <p class="count">
        <span>{{v.je}}</span>
        {{if v.state == '已完成'}}
        <span class="pay-state done">支付成功</span>
        {{else if v.state == '等待中'}}
        <span class="pay-state ing">等待中</span>
        {{else if v.state == '红包生成中'}}
        <span class="pay-state ing">红包生成中</span>
        {{else}}
        <a href="{{v.tx_url}}" class="pay-state tixian">提现</a>
        {{/if}}
    </p>
</li>
{{/each}}