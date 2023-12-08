<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

import { GoogleLogin } from "vue3-google-login";

export default {
  name: "LoginPage",
  components: { GoogleLogin },
  data() {
    return {
      inputValue: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleLogin", "handleGoogleLogin"]),
  },
};
</script>

<template>
  <div class="login-section mt-5">
    <section style="height: 90vh" class="pt-4">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container-fluid d-flex justify-content-center">
          <div
            class="card"
            style="
              display: flex;
              border-radius: 15px;
              width: 500px;
              justify-content: center;
            "
          >
            <div class="card-body p-4">
              <h3 class="text-center mb-3">Log In Account</h3>
              <form @submit.prevent="handleLogin(this.inputValue)">
                <div class="form-outline mb-3">
                  <label class="form-label"
                    >Email <span style="color: red">*</span></label
                  >
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Enter your email"
                    name="email"
                    v-model="inputValue.email"
                  />
                </div>

                <div class="form-outline mb-3">
                  <label class="form-label"
                    >Password <span style="color: red">*</span></label
                  >
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    placeholder="Enter your password"
                    name="password"
                    v-model="inputValue.password"
                  />
                </div>

                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                  />
                  <label class="form-check-label"> Remember me </label>
                </div>
                <div class="d-flex justify-content-center mt-3">
                  <button type="submit" class="btn btn-outline-primary w-25">
                    Log In
                  </button>
                </div>

                <p class="text-center text-muted mt-3 mb-0">
                  Don't have an account?
                  <a
                    href=""
                    class="fw-bold link-danger"
                    @click.prevent="this.$router.push('/register')"
                    >Register here!</a
                  >
                </p>
                <hr />
                <div class="d-flex justify-content-center">
                  <p class="fw-normal text-body">Sign in with :</p>
                </div>
                <div class="d-flex justify-content-center">
                  <GoogleLogin :callback="handleGoogleLogin" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
