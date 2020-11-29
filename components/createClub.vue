<template>
  <div>
    <div class="container">
      <div>
        <b-button id="show-btn" @click="showModal">
          Create Club
        </b-button>

        <b-modal ref="my-modal" hide-footer title="Using Component Methods">
          <div>
            <b-form v-if="show" @submit="onSubmit" @reset="onReset">
              <b-form-input
                id="input-1"
                v-model="form.name"
                type="text"
                required
                placeholder="Enter Club name"
              />
              <b-form-input
                id="input-2"
                v-model="form.description"
                type="text"
                required
                placeholder="Enter Club description"
              />
            </b-form>
          </div>
          <b-button type="submit" variant="primary" @click="onSubmit">
            Submit
          </b-button>
          <b-button type="reset" variant="danger" @click="onReset">
            Reset
          </b-button>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        description: ''
      },
      show: true
    }
  },
  methods: {
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.name = ''

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    showModal () {
      this.$refs['my-modal'].show()
    },
    toggleModal () {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    onSubmit (evt) {
      evt.preventDefault()
      this.$refs['my-modal'].hide()
      const res = this.$axios.$post('/clubs/', this.form, {
        headers: { Authorization: `Bearer ${this.$store.state.user.token}` }
      })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
