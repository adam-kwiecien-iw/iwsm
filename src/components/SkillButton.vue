<template>

   <div v-if="edit" class="padding">
     <div style="margin-bottom: 10px">
        <button v-if="edit" v-on:click="del">Delete</button>
      </div>
      <input v-if="edit" type="text" class="txt" :placeholder = "name" v-model="sName">
      <div style="margin-top: 10px">
        <button v-if="edit" v-on:click="edit = !edit">Close</button>
        <button v-if="edit" v-on:click="update">Save</button>
      </div>
    </div>
    <h6 v-else v-on:click="edit = !edit">
        {{skillName}}
    </h6>
</template>

<script>
export default {

  props: ['skillId', 'skillName'],

data() {
    return {
        id: this.skillId,
        name: this.skillName,
        edit: false,
        sName: "",
    }
},

  methods: {
    update() {
        
      const requestOptions = {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                  id: this.skillId,
                  skillName: this.sName
               })
            };
            var url = "https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/skills/" + this.skillId
            fetch(url, requestOptions)
              .then(response => response.json())
              .then(data => ( console.log(data.id)));

              this.edit = !this.edit
              setTimeout(() => {  
                window.location.reload(); 
              }, 4000);
      },

    del() {
        
      const requestOptions = {
              method: "DELETE",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                  id: this.skillId,
                  skillName: this.skillName
               })
            };
            var url = "https://ssp8p1cf45.execute-api.ap-southeast-2.amazonaws.com/Prod/api/v1/employees/skills/" + this.skillId
            fetch(url, requestOptions)
              .then(response => response.json())
              .then(data => ( console.log(data.id)));

              this.edit = !this.edit

              setTimeout(() => {  
                window.location.reload(); 
                }, 4000);
      }
    }
}
</script>
<style scoped>
  .padding { 
      padding: 10px;
    } 
</style>
