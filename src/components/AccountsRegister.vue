<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-name" label="이름:" label-for="input-name">
        <b-form-input
          id="input-name"
          v-model="form.name"
          required
          placeholder="이름"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-id" label="ID:" label-for="input-id">
        <b-form-input
          id="input-id"
          v-model="form.id"
          required
          placeholder="ID"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-password" label="비밀번호:" label-for="input-password">
        <b-form-input
          id="input-password"
          v-model="form.password"
          type="password"
          required
          placeholder="비밀번호"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-password2" label="비밀번호 확인:" label-for="input-password2">
        <b-form-input
          id="input-password2"
          v-model="form.password2"
          type="password"
          required
          placeholder="비밀번호 확인"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-phone" label="전화번호:" label-for="input-phone">
        <b-form-input
          id="input-phone"
          v-model="form.phone"
          type="tel"
          required
          placeholder="전화번호"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">회원가입</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          id: '',
          password: '',
          password2: '',
          phone: '',
        },
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.id = ''
        this.form.password = ''
        this.form.password2 = ''
        this.form.phone = ''
        // Trick to reset/clear native browser form validation state
        
      }
    }
  }
</script>