console.log('Frontend is connected to script.js!');

<<<<<<< HEAD

// 测试与后端 API 通信
fetch('http://localhost:3000/api/appointment', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Yami', time: '2024-12-20' })
})
.then(response => response.json()) // 将服务器响应解析为 JSON
.then(data => {
    console.log('Response from server:', data);

    // 将返回的数据显示到页面上
    document.body.insertAdjacentHTML('beforeend', `<p>${data.message}</p>`);
})
.catch(error => {
    console.error('Error:', error);

    // 如果请求失败，页面上显示错误信息
    document.body.insertAdjacentHTML('beforeend', `<p style="color:red;">请求失败，请检查后端服务器是否运行</p>`);
});

// 如果需要独立发送其他请求，可以将以下代码作为一个新函数：
function sendNewRequest() {
    fetch('http://localhost:3000/api/new-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: 'value' })
    })
    .then(response => response.json())
    .then(data => {
        console.log('New response:', data);
        document.body.insertAdjacentHTML('beforeend', `<p>${data.status}</p>`);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// 在需要时调用 sendNewRequest 函数
// sendNewRequest();


=======
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
>>>>>>> 8a7147f (Initialize repository and add all files)
