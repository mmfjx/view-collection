<template>
 <div >
        <svg width="960" height="600" class="miserable"></svg>
 </div>
</template>

<script type="text/javascript">
import * as d3 from 'd3';
import miserables from './miserables.json';
export default {
    // 不要忘记了 name 属性
    name: 'radialForce',
    // 组合其它组件
    extends: {},
    // 组件属性、变量
    props: {

    // 按字母顺序
    },
    // 变量
    data () {
        
        return {
            
        };
    },
    computed: {},
    // 使用其它组件
    components: {},
    // 方法
    watch: {},
    methods: {
        createSvg () {
            let svg = d3.select("svg"),
                width = +svg.attr("width"),
                height = +svg.attr("height");
            let color = d3.scaleOrdinal(d3.schemeCategory10);
            let simulation = d3.forceSimulation()
                .force("link", d3.forceLink().id(function(d) { return d.id; }))
                .force("charge", d3.forceManyBody())
                .force("center", d3.forceCenter(width / 2, height / 2));
            let graph = miserables;
            let link = svg.append("g")
                .attr("class", "links")
                .selectAll("line")
                .data(graph.links)
                .enter().append("line")
                .attr("stroke-width", function(d) { return Math.sqrt(d.value); })
                .attr("stroke-opacity", "0.6")
                .attr("stroke", '#999');

            let node = svg.append("g")
                .attr("class", "nodes")
                .selectAll("circle")
                .data(graph.nodes)
                .enter().append("circle")
                .attr("r", 5)
                .attr("stroke", "#fff")
                .attr("stroke-width", "1.5px")
                .attr("fill", function(d) {
                    return color(d.group); 
                    })
                .call(d3.drag()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended));

            node.append("title")
                .text(function(d) { return d.id; });

            simulation
                .nodes(graph.nodes)
                .on("tick", ticked);

            simulation.force("link")
                .links(graph.links);
            function ticked() {
                link
                    .attr("x1", function(d) { return d.source.x; })
                    .attr("y1", function(d) { return d.source.y; })
                    .attr("x2", function(d) { return d.target.x; })
                    .attr("y2", function(d) { return d.target.y; });

                node
                    .attr("cx", function(d) { return d.x; })
                    .attr("cy", function(d) { return d.y; });
            }
            function dragstarted (d) {
                if (!d3.event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x;
                d.fy = d.y;
            }
            function dragged (d) {
                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }
            function dragended (d) {
                if (!d3.event.active) simulation.alphaTarget(0);
                d.fx = null;
                d.fy = null;
            }
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {
        this.createSvg();
    }
};
</script>

<style scoped>
/* .miserable {
    color : rebeccapurple;
}
.miserable line {
  stroke: #999;
  stroke-opacity: 0.6;
}

.miserable .nodes circle {
  stroke: #fff;
  stroke-width: 1.5px;
} */

</style>
