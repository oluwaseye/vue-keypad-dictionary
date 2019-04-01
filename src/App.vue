<template>
  <div id="app">
      <div class="info">
        <h4>Enter (Number) Length and Press the Enter Key</h4>
      </div>
    <Keypad :keypad="keypad" :dialed="dialed" @dialNumber="combinations($event)" @addMessage="addMessage($event)"/>
    <Result :resultsFound="resultsFound" :dialedletters="dialedletters" :viewData="viewData" />
    <Log />
  </div>
</template>

<script>
import Keypad from './components/Keypad.vue'
import Result from './components/Result.vue'
import Log from './components/Log.vue'
import axios from 'axios'
export default {
  name: "app",
  components: {
    Keypad,
    Result,
    Log,
    axios
  },
  props: ['keypad_numbers'],
     data: function(){
      return{
            txtInput: '',
            dictionary: [],
            dialed: '',
            keypad: true,
            dialedletters: '',
            viewData: [],
            resultsFound: ''
      }
  },
   mounted: function() {
     
      axios.get('../data/names.json').then((response) => {
          this.db = response.data
      })
    },
  methods:{
    addMessage(e){
     this.txtInput = e.target.value;
      this.keypad = false
    },
    getAllPermutations: function(digits) {
      if (digits.length === 0) return [];
      var map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
      };
        var combinations = [''];
        
        // for as many times as there are digits (eg. '3721' => 4 times)
        for (var i = 0; i < digits.length; i++) {
            var digit = digits[i];
            var letters = map[digit];
            var tempArray = [];
            // skip if invalid digit
            if (letters === undefined) continue;
            // for as many times as there are letters (eg. 'abc' => 3 times)
            for (var j = 0; j < letters.length; j++) {
                var letterToAdd = letters[j];
                // for as many times as there are existing combinations
                for (var k = 0; k < combinations.length; k++) {
                    var combination = combinations[k];
                    tempArray.push(combination + letterToAdd);
                }
            }
            combinations = tempArray;
        }
        return combinations;
    },
    search: function(s){
      var arrival = s.toLowerCase();
      var match = (!arrival.length ? '' :
        this.db.filter(function (place) {
          // look for the entry with a matching `code` value
         return (place.word.name.toLowerCase() === arrival);
        }).map(function (place) {
          // get titles of matches
         return place.word.name;
        }));
        if(match !== undefined && match.length !== 0){
          return match;
        }
        
    },
   
    combinations: function (e) {
      this.dialed += e.currentTarget.getAttribute('data-num');
      this.dialedletters += e.currentTarget.getAttribute('data-letters');

       var perm = this.getAllPermutations(this.dialed);
  
      if (this.dialed.length === Number(this.txtInput)) {
        this.keypad = true;
         
        perm.forEach(string => {
          if (this.search(string) && this.search(string).length) {
            this.viewData.push(this.search(string));
           
          }
        });
        
       this.resultsFound = this.viewData.length;
        
       }
    }
  }
}
</script>


