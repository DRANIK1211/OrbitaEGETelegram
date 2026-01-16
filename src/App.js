import './App.css';
import { ReactComponent as Logo } from './assets/logo.svg';
import { useState, useEffect } from 'react';

function App() {
  // const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //   // Ждем, когда Telegram инициализирует WebApp
  //   if (window.Telegram?.WebApp) {
  //     // window.Telegram.WebApp.ready(); // Сообщаем Telegram, что приложение готово
  //     // window.Telegram.WebApp.expand(); // Раскрываем на весь экран
      
  //     // // Получаем данные пользователя (они доступны сразу)
  //     // const user = window.Telegram.WebApp.initDataUnsafe?.user;
  //     // console.log('Пользователь:', user);
      
  //     setIsLoading(false);
  //   } else {
  //     // Запасной вариант, если запускаем не в Telegram
  //     console.warn('Запущено вне Telegram');
      
  //     setIsLoading(false);
  //   }
  // }, []);


  //splash screen
  //if (isLoading) {
    // Ваш кастомный splash screen
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#080518' }}>
        <Logo style={{ width: '110px', height: '110px' }} />
      </div>
    );
  //}

  //main screen
  // return (
  //   <div className="App">
  //     Запущено
  //   </div>
  // );
}

export default App;
