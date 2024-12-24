const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// MongoDB 连接配置
const uri = "mongodb+srv://ryviusyami:Remember11@cluster0.65tpb.mongodb.net/myDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

// 中间件配置
app.use(cors({
    origin: 'https://the-boring-studio.onrender.com', // 替换为你的前端 URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));
app.use(express.json());

// 测试服务器是否正常运行
app.get('/', (req, res) => {
    res.send('Hello World! Your server is running.');
});

// 定义 /api/appointment 路由
app.post('/api/appointment', async (req, res) => {
    console.log('Received POST request at /api/appointment');
    console.log('Request Body:', req.body);

    const { name, date } = req.body; // 从请求中解构数据

    if (!name || !date) {
        return res.status(400).json({ error: 'Name and date are required.' });
    }

    try {
        // 连接到 MongoDB 并插入数据
        await client.connect();
        const database = client.db("myDatabase");
        const collection = database.collection("appointments");

        const result = await collection.insertOne({ name, date });
        console.log('Inserted document:', result.insertedId);

        res.json({ message: 'Appointment saved successfully!', id: result.insertedId });
    } catch (error) {
        console.error('Error saving appointment:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        await client.close();
    }
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});