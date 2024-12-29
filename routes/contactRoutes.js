const express = require('express');
const Book = require('../models/book');
const router = express();

//create data
router.post('/books',async(req,res)=>{
    try{
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch(error){
        res.status(500).json({message: error.message});
    }
});



//Read: Ambil semua data buku
router.get('/books',async(req,res)=>{
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error){
        res.status(500).Json({message: error.message});
    }
});

//read: ambil detail buku key'id'


//update: edit data baru
router.put('/:id', async(req,res) => {
    try{
        const book = await Book.findByPk(req.params.id);
        if(!book) return res.status(404).json({message: 'Book not found'});

        await book.update(req.body);
        res.json(book);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

//delete data
router.delete('/:id', async(req,res)=>{
    try{
        const book = await Book.findByPk(req.params.id);
        if(!book) return res.status(404).json({message: 'Book not found'});

        await book.destroy();
        res.json({message:'Book deleted successfully'});       
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

module.exports = router;