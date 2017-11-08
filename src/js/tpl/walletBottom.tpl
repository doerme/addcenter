<ul>
{{each data as v i}}
    <li>
        <div class="col1-wrap">
            <span class="col1-top">{{v.content}}</span>
            <span class="col1-bottom">{{v.date}}</span>
        </div>
        <span class="col2">{{v.je}}</span>
        {{if v.state == '已完成'}}
            <span class="col4 done">{{v.state}}</span>
        {{else}}
            <span class="col4 wait">{{v.state}}</span>
        {{/if}}
        
    </li>
{{/each}}
</ul>