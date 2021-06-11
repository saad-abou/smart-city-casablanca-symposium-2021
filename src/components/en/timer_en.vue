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

.body {
  height: 100%;
  margin: 0;
}

.body {
  align-items: center;
  background-color: #FFF;
  display: flex;
  font-family: -apple-system, 
    BlinkMacSystemFont, 
    "Segoe UI", 
    Roboto, 
    Oxygen-Sans, 
    Ubuntu, 
    Cantarell, 
    "Helvetica Neue", 
    sans-serif;
}

.contain{
  color: #333;
  margin: 0 auto;

}

.body h1 {
  font-weight: normal;
  letter-spacing: .125rem;
  text-transform: uppercase;
}

.body li {
  display: inline-block;
  font-size: 1em;
  list-style-type: none;
  padding: 1em;
  text-transform: uppercase;
  color:white
}

.body li span {
  display: block;
  font-size: 4.5rem;
}

.message {
  font-size: 4rem;
  display: none;
  padding: 1rem;
}

.emoji {
  padding: 0 .25rem;
}

@media all and (max-width: 768px) {
  
  .body li {
    font-size: 0.5rem;
    padding: .75rem;
  }
  
  .body li span {
    font-size: 2.375rem;
  }
}

</style>