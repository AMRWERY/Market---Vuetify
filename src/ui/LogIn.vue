<template>
  <v-card class="mx-auto" max-width="600" variant="outlined">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <v-card-item>
            <div>
              <div class="text-underline mb-1">
                Login with your social media
              </div>
              <button type="button" class="btn btn-primary">
                <i class="fa-brands fa-facebook-f"></i>
              </button>
              <button type="button" class="btn btn-danger">
                <i class="fa-brands fa-google"></i>
              </button>
              <button type="button" class="btn btn-info">
                <i class="fa-brands fa-twitter"></i>
              </button>
              <hr />
              <pre>OR</pre>

              <v-form ref="form" @submit.prevent="submitForm">
                <v-text-field
                  v-model="email"
                  type="email"
                  label="Your E-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  type="password"
                  label="Password"
                  required
                ></v-text-field>
                <v-checkbox
                  v-model="checkbox"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  label="Keep me login?"
                  required
                ></v-checkbox>
              </v-form>
            </div>
            <v-card-actions>
              <v-btn variant="outlined" @click="submitForm"> Login </v-btn>
              <v-btn variant="outlined" type="button"> Signup </v-btn>
            </v-card-actions>
          </v-card-item>
        </div>
        <div class="col-md-6">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAq1BMVEX///8fHx8AAAAZGRns7OwiIiJOTk67u7scHBwVFRUODg74+PjBwcEGBgbp6enj4+Pc3NzOzs709PTW1dYwMDAoKCitra1DQ0M3NTtoaGimpqbFxcW1tbVdXV2NjY2bm5swLTOCgoJycnJCQkI0NDR4eHhKSkqIhopNSk9ta29EQkYpJi2fnaBMTEw7Ozt1dXVYVlmCgIUTDxoiHSYJABEdFiE/O0FUUVdjYGQQs4H+AAAF4ElEQVR4nO3cCXeiOhgG4BhwYZFVqQoStcWVO+r03tb//8tuEtSxFTv2nBmpzfucGcuh6Em+Jh9ZaAkBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICCH1Zdgi/GY1Par7oQX4kz+Mdsa1qn6nJ8GVbSMKlRq9Vahld1Wb6GuE+p0apJ1K+6NLfBPqqnP27LFrJH45sVq0oupZsLNXXTDjVbtRPUvm3hKhLRmkGnifX+vMsatP0mIOrEZGLyumr0xyA4OelEQ/O0zxxjokQ+sR41WVuNdphenArsfu2YVd9S476jHxNGi7bGLr/NTLoXAsIv6Z51se/IoSdVNunEddbULI8Ib0wPVRf3Jlz6ptYGHXr6uH2WXPfpZFB1cW/iXUxEVBq+k9ZKo0KVSCdv+s4xKg9Nl3XpWVSMx6pLext6WT7lt+bIexcVw6StmFieAiNZ64dWljnErTkcHKLCky8dstC314+0o8Ctp18yNJNxoPVxGHWoZlD6lNpezBp1amotqldd4r9vcJ5QDlExjYkfdfqRE0bDLm1rstFQBdbazm48x5DwBlIfO0Ezq9GTUZwSw/tGSedpGW2z0088nz3Rd6NaJWJy1nk0k3aHLA6jPn23VKBK3yFBt/UmHlojtf1kLBpIWZeiTtUFvgVGjx2GPo6T2E4b7ZIGsr+oE/z+E++f9cSHKFqbtiYDP2b8DmOWDlkKxrDq4t5GTCltMN+P+k/t9qV1gr12WnVpb4Q1vSTr0quoMQ3kwihJmldR4k7844GbNq41VeC2w6j2GUZdgelO8+J0p5T2oMC0uGRN6SOGCk8WWNMPBiPn1FiRHV9cpS+NiQqzHeJ/pvMosplBPtN5aFR1aW8jub6hKLIPyE0vrMiq20xERvl42nekypxYSK/rPa22Eksne5OrgqLIg1sHm/YVIVEmmew1ftdSWsqFROSUDxOtYajxJNtbdv3yIL9FG27V5auE2y/fvOAR6Sox8yvlD0u2MAxaT1W6B58Jx116snKvmZRuIqUjIlg+67cOa/SPWaTA8uuV3DAMPVXme2eS0k2ctsld2OBRI9/2tfq1lFhmk/SrVV1SAAAAAAAAAPi7LGUX0yQv22ZNeTTYbreZ3LBh8/lMrLjGa3FK7vQFsyJMuXhg2mXi0M6228NiUl48R63nhxfC+He36/t8vDp5YelKBmWzYEz+cYJ0E4bbHT/w0nQ0S+UeefSz2CrfJPyluRSH41e2HRWVdp5n8mv4kwcwXsnPZVmPpfe5J5bwyg824khWV1iKg2KrwhrtV+gXvTU5XmTPxeGMx2Fd/O5B3lvK68MRD1I8Kt4S925Q/L8i4fFYyPoO09CXP9fkeWwf/pjFqPhJu6PmStb6JCbjGdHnxdL0fPAqm1o4386/Q0xGnGwMu9XPf2WDIR6b/yeTwjEmbEE2svqn7WQ0Wr3KLOP3xAVcuNRfU38fizuOyasf92Qa3Zw+NuEWmWIfE2v5OpnKQOzERUkRk0UYjWSSnb1Mds8iruHSclbbl+Ij7jgmG7L/IQ/3MbHE3cLtncYk7uV5vhJn8qVOgrnMIiKfLETjsVazfDAXDSvkaSVZLYvPueOYvPL/K5E+NvPdbidCkK92i5G83RL9WcYk2/KXhYiENVntVgvZY8b85GzDDxNRefkS9njSWY+KT7ZXt67Ln+LEYjdYVNKPOJlInWZ0GFjYRcIQkXGLX1zyo/0vMHn8mkD0HUecCOzDi7V/TidQ8XkdACh1eOjGOr6qPTPkBlFEYp5CozwLiJ8yl/izmcdnewkPVug1dbLIXZLxU+v8Pqd6nxfnoYiJxYgeEWZFDsn49JAMxuJP+3mzTCdrHp2UhWSbfPcHCwIr4P94U9AnxLZ5rd0oJJE/iEkexgnJ3RfxzTjSSeZZhCU+2XrBr7d9S57uuroYySYecQY2CeR4xG7yZNLkIw6PhJZ4NMW1iM3bjmfxiXDk/nobAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMC39D/FlGYK21aqnQAAAABJRU5ErkJggg=="
          />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    password: null,
    checkbox: false,
    mode: 'login'
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submitForm() {
      this.valid = true;
      if (this.mode === 'login') {
        // ....
      } else {
        this.$store.dispatch('signUp', {
          email: this.email,
          password: this.password
        })
        console.log(this.$store.dispatch)
      }
    },
  },
};
</script>

<style scoped>
* {
  text-align: center;
}
.mx-auto {
  margin: 8rem auto;
}

img {
  width: 200px;
  height: 300px;
  object-fit: cover;
}

.btn {
  margin-left: 5px;
  margin-right: 5px;
}
</style>