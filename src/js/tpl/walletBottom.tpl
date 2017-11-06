<ul>
{{each data as v i}}
    <li>
        <div class="col1-wrap">
            <span class="col1-top">{{v.content}}</span>
            <span class="col1-bottom">{{v.date}}</span>
        </div>
        <span class="col2">{{v.je}}</span>
        {{if v.state == '已完成'}}
            <span class="col4 done">已完成</span>
        {{else}}
            <span class="col4 wait">已完成</span>
        {{/if}}
        
    </li>
{{/each}}
</ul>