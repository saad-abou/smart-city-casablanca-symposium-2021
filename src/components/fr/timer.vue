<template>
    <div class="body">
    <v-container grid-list-xs>
      <template>
            <div>
              <flip-countdown
               deadline="2021-6-9 09:00:00"></flip-countdown>
            </div>
        </template>
    </v-container> 
    </div>
</template>
<script>
import FlipCountdown from 'vue2-flip-countdown'
export default {
  components: { FlipCountdown },
    
}
</script>
<style>
    /* general styling */


</style>