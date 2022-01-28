<template> 
<!-- This is the drop down component for the user to select their skil level and it will change colour depending on the level -->
  <select v-model="selected" @change="update" v-bind:class="{'red': selected == 0 || selected == 1 || selected == 2 ,  'yellow': selected == 3, 'green': selected == 4 || selected == 5}">  
    <option>0</option> 
    <option>1</option> 
    <option>2</option>  
    <option>3</option> 
    <option>4</option>  
    <option>5</option>
  </select>
</template>

<script>
export default {

  props: ['propSkill', 'propEmp', 'propLev'],
  
 data() {
    return {
      skill: this.propSkill,
      emp: this.propEmp,
      level: this.propLev,
      selected: this.propLev,
    }
  },

  methods: {

// this method sends an update to the databse to update the skill level of an employee and a particular skill
      update() {
        
      // const requestOptions = {
      //         method: "PUT",
      //         headers: { "Content-Type": "application/json" },
      //         body: JSON.stringify({ 
      //             employee: {},
      //             skill: {},
      //             level: this.selected
      //          })
      //       };
      //       var url = "https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees/" + this.emp + "/skills/" + this.skill
      //       fetch(url, requestOptions)
      //         .then(response => response.json())
      //         .then(data => ( console.log(data.id)));

      //         console.log("here")
      //         // setTimeout(() => {  
      //         //   window.location.reload(); 
      //         // }, 4000);
      },
    }
}
</script>
<style scoped>

  .green { 
      background-color: lightgreen; 
      width: 35px;
      height: 30px;
      font-size: 15pt;
    } 

  .yellow { 
      background-color: #ffe600; 
      width: 35px;
      height: 30px;
      font-size: 15pt;
      } 

  .red { 
      background-color: lightcoral; 
      width: 35px;
      height: 30px;
      font-size: 15pt;
      } 

</style>
