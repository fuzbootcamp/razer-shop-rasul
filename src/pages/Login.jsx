import React from 'react'

const Login = () => {
    function auth(e) {
        e.preventDefault()
        localStorage.setItem('Name', e.target[0].value)
        localStorage.setItem('Tel', e.target[1].value)
        window.location.href = '/';
    }
  return (
    <div>
      <div className="login_wrap">
        <div className="login">
            <form onSubmit={auth}>
                <img width={70} src="https://razer-shop.netlify.app/static/media/razer-ths-logo.0d25071aa9e861bf55d7f240475a2ff1.svg" alt="" />
                <input type="text" placeholder='Name...' required/>
                <input type="tel" placeholder='Tel...' required />
                <button type='submit'>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
