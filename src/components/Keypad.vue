<template>
        <div id="phone">
          <div id="wrapper">
            <div id="dialbox" ref="dialbox" v-cloak>{{dialed}}</div>            
            <div id="keypad">
              <a class="key" :data-num="1"  @click="dial" v-bind:class="{'disabled': keypad}">1</a>
              <a class="key" :data-num="2" :data-letters="'abc'" ref="btn" @click="dial" v-bind:class="{'disabled': keypad}">2<span>abc</span></a>
              <a class="key" :data-num="3" :data-letters ="'def'"  ref="btn"  @click="dial" v-bind:class="{'disabled': keypad}">3<span>def</span></a>
              <div class="clear"></div>
              <a class="key" :data-num="4" :data-letters ="'ghi'"  ref="btn"  @click="dial" v-bind:class="{'disabled': keypad}">4<span>ghi</span></a>
              <a class="key" :data-num="5" :data-letters ="'jkl'"  ref="btn"  @click="dial" v-bind:class="{'disabled': keypad}">5<span>jkl</span></a>
              <a class="key" :data-num="6" :data-letters ="'mno'"  ref="btn"  @click="dial" v-bind:class="{'disabled': keypad}">6<span>mno</span></a>
              <div class="clear"></div>
              <a class="key" :data-num="7" :data-letters ="'pqrs'"  ref="btn"  @click="dial" v-bind:class="{'disabled': keypad}">7<span>pqrs</span></a>
              <a class="key" :data-num="8" :data-letters ="'tuv'"  ref="btn"  @click="dial" v-bind:class="{'disabled': keypad}">8<span>tuv</span></a>
              <a class="key" :data-num="9" :data-letters ="'wxyz'"  ref="btn"  @click="dial" v-bind:class="{'disabled': keypad}">9<span>wxyz</span></a>
              <div class="clear"></div>
              <div class="key special disabled" rel="*"  v-bind:class="{'disabled': keypad}">*</div>
              <a class="key" :data-num="0" @click="dial" v-bind:class="{'disabled': keypad}">0<span>oper</span></a>
              <div class="key special disabled" rel="#"  v-bind:class="{'disabled': keypad}"> #</div>
              <div class="clear" ></div>
              <div class="key nb disabled"></div>
              <div class="key nb disabled"  rel="Make Call" ref="makecall"></div>
              <div class="key nb disabled"></div>
              <div class="clear"></div>
            </div>
          </div>
        </div>
</template>

<script>
export default { 
  name: "Keypad",
  props :{
    keypad: Boolean,
    dialed: String,
    ele: Object,
  },
  methods:{
    dial(){
      this.$emit('dialNumber', window.event);
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
