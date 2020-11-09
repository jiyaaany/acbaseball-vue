<template>
    <b-list-group-item>{{ notice.title }}</b-list-group-item>
</template>
<script>
export default {
    name: 'Notice',

    props: {
        notice: {
            type: Object,
            required: true
        }
    }
}
</script>