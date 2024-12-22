console.log('Frontend is connected to script.js!');

// 发送一个请求到后端 API
fetch('https://boring-studio.onrender.com/api/appointment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: 'Test', // 传递的名字
        date: '2024-12-21' // 传递的日期
    }),
})
.then((response) => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then((data) => {
    console.log('Response from server:', data);

    // 显示返回的数据到页面上
    document.body.insertAdjacentHTML('beforeend', `<p>后端返回的消息: ${data.message || '没有返回消息'}</p>`);
})
.catch((error) => {
    console.error('Error connecting to backend:', error);

    // 显示错误信息到页面
    document.body.insertAdjacentHTML(
        'beforeend',
        `<p style="color:red;">请求失败，请检查后端服务是否正常运行。</p>`
    );
});
