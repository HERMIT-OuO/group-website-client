<template>
  <div class="personPage">
      <div class="peoplelist-row" style="justify-content: center;">
            <Card class="peoplelist-card-teacher" :bordered="false">
                <div class="peoplelist-card-teacher-flex-row">
                    <Avatar class="peoplelist-card-teacher-avatar" size="130" src="https://images.unsplash.com/photo-1597450122094-c9ed4649c16c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"></Avatar>
                    <div class="peoplelist-card-teacher-flex-col">
                        <div class="peoplelist-card-teacher-name" >Test</div>
                        <div class="peoplelist-card-teacher-category">教授</div>
                        <div class="peoplelist-card-teacher-direction">移动与无线网络、网络测量与建模、网络安全</div>
                    </div>
                    
                </div>
            </Card>
        </div>
        <div class="personPage-info">
            <Card :bordered="false">
                <div class="personPage-introduction">
                    个人简介
                </div>
            </Card>
        </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  },
  computed: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
.peoplelist-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 3rem;
}

.peoplelist-card {
    width: 240px;

    text-align: center;
}

.peoplelist-card-teacher {
    width: 100%;

    padding-right: 2rem;
    padding-left: 2rem;

    text-align: left;
}

.peoplelist-card-teacher-flex-row {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 1rem;
    margin-bottom: 1rem;
}

.peoplelist-card-teacher-flex-col {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 1.5rem;
}


.peoplelist-card-teacher-name {
    margin-bottom: 1rem;

    font-size: 16px;
    font-weight: bold;

    color: #464c5b;
}

.peoplelist-card-teacher-category {
    margin-bottom: 0.5rem;
}

.personPage-info {
    margin-top: 3rem;
}

./deep/ .personPage-introduction h1,
h2,
h3,
h4 {
    color: #464c5b;
}

/deep/ .personPage-introduction table {
    border-top: 1px solid #dcdee2;
    border-left: 1px solid #dcdee2;
}

/deep/ .personPage-introduction table td,
table th {
    border-bottom: 1px solid #dcdee2;
    border-right: 1px solid #dcdee2;
    padding: 3px 5px;
}

/deep/ .personPage-introduction table th {
    border-bottom: 2px solid #dcdee2;
    border-right: 1px solid #dcdee2;
    text-align: center;
}

/deep/ .personPage-introduction blockquote {
    display: block;
    border-left: 8px solid #66b5f3;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
}

/deep/ .personPage-introduction code {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
}

/deep/ .personPage-introduction pre code {
    display: block;
}

/deep/ .personPage-introduction ul,
ol {
    margin: 10px 0 10px 20px;
}
</style>