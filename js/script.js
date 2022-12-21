
  const { createApp } = Vue
  

  createApp({
    data() {
      return {
        emails: [],
      }
    },

    methods: {
      getEmails(){
        for (let i = 0; i < 10; i++) {
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
              this.emails.push(response.data.response)
            })
        }
      }
    },

    created(){
      this.getEmails()
    }
    
  }).mount('#app')