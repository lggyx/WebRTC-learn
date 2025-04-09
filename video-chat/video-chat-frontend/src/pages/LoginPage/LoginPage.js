import React, { useState } from 'react'; // 引入React和useState钩子
import { connect } from 'react-redux'; // 引入redux的connect函数，用于连接redux store
import logo from '../../resources/logo.png'; // 引入logo图片
import { useNavigate } from 'react-router-dom';// 引入useNavigate钩子，用于编程式导航，路由跳转
import SubmitButton from './components/SubmitButton'; // 引入提交按钮组件
import UsernameInput from './components/UsernameInput'; // 引入用户名输入框组件
import { setUsername } from '../../store/actions/dashboardActions'; // 引入redux的action，用于设置用户名
import './LoginPage.css'; // 引入样式文件

const LoginPage = ({ saveUsername }) => {
  const [username, setUsername] = useState('');

  const navigate = useNavigate();

  //提交handle函数
  const handleSubmitButtonPressed = () => {
    //保存username到store
    saveUsername(username);
    //跳转到Dashboard页面
    navigate('/dashboard');
  };
  return (
    // 外层容器
    <div className='login-page_container background_main_color'>
      {/* 登录容器 */}
      <div className='login-page_login_box background_secondary_color'>
        {/* logo */}
        <div className='login-page_logo_container'>
          <img className='login-page_logo_image' src={logo} alt='VideoChat' />
        </div>
        {/* 标题 */}
        <div className='login-page_title_container'>
          <h2>欢迎来到登录页面</h2>
        </div>
        {/* input输入框 */}
        <UsernameInput username={username} setUsername={setUsername} />
        {/* 提交btn按钮 */}
        <SubmitButton handleSubmitButtonPressed={handleSubmitButtonPressed} />
      </div>
    </div>
  );
};

//将action作为props绑定给组件
const mapActionToProps = (dispatch) => {
  return {
    saveUsername: (username) => dispatch(setUsername(username)),
  };
};

export default connect(null, mapActionToProps)(LoginPage);