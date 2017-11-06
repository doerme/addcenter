<ul>
{{each data as v i}}
    <li>
        <span class="col1">{{v.content}}</span>
        <span class="col2">{{v.je}}</span>
        <a href="{{v.tx_url}}" class="col3">提现</a>
    </li>
{{/each}}    
</ul>