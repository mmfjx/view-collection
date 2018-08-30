<template>
 <div class="contaier" id="canvas">

 </div>
</template>

<script type="text/javascript">
import BpmnModeler from 'bpmn-js/lib/Modeler';
export default {
    // 不要忘记了 name 属性
    name: 'bpmn',
    data () {

const XML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn2:process id="Process_1" isExecutable="false">
    <bpmn2:startEvent id="StartEvent_1"/>
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>`;
        return {
            xml: XML
        };

    },
    computed: {},
    // 使用其它组件
    components: {},
    // 方法
    watch: {},
    methods: {
        init () {
            var viewer = new BpmnModeler({
                container: '#canvas'
            });

            viewer.importXML(this.xml, function(err) {
            if (!err) {
                // console.log('success!');
                viewer.get('canvas').zoom('fit-viewport');
            } else {
                // console.log('something went wrong:', err);
            }
            });
        }
    },
    // 生命周期函数
    beforeCreate () {},
    mounted () {
        this.init();
    }
};
</script>

<style scoped>
@import url('./vendor/bpmn-js/assets/diagram-js.css');
@import url('./vendor/bpmn-js/assets/bpmn-font/css/bpmn-embedded.css');
.contaier {
    width: 100%;
    height: 100%;
}

</style>
