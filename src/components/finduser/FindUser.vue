<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<div id='app99'>
  <p>{{message}}</p>
  <button v-on:click.prevent="findUser">查询用户</button>
</div>

<script type="text/javascript">

  export default {
    data: {
      message: 'user'
    },
    methods: {
      findUser: function() {
        axios.get('http://127.0.0.1:8081/demoapp_war_exploded/api/account/user')
          .then(response => {
            console.log(response.data);
            this.message = response.data;
          })
          .catch(error => {
            console.log(error);
            this.message = error;
          })
      }
    }
  }

</script>
