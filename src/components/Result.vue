<template>
    <div id="words"  ref="dialedletters" :data-combined-letters="dialedletters">
      <div v-if="resultsFound > 0" class="results-found" v-cloak><h3>{{resultsFound}} names found...</h3></div>
        <div v-else-if="resultsFound === 0 " class="results-found" v-cloak><h3>No names results found...</h3></div>
          <div class="data">
            <div class="word" v-for="data, index in viewData" :key="index" v-cloak>
               {{ data[0] }}
            </div>
          </div>
          </div>
</template>

<script>
export default { 
  name: "Result",
  // props :{
  //   dialedletters: String,
  //   resultsFound: Number,
  //   viewData: Array

  // },
  props: ['dialedletters', 'resultsFound', 'viewData']
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

