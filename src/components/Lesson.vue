<template>
    <b-button class="mx-2" variant="outline-primary">{{ lesson.time }}</b-button>
</template>

<script>
export default {
    props: {
        lesson: {
            type: Object,
            required: true,
        }
    }
}
</script>