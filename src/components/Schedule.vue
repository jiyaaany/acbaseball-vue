<template>
    <div>
        <b-calendar block locale="ko-KR" v-model="selectedYMD"></b-calendar>
        <div v-if="selectedYMD" class="p-3 d-flex flex-wrap">
            <Lesson v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" ></Lesson>
        </div>
    </div>    
</template>

<script>
import Lesson from '@/components/Lesson.vue';

export default {
    data: () => ({
        selectedYMD: '',
        lessons: [
            {
                id: 1,
                date: '2020-10-15',
                time: '7:00',
                totalCnt: 1,
                usableCnt: 1,
            },
            {
                id: 2,
                date: '2020-10-15',
                time: '12:00',
                totalCnt: 1,
                usableCnt: 1,
            },
            {
                id: 3,
                date: '2020-10-15',
                time: '17:00',
                totalCnt: 1,
                usableCnt: 0,
            },
            {
                id: 4,
                date: '2020-10-16',
                time: '7:00',
                totalCnt: 1,
                usableCnt: 0,
            },
            {
                id: 5,
                date: '2020-10-16',
                time: '10:00',
                totalCnt: 1,
                usableCnt: 1,
            },
            {
                id: 6,
                date: '2020-10-16',
                time: '12:00',
                totalCnt: 1,
                usableCnt: 1,
            },
            {
                id: 7,
                date: '2020-10-17',
                time: '10:00',
                totalCnt: 1,
                usableCnt: 1,
            },
            {
                id: 8,
                date: '2020-10-17',
                time: '17:00',
                totalCnt: 1,
                usableCnt: 0,
            },
            {
                id: 9,
                date: '2020-10-17',
                time: '19:00',
                totalCnt: 1,
                usableCnt: 0,
            },
        ]
    }),

    components: { Lesson },

    watch: {
        selectedYMD(){
            
        }
    }
}
</script>