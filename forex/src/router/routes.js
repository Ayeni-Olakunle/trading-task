const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/Trade",
    component: () => import("layouts/TradeStation.vue"),
    children: [{ path: "", component: () => import("pages/Trade.vue") }],
  },
  {
    path: "/OrderBook",
    component: () => import("layouts/OrderBook.vue"),
    children: [{ path: "", component: () => import("pages/Order.vue") }],
  },
  {
    path: "/TransactionHistory",
    component: () => import("layouts/TransactionHistory.vue"),
    children: [
      { path: "", component: () => import("pages/TransactionHistory.vue") },
    ],
  },
  {
    path: "/TradingPlan",
    component: () => import("layouts/TradingPlan.vue"),
    children: [{ path: "", component: () => import("pages/Trading.vue") }],
  },
  {
    path: "/UserProfile",
    component: () => import("layouts/UserProfile.vue"),
    children: [{ path: "", component: () => import("pages/UserProfile.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
