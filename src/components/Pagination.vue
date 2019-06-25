<template>
  <div class="hello">
		<div id="pagination" class="pagination"></div>
  </div>
</template>

<script>
	import {Page} from '../pages/myPagination/myPagination.js'
export default {
  data () {
    return {
      
    }
  },
	mounted() {
		 new Page({
		    id: 'pagination',
		    pageTotal: 50, //必填,总页数
		    pageAmount: 10,  //每页多少条
		    dataTotal: 500, //总共多少条数据
		    curPage:1, //初始页码,不填默认为1
		    pageSize: 5, //分页个数,不填默认为5
		    showPageTotalFlag:true, //是否显示数据统计,不填默认不显示
		    showSkipInputFlag:true, //是否支持跳转,不填默认不显示
		    getPage: function (page) {
		        //获取当前页数
		       console.log(page);
		    }
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	@import url("../pages/myPagination/myPagination.css");
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
