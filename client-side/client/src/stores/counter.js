import { defineStore } from 'pinia'
import axios from 'axios'
import { useToast } from 'vue-toastification'

const BASE_URL = `http://localhost:3000`

const toast = useToast()
const callToaster = ({ type = 'success', val = 'Successfully!' }) => {
  return toast[type](val)
}

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      isLogin: false,
      motorcycles: [],
      news: [],
      motorcycle: {}
    }
  },
  actions: {

    async handleRegister(payload) {
      try {
        await axios({
          method: 'POST',
          url: `${BASE_URL}/users/register`,
          data: payload
        })
        this.router.push('/login')
        callToaster({ val: `Successfully register account, please login!` })
      } catch (err) {
        callToaster({ type: 'error', val: err.response.data.message })
      }
    },

    async handleLogin(payload) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${BASE_URL}/users/login`,
          data: payload
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.router.push('/rent')
        callToaster({ val: `Successfully login` })
      } catch (err) {
        callToaster({ type: 'error', val: err.response.data.message })
      }
    },

    async handleGoogleLogin(response) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${BASE_URL}/users/googleLogin`,
          headers: {
            google_token: response.credential
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.router.push('/rent')
        callToaster({ val: `Successfully login` })
      } catch (err) {
        console.log(err)
      }
    },

    async handlePayment(id, price, trxcode) {
      try {
        const { data } = await axios({
          method: 'POST',
          url: `${BASE_URL}/rents/payment/${price}/${trxcode}`,
          headers: {
            access_token: localStorage.access_token
          }
        })

        const status = this.handleStatus

        window.snap.pay(data.token, {
          onSuccess: function (result) {
            status(id)
            location.reload()
          }
        })
      } catch (err) {
        console.log(err)
      }
    },

    async handleStatus(id) {
      try {
        await axios({
          method: 'PATCH',
          url: `${BASE_URL}/rents/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
      } catch (err) {
        callToaster({ type: 'error', val: err.response.data.message })
      }
    },

    async handleRent(id) {
      try {
        await axios({
          method: 'POST',
          url: `${BASE_URL}/rents/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.router.push('/rent')
        callToaster({
          type: 'info',
          val: `Successfully booked your motorcycle!`
        })
      } catch (err) {
        callToaster({ type: 'error', val: err.response.data.message })
      }
    },
    
    handleLogout() {
      localStorage.clear()
      this.isLogin = false
      this.router.push('/login')
      callToaster({
        val: `Successfully logout!`
      })
    },

    async fetchMotorcycles() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${BASE_URL}/motorcycles`
        })
        this.motorcycles = data
      } catch (err) {
        callToaster({ type: 'error', val: err.response.data.message })
      }
    },

    async fetchNews() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${BASE_URL}/news`
        })
        this.news = data
      } catch (err) {
        callToaster({ type: 'error', val: err.response.data.message })
      }
    },

    async fetchDetailMotorcycle(id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${BASE_URL}/motorcycles/${id}`,
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.motorcycle = data
      } catch (err) {
        callToaster({ type: 'error', val: err.response.data.message })
      }
    }
  }
})
