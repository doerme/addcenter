{{each data as v i}}
<li>
    <div class="left">
        <p>{{v.content}}</p>
        <p>{{v.date}}</p>
    </div>
    <p class="count"><span>{{v.je}}</span>
        <!-- <span class="pay-state done">已完成</span> -->
    </p>
</li>
{{/each}}