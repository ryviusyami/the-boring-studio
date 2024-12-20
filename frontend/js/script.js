console.log('Frontend is connected to script.js!');


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


