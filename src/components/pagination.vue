<template>
  <div>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentPage1: 5,
      };
    },
    props: {
      pageSize: {
        type: Number,
        default: 1
      },
      total: {
        type: Number,
        default: 1
      }
    },
    methods: {
      /**
       * @description: 每页条数改变时触发
       * @param val
       * @return: 
      */
      handleSizeChange(val) {
         this.$emit('handleSizeChangeSub', val);
      },
      /**
       * @description: 当前页改变时触发
       * @param val
       * @return: 
      */
      handleCurrentChange(val) {
        this.$emit('handleCurrentChangeSub', val);
      },
      // /**
      //  * @description: 点击上一页触发
      //  * @param row
      //  * @return: 
      // */
      // handlePrevClick(val) {
      //   console.log(`每页 ${val} 条`);
      // },
      // /**
      //  * @description: 点击下一页触发
      //  * @param row
      //  * @return: 
      // */
      // handleNextClick(val) {
      //   console.log(`当前页: ${val}`);
      // }
    }
  }
</script>
<style lang="less" scoped>
</style>
