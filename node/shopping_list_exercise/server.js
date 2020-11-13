const express = require('express');
const cors = require('cors');
const { urlencoded, json } = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(json())
app.use(cors())
app.use(urlencoded({ extended: true }))

let data = [{
    id: 1,
    item: 'test',
    price: '$200',
    date: new Date().toString()
}];

app.get('/items', (req, res) => {
    try {
        return res.status(200).json({
            status: 'success',
            code: 200,
            message: 'items fetched successfully',
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            code: 500,
            message: error.message
        })
    }
})


app.post('/items', (req, res) => {
    const { item, price } = req.body;
    const id = uuidv4();
    const date = new Date().toString();
    if (!item || !price) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: 'All fields are important'
        })
    }
    try {
        data = [...data, { id, item, price, date }]
        return res.status(200).json({
            status: 'success',
            code: 200,
            message: 'items added successfully',
            data: data
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            code: 500,
            message: error.message
        })
    }
})

app.get('/items/:id', (req, res) => {
    const { id } = req.params;


    if (!id) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: 'id is important'
        })
    }
    try {
        const foundData = data.find((data) => data.id == id);

        if (foundData) {
            return res.status(200).json({
                status: 'success',
                code: 200,
                message: 'item fetched successfully',
                data: foundData
            })
        } else {
            return res.status(404).json({
                status: 'not found',
                code: 404,
                message: `item with ${id} not found`
            })
        }
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            code: 500,
            message: error.message
        })
    }
})


app.patch('/items/:id', (req, res) => {
    const { item, price } = req.body;
    const { id } = req.params;

    if (!item || !price) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: 'All fields are important'
        })
    }
    try {
        let dataIndex = data.findIndex(data => data.id == id);

        if (dataIndex >= 0) {
            const newData = {
                id,
                item,
                price,
                date: new Date().toString()
            }
            data[dataIndex] = { ...newData };
            return res.status(200).json({
                status: 'success',
                code: 200,
                message: 'items edited successfully',
                data:  data[dataIndex]
            })
        } else {
            return res.status(404).json({
                status: 'not found',
                code: 404,
                message: `item with ${id} not found`
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            status: 'error',
            code: 500,
            message: error.message
        })
    }
})

app.delete('/items/:id', (req, res) => {
    const { id } = req.params;


    if (!id) {
        return res.status(400).json({
            status: 'error',
            code: 400,
            message: 'All fields are important'
        })
    }
    try {
        const foundIndex = data.findIndex(data => data.id == id);
        delete data[foundIndex];
        return res.status(200).json({
            status: 'success',
            code: 200,
            message: `items with id: ${id} deleted successfully`
        })
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            code: 500,
            message: error.message
        })
    }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`App listening on localhost:${PORT}`);
})

