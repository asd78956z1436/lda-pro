// src/utils/useScroll.js
// import { useSidebarStore } from '@/store/sidebar';


export const scrollTo = (event, id) => {
    // const sidebarStore = useSidebarStore();
    event.preventDefault(); // 阻止默認的錨點跳轉行為
    const element = document.getElementById(id);
    if (element) {
        // console.log(element)
        element.scrollIntoView({ behavior: 'smooth' });
        // 修改 URL 的 hash 部分
        // 使用 history.pushState 可以改變地址欄中的 URL 而不重新加載頁面
        // history.pushState(null, '', '#' + id);
        history.pushState(null, null, `#${id}`);
        // sidebarStore.setActiveSection(id);
    }
};
