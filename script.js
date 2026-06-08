// 处理登录表单提交
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageEl = document.getElementById('message');
    
    // 清除之前的消息
    messageEl.className = 'message';
    messageEl.textContent = '';
    
    // 验证输入
    if (!username) {
        showError('请输入用户名');
        return;
    }
    
    if (!password) {
        showError('请输入密码');
        return;
    }
    
    if (password.length < 6) {
        showError('密码长度不能少于6位');
        return;
    }
    
    // 模拟登录验证 (实际应用中应该调用后端接口)
    // 这里为演示，用户名和密码都是 "admin" 时显示成功
    if (username === 'admin' && password === 'admin123') {
        showSuccess('登录成功！');
        // 延迟后重定向或清空表单
        setTimeout(() => {
            // alert('欢迎 ' + username);
            // 可以在这里重定向到其他页面
            // window.location.href = '/dashboard';
            document.getElementById('loginForm').reset();
        }, 1500);
    } else {
        showError('用户名或密码错误');
    }
}

// 显示成功信息
function showSuccess(message) {
    const messageEl = document.getElementById('message');
    messageEl.className = 'message success';
    messageEl.textContent = message;
}

// 显示错误信息
function showError(message) {
    const messageEl = document.getElementById('message');
    messageEl.className = 'message error';
    messageEl.textContent = message;
}

// 按 Enter 键提交表单
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const inputs = form.querySelectorAll('input[type="text"], input[type="password"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                form.dispatchEvent(new Event('submit'));
            }
        });
    });
    
    // 清除消息显示
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    usernameInput.addEventListener('focus', function() {
        document.getElementById('message').className = 'message';
    });
    
    passwordInput.addEventListener('focus', function() {
        document.getElementById('message').className = 'message';
    });
});
