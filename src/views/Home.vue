<template>
  <div class="home w-100">
    <img class="w-100" alt="Vue logo" src="../assets/background.jpeg">
    <p class="h4 mt-3 ml-3">공지사항</p>
    <b-list-group class="p-3">
      <Notice v-for="notice in notices" :notice="notice" :key="notice.id"></Notice>
    </b-list-group>
  </div>
</template>

<script>
// @ is an alias to /src
import Notice from '@/components/Notice.vue';

export default {
  name: 'Home',

  data: (vue) => ({
    notices: [
      {
        id: 1,
        title: 'title1',
        content: 'content1',
        reg_date: vue.$moment().format('YYYY-MM-DD H:m:s')
      },
      {
        id: 2,
        title: 'title2',
        content: 'content2',
        reg_date: vue.$moment().format('YYYY-MM-DD H:m:s')
      },
      {
        id: 3,
        title: 'title3',
        content: 'content3',
        reg_date: vue.$moment().format('YYYY-MM-DD H:m:s')
      },
      {
        id: 4,
        title: 'title4',
        content: 'content4',
        reg_date: vue.$moment().format('YYYY-MM-DD H:m:s')
      },
    ]
  }),

  components: { Notice }
}
</script>
