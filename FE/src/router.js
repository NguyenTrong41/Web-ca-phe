import { Route, Router, Routes } from 'react-router-dom'
import { ROUTERS } from './utils/router'
import HomePage from './pages/user/HomePage'
import Main from './pages/user/layouts/Main'
import MenuPage from './pages/user/MenuPage'
import { HotPage } from './pages/user/HotPage'

const userRouter = () => {
    const userRouters = [{
        path: ROUTERS.USER.HOME,
        component: <HomePage/>
    },
    {
        path: ROUTERS.USER.MENU,
        component: <MenuPage/>
    },
    {
        path: ROUTERS.USER.HOT,
        component: <HotPage/>
    }
    ]
  return (
    <Main>
        <Routes>
            {userRouters.map((item,key) => (
                <Route key={key} path={item.path} element = {item.component}/>
            ))}
        </Routes>
    </Main>
  )
};

const RouterCustom = ()=>{
    return userRouter();
};

export default RouterCustom;



