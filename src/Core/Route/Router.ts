import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import("../../Modules/Common/Presentation/Pages/PipelinePage.vue"),
    },
  ],
});

export default router;
