import { createRouter, createWebHistory} from 'vue-router';
import MainView from "@/components/MainView";
import GraphView from "@/components/graph/GraphView";


const routes = [
    {
        path: '/',
        component: MainView
    },
    {
        path: "/graph",
        component: GraphView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;