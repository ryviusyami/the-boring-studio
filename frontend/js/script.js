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
    console.error('Error:', error);
    document.body.insertAdjacentHTML(
        'beforeend',
        `<p style="color:red;">网络请求失败，请检查网络连接或后端服务是否正常运行。</p>`
    );
});

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/appointment', (req, res) => {
    const { name, date } = req.body;
    if (!name || !date) {
        return res.status(400).json({ error: 'Name and date are required' });
    }
    res.json({ message: `Appointment for ${name} on ${date} received!` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});