<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";

export default {
  name: "RegisterPage",
  data() {
    return {
      inputValue: {
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["handleRegister"]),
  },
};
</script>

<template>
  <div class="register-section mt-5">
    <section style="height: 90vh" class="pt-5">
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container-fluid h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px">
                <div class="card-body p-4">
                  <h3 class="text-center mb-3">Create New Account</h3>
                  <form @submit.prevent="handleRegister(this.inputValue)">
                    <div class="form-outline mb-3">
                      <label class="form-label"
                        >Email <span style="color: red">*</span></label
                      >
                      <input
                        type="email"
                        class="form-control form-control-lg"
                        placeholder="Enter your email"
                        name="name"
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

                    <div class="form-outline mb-3">
                      <label class="form-label">Phone Number</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter your phone number"
                        name="phoneNumber"
                        v-model="inputValue.phoneNumber"
                      />
                    </div>

                    <div class="form-outline mb-3">
                      <label class="form-label">Address</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        placeholder="Enter your address"
                        name="address"
                        v-model="inputValue.address"
                      />
                    </div>
                    <div class="d-flex justify-content-center">
                      <button
                        type="submit"
                        class="btn btn-outline-primary w-25"
                      >
                        Create Account
                      </button>
                    </div>

                    <p class="text-center text-muted mt-3 mb-0">
                      Have already an account?
                      <a
                        href=""
                        class="fw-bold text-body"
                        @click.prevent="this.$router.push('/login')"
                        >Log In here!</a
                      >
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
