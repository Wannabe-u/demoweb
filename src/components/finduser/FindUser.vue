<template>
  <div >
    <p>{{info}}</p>
    <p>asdasdad</p>
  </div>
</template>

<script type="text/javascript">
  import userinfo from '../../../api/api'

  export default {
    data() {
      return {
        info: null
      }
    },
    methods: {
      findUser_info() {
          this.info=userinfo().then((data) => {
            console.log(response.data);
            this.info = response.data;
          })
          .catch(error => {
            console.log(error);
            this.info = error;
          })
      }
    }
  }

</script>
