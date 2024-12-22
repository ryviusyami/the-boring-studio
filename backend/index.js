



const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://ryviusyami:Remember11@cluster0.65tpb.mongodb.net/myDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        // 示例：获取数据库和集合
        const database = client.db("myDatabase");
        const collection = database.collection("myCollection");

        // 示例：插入一条数据
        const result = await collection.insertOne({ name: "Yami", age: 25, city: "Tokyo" });
        console.log("Inserted document:", result.insertedId);

        // 示例：读取集合中的数据
        const documents = await collection.find().toArray();
        console.log("Documents in collection:", documents);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    } finally {
        await client.close();
    }
}

run();

<<<<<<< HEAD



=======
>>>>>>> 8a7147f (Initialize repository and add all files)
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// 中间件：解析 JSON 数据
app.use(express.json());

// 基本路由：测试服务器是否正常运行
app.get('/', (req, res) => {
    res.send('Hello World! Your server is running.');
});

// 示例 API：未来可以在这里处理数据
app.post('/api/appointment', (req, res) => {
    console.log(req.body); // 确保打印请求数据
    res.json({ message: 'API received your request!' }); // 返回确认消息
});


// 监听端口
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
