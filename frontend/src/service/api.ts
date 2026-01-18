import axios from "axios";
import { authService } from "./auth-service";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // cookie işlmelerinin yapılabilmesi için true ya çekilmesi gerekiyor
  headers: {
    "Content-Type": "application/json",
  },
});

// ^ axios interceptor
// ^ api ye atilan her istekte veya apiden gelen her cevapta bir fonksiyon calisir

//^ Ilk callback api den olumlu cvap gelirse calisir, ikincisi olumsuz cevap geldiginde calisir
/* api.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    console.log(error);
  }
); */

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // burada hata alinan api istegi tutulur
    const originalRequest = error.config;
    console.log(error);
    // hata access tokenin suresinin dolmasindan kaynakliysa yeni bir token almak gerekiyor
    if (
      error.status === 401 &&
      error.response.data.message === "Access token expired"
    ) {
      // refresh token ile yeni access token alinir.
      authService.refresh();
      // access tokenin suresinin dolmasindan kaynakli hata aldigimiz api istegi tekrar atilir
      return api.request(originalRequest);
      try {
      } catch (error) {
        // refresh tokenin suresi dolduysa o zaman cikis yapiliar
        await authService.logout();
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
  }
);

export default api;
