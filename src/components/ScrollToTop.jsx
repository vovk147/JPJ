import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Следим за изменением адреса в строке браузера

  useEffect(() => {
    // Как только адрес изменился — моментально перекидываем в начало страницы
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null; // Компонент работает "в тени" и ничего не отрисовывает
};

export default ScrollToTop;